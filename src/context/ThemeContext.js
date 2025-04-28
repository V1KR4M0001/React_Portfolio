import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        } else {
            // Check if user prefers dark mode
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkTheme(prefersDark);
        }
        
        // Apply theme to body
        document.body.classList.toggle('light-theme', !isDarkTheme);
    }, [isDarkTheme]);

    const toggleTheme = () => {
        const newThemeState = !isDarkTheme;
        setIsDarkTheme(newThemeState);
        localStorage.setItem('theme', newThemeState ? 'dark' : 'light');
        document.body.classList.toggle('light-theme', !newThemeState);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};