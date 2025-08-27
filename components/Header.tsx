

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

    const rustyworks = [
        {title : 'Links' , href :'#footer'},
        {title : 'About' , href :'#about'},
        {title : 'Works' , href : '#works' },
    ]

    return (
        <>
            {/* Desktop Header */}
            <header className="absolute top-3  px-6 z-50 hidden lg:block bg-white/20  backdrop-blur-md rounded-3xl my-2
            w-2/3 2xl:px-8">   
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold flex flex-row-1 items-center">
                      <img src="/logo.png" alt="RustySky Logo" className="w-22" />
                      <div className="relative ml-2">
                        <img 
                          width="30" 
                          height="30" 
                          src="https://img.icons8.com/?size=100&id=40021&format=png&color=FFFFFF" 
                          className='cursor-pointer transition-transform duration-300 transform'
                          style={{
                            transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)'
                          }}
                          alt="expand-arrow--v2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                          }}
                        />
                        <div className={`
                          absolute top-full left-0 mt-2
                          transition-all duration-300 ease-in-out
                          ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}
                          z-[60]
                        `}>
                          <div className={`
                            flex flex-col items-start p-4 space-y-4
                            bg-white/20 backdrop-blur-md rounded-b-xl
                            min-w-[120px] shadow-lg mt-[21px] 
                          `}>
                            {rustyworks.map((item, index) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="text-md font-regular 2xl:text-lg text-white hover:font-satisfy transition-all duration-300 ease-in-out w-1 p-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsMenuOpen(false);
                                }}
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <nav className="flex items-center space-x-10 text-white ">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-md font-regular 2xl:text-lg hover:font-satisfy transition-all duration-300 p-2 ease-in-out hover:p-6 "
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