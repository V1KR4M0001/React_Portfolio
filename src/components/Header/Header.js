import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Importing the CSS

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 300;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });

            // Sticky header
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('sticky', window.scrollY > 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <a href="#" className="logo">Vikram Singh</a>

            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                <a href="#" className="theme-toggle" onClick={toggleTheme}>
                    {isDarkTheme ? <FaMoon /> : <FaSun />}
                </a>
            </nav>
        </header>
    );
};

export default Header;
