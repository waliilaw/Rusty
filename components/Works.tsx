

export default function Works() {   
    const projects = [
        {
            title: "Rust APIs",
            description: "High-performance API Gateway built with Rust",
            color: ['#0894FF', '#C959DD', '#FF2E54', '#FF9004']
        },
        {
            title: "Blockchain Explorer",
            description: "Real-time blockchain data visualization",
            color: ['#0894FF', '#C959DD', '#FF2E54', '#FF9004']
        },
        {
            title: "Real-time Analytics",
            description: "Data processing engine in Rust",
            color: ['#0894FF', '#C959DD', '#FF2E54', '#FF9004']
        }
    ];

    return ( 
        <section className='w-full min-h-screen py-20 bg-gradient-to-b from-white to-gray-50'
            id='works'
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Works
                    </h2>
                    <p className="text-xl text-gray-600">
                        Exploring the possibilities with Rust
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                            <GlowEffectCard
                                title={project.title}
                                description={project.description}
                                colors={project.color}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { GlowEffect } from '@/components/ui/glow-effect';

interface GlowEffectCardProps {
    title: string;
    description: string;
    colors: string[];
}

export function GlowEffectCard({ title, description, colors }: GlowEffectCardProps) {
    return (
        <div className='relative group h-[300px] w-full rounded-xl overflow-hidden'>
            {/* Glow Effect */}
            <GlowEffect
                colors={colors}
                mode='rotate'
                blur='strong'
                scale={1.5}
                duration={10}
                className="opacity-0 group-hover:opacity-100 transition-all duration-500"
            />
            
            {/* Content */}
            <div className='relative h-full w-full bg-black/90 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-300 group-hover:bg-black/80'>
                <div>
                    <h3 className='text-2xl font-bold text-white mb-3'>{title}</h3>
                    <p className='text-gray-300'>{description}</p>
                </div>
                
                <div className='flex items-center justify-between'>
                    <div className='text-white/60 text-sm'>Built with Rust</div>
                    <svg
                        className='w-8 h-8 text-white/40 group-hover:text-white/60 transition-colors duration-300'
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
