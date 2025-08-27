'use client'


import { useRouter } from 'next/navigation';
import React from 'react';

export default function Hero() {
    
    const router = useRouter()
    
    return (
        <div className=" w-full overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-240  object-cover z-0"
            >
                <source src="/rust.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white ">
                <h1 className="text-6xl font-bold mb-4 gap-0">Welcome to Rusty <span className='font-satisfy '>Works</span></h1>
                <p className="text-xl font-regular">Your Journey Begins Here</p>
                <button className='mt-8 px-6 py-3 bg-transparent  text-white border-2 border-white rounded-2xl font-bold  hover:opacity-80 transition-all hover:bg-white/80 hover:text-black hover:border-white/80 duration-400 ease-in-out'
                onClick={() => {router.push('/')}}>
                    Proceed to <span className='font-bold italic'>Works</span>
                </button>
            </div>
        </div>
    );
}