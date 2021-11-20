import { createContext, useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export const themes = {
    trueBlue: {
        black: `0, 0, 0`,
        white: `255, 255, 255`,
        whiteOnDark: `255, 255, 255`,
        navy: `0, 25, 53`,
        accent: `0, 184, 255`,
        secondaryAccent: `229, 231, 234`,
        follow: `243, 248, 251`
    },
    darkMode: {
        black: `255, 255, 255`,
        white: `34, 34, 34`,
        whiteOnDark: `255, 255, 255`,
        navy: `0, 0, 0`,
        accent: `0, 184, 255`,
        secondaryAccent: `57, 57, 57`,
        follow: `36, 54, 62`
    },
    lowContrast: {
        black: `191, 191, 191`,
        white: `54, 70, 93`,
        whiteOnDark: `191, 191, 191`,
        navy: `26, 39, 53`,
        accent: `32, 185, 252`,
        secondaryAccent: `71,87,109`,
        follow: `43,76,104`
    },
    cement: {
        black: `0, 0, 0`,
        white: `233, 233, 233`,
        whiteOnDark: `0, 0, 0`,
        navy: `247, 247, 247`,
        accent: `0,0,0`,
        secondaryAccent: `221, 221, 221`,
        follow: `209, 227, 235`
    }
};

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('trueBlue');

    useEffect(() => {
        axios.get('http://localhost:3333/users').then(response => {
            setTheme(response.data.theme);
        });
    }, []);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}
