

'use client'
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuItems = [
        { title: 'Our Company', href: '/company' },
        { title: 'Pipeline', href: '/pipeline' },
        { title: 'Media & Investors', href: '/media' },
        { title: 'Contact', href: '/contact' }
    ];

    return (
        <>
            {/* Desktop Header */}
            <header className="absolute top-3  px-6 z-50 hidden lg:block bg-white/20  backdrop-blur-md rounded-3xl  my-2
            w-2/3 2xl:px-8">   
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    <a href="/" className="text-xl font-bold">
                    <img src="/logo.png" alt="RustySky Logo" className="w-22" />
                    </a>
                    
                    <nav className="flex items-center space-x-8 ">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-md font-regular 2xl:text-lg hover:opacity-70 transition-opacity"
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="absolute top-0 w-full px-6 z-50 lg:hidden ">
                <div className="flex justify-between items-center relative z-50  ">
                    <a href="/" className="text-2xl font-bold">
                            <img src="/logo.png" alt="RustySky Logo" className="w-35" />
                    </a>
                    
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-8 h-8 relative flex items-center justify-center z-50 text-white"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute w-6 h-6 flex items-center justify-center">
                            {/* Plus/X animation */}
                            <div className={`
                                w-6 h-0.5 bg-current absolute
                                transition-transform duration-300
                                ${isMenuOpen ? 'rotate-45' : 'rotate-0'}
                            `} />
                            <div className={`
                                w-6 h-0.5 bg-current absolute
                                transition-transform duration-300
                                ${isMenuOpen ? '-rotate-45' : 'rotate-90'}
                            `} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`
                    fixed inset-0 bg-white/15 backdrop-blur-lg z-40
                    transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}>
                    <div className={`
                        flex flex-col items-start p-6 pt-24 space-y-6
                        transition-all duration-500 ease-in-out
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} border-b-2 border-black border-dashed w-3/4  ml-8 mt-8
                    `}>
                        {menuItems.map((item, index) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-2xl font-regular text-white hover:opacity-70 transition-opacity"
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    transitionDelay: `${index * 50}ms`,
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                                }}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        </>
    );
}