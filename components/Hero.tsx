
import React from 'react';

export default function Hero() {
    return (
        <div className=" w-full overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-300  object-cover z-0"
            >
                <source src="/rust.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white ">
                <h1 className="text-6xl font-bold mb-4">Welcome to RustySky</h1>
                <p className="text-xl font-regular">Your Journey Begins Here</p>
            </div>
        </div>
    );
}