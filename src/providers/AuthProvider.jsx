import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();
    // auth initialize
    const auth = getAuth(app);

    // sign up user
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // email sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update profile
    const profileUpdate = (currentUser, name, photoLink) => {
        setLoading(true);
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photoLink,
        });
    };

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // log out
    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            setUser(authUser)
            setLoading(false)
            user?.email && await axiosSecure.get(`/users/email/${user?.email}`)
                .then((data) => {
                    setCurrentUser(data.data);
                })
                .catch((err) => {
                    setLoading(false);
                });
            if (authUser === null) {
                setCurrentUser({})
                setLoading(false);
            }
        });

        return () => {
            return unsubscribe();
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        setLoading,
        currentUser,
        signUp,
        signIn,
        profileUpdate,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;