import { createContext, useState, useEffect, useContext } from 'react';
import { apiBaseUrl } from '../../config.json';
import { UserContext } from '../userContext/UserContext';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const themes = {
    trueBlue: {
        black: `0, 0, 0`,
        white: `255, 255, 255`,
        whiteOnDark: `255, 255, 255`,
        navy: `0, 25, 53`,
        accent: `0, 184, 255`,
        secondaryAccent: `229, 231, 234`,
        follow: `243, 248, 251`,
        purple: `124, 92, 255`,
        red: `255, 73, 48`
    },
    darkMode: {
        black: `255, 255, 255`,
        white: `34, 34, 34`,
        whiteOnDark: `255, 255, 255`,
        navy: `0, 0, 0`,
        accent: `0, 184, 255`,
        secondaryAccent: `57, 57, 57`,
        follow: `36, 54, 62`,
        purple: `124, 92, 255`,
        red: `255, 73, 48`
    },
    lowContrast: {
        black: `191, 191, 191`,
        white: `54, 70, 93`,
        whiteOnDark: `191, 191, 191`,
        navy: `26, 39, 53`,
        accent: `32, 185, 252`,
        secondaryAccent: `71,87,109`,
        follow: `43,76,104`,
        purple: `167, 125, 194`,
        red: `217, 94, 64`
    },
    cement: {
        black: `0, 0, 0`,
        white: `233, 233, 233`,
        whiteOnDark: `0, 0, 0`,
        navy: `247, 247, 247`,
        accent: `0,0,0`,
        secondaryAccent: `221, 221, 221`,
        follow: `209, 227, 235`,
        purple: `124, 92, 255`,
        red: `255, 73, 48`
    },
    canary: {
        black: `0, 0, 0`,
        white: `250, 250, 200`,
        whiteOnDark: `0, 0, 0`,
        navy: `255, 255, 232`,
        accent: `0,0,0`,
        secondaryAccent: `240, 240, 192`,
        follow: `224, 242, 205`,
        purple: `124, 92, 255`,
        red: `255, 73, 48`
    },
    ghost: {
        black: `100, 100, 100`,
        white: `255, 255, 255`,
        whiteOnDark: `0, 0, 0`,
        navy: `255, 255, 255`,
        accent: `124, 92, 255`,
        secondaryAccent: `255, 73, 48`,
        follow: `208, 208, 208`,
        purple: `124, 92, 255`,
        red: `255, 73, 48`
    },
    gothRave: {
        black: `158, 120, 229`,
        white: `12, 12, 12`,
        whiteOnDark: `119, 201, 230`,
        navy: `0, 0, 0`,
        accent: `207, 67, 237`,
        secondaryAccent: `45, 27, 57`,
        follow: `6, 29, 74`,
        purple: `179, 2, 255`,
        red: `223, 0, 13`
    },
    pride: {
        black: `117, 8, 135`,
        white: `255, 255, 255`,
        whiteOnDark: `254, 237, 6`,
        navy: `255, 91, 181`,
        accent: `2, 77, 255`,
        secondaryAccent: `255, 251, 205`,
        follow: `255, 251, 205`,
        purple: `117, 8, 135`,
        red: `225, 0, 17`
    }
};

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('trueBlue');
    const { user, setUser } = useContext(UserContext);
    const { children } = props;

    useEffect(() => {
        if (user) {
            if (user?.userData?.theme) {
                setTheme(user?.userData?.theme);
            } else {
                setTheme('trueBlue');
            }
        }
    }, [user]);

    const changeTheme = (currentTheme = null) => {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        const keys = Object.keys(themes);
        if (currentTheme) {
            setTheme(currentTheme);
        } else {
            let nextIndex = (keys.indexOf(theme) + 1) % keys.length;
            axios
                .put(
                    `${apiBaseUrl}/user_theme`,
                    { theme: keys[nextIndex] },
                    config
                )
                .then(() => {
                    let adjustUser = user;
                    adjustUser.userData.theme = keys[nextIndex];
                    setUser(adjustUser);
                    localStorage.setItem('user', JSON.stringify(adjustUser));
                    setTheme(keys[nextIndex]);
                })
                .catch(() => {});
        }
    };
    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            {' '}
            {children}{' '}
        </ThemeContext.Provider>
    );
}

ThemeContextProvider.propTypes = {
    children: PropTypes.any
};
