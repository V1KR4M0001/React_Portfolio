// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
            setIsDarkTheme(false);
            document.body.classList.add('light-theme');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        if (!isDarkTheme) {
            document.body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};