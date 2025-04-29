import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize state from localStorage or system preference
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // Check for saved theme preference first
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        
        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Effect to apply theme to document body and store preference
    useEffect(() => {
        // Apply theme classes to body
        document.body.classList.toggle('light-theme', !isDarkTheme);
        document.body.classList.toggle('dark-theme', isDarkTheme);
        
        // Store preference
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        
        // Update CSS variables based on theme
        if (isDarkTheme) {
            document.documentElement.style.setProperty('--bg-color', '#1f242d');
            document.documentElement.style.setProperty('--second-bg-color', '#323946');
            document.documentElement.style.setProperty('--text-color', '#fff');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#ffffff');
            document.documentElement.style.setProperty('--second-bg-color', '#f9f9f9');
            document.documentElement.style.setProperty('--text-color', '#333');
        }
        
        // Main color stays the same in both themes
        document.documentElement.style.setProperty('--main-color', '#007bff');
    }, [isDarkTheme]);

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleChange = (e) => {
            // Only change if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                setIsDarkTheme(e.matches);
            }
        };
        
        // Add event listener
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            // Older browsers
            mediaQuery.addListener(handleChange);
        }
        
        // Clean up
        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                // Older browsers
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    // Toggle function
    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};