import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isSticky, setIsSticky] = useState(false);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            // Update active section based on scroll position
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 300;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (
                    scrollPosition >= sectionTop && 
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId);
                }
            });

            // Update sticky header state
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        if (menuOpen) setMenuOpen(false);
    };

    return (
        <header className={`header ${isSticky ? 'sticky' : ''} ${isDarkTheme ? 'dark' : ''}`}>
            <a href="#home" className="logo">Vikram Singh</a>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <a 
                    href="#home" 
                    className={activeSection === 'home' ? 'active' : ''} 
                    onClick={handleLinkClick}
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    className={activeSection === 'about' ? 'active' : ''} 
                    onClick={handleLinkClick}
                >
                    About
                </a>
                <a 
                    href="#education" 
                    className={activeSection === 'education' ? 'active' : ''} 
                    onClick={handleLinkClick}
                >
                    Education
                </a>
                <a 
                    href="#skills" 
                    className={activeSection === 'skills' ? 'active' : ''} 
                    onClick={handleLinkClick}
                >
                    Skills
                </a>
                <a 
                    href="#contact" 
                    className={activeSection === 'contact' ? 'active' : ''} 
                    onClick={handleLinkClick}
                >
                    Contact
                </a>
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme} 
                    aria-label="Toggle theme"
                >
                    {isDarkTheme ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
};

export default Header;