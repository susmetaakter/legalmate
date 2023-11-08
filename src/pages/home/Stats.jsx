import React from 'react';
import { BsBuildings } from "react-icons/bs"
const Stats = () => {
    return (
        <section className='mt-20 relative bg-[url("https://i.ibb.co/Q6vt0gj/images-auto-x2.png")] bg-fixed bg-cover bg-no-repeat bg-center h-[420px] md:h-60 duration-300'>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className=' absolute top-16 container right-2 left-2'>
                <div className='w-full duration-300 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10'>
                    <div className='text-center'>
                        <img className='rounded-full w-16 h-16 mx-auto bg-white p-1' src="https://www.svgrepo.com/show/522410/globe.svg" alt="" />
                        <p className='font-bold text-2xl mt-3'>120+</p>
                        <p className='text-primary text-xl'>Case Done</p>
                    </div>
                    <div className='text-center'>
                        <img className='rounded-full w-16 h-16 mx-auto bg-white p-1' src="https://www.svgrepo.com/show/458220/group.svg" alt="" />
                        <p className='font-bold text-2xl mt-3'>100+</p>
                        <p className='text-primary text-xl'>Happy Clients</p>
                    </div>
                    <div className='text-center'>
                    <img className='rounded-full w-16 h-16 mx-auto bg-white p-1' src="https://www.svgrepo.com/show/414229/write.svg" alt="" />
                        <p className='font-bold text-2xl mt-3'>200+</p>
                        <p className='text-primary text-xl'>Expert Attorneys</p>
                    </div>
                    <div className='text-center'>
                        <BsBuildings className="bg-white text-black rounded-full w-16 h-16 mx-auto p-1" />
                        <p className='font-bold text-2xl mt-3'>10+</p>
                        <p className='text-primary text-xl'>Offices</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;