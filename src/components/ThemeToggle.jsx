import { useContext } from 'react';
import { ThemeContext, themes } from '../contexts/themeContext/ThemeContext';
import React from 'react';
import axios from 'axios';

/**
 * Theme Toggle: a dummy button to test theme changing in mocked database
 * @function ThemeToggle
 * @property {string} theme - Theme state provided by context
 * @property {function} setTheme - Theme state setter provided by contex
 * @property {function} toggleTheme - Event handling func to update the theme in db and state on click
 * @returns {Component} button
 */

export default function ThemeToggle() {
    const [theme, setTheme] = useContext(ThemeContext);

    const toggleTheme = () => {
        //console.log(theme, themes[theme]);

        const keys = Object.keys(themes);
        const nextIndex = (keys.indexOf(theme) + 1) % keys.length;
        axios
            .put('http://localhost:3333/users', { theme: keys[nextIndex] })
            .then(() => {
                setTheme(keys[nextIndex]);
            })
            .catch(() => {
                setTheme(theme);
            });
    };

    return (
        <div>
            <input
                type="button"
                value={theme}
                onClick={toggleTheme}
                Style={'color: black;'}
            />
        </div>
    );
}
