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
    const {user,setUser} = useContext(UserContext);
    const { children } = props;

    useEffect(() => {
        if (user) {
            if(user?.userData?.theme){
                setTheme(user?.userData?.theme);
            }else{
                setTheme("trueBlue");
            }
        }
    }, [user]);

    const changeTheme = (currentTheme) => {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        const keys = Object.keys(themes);
        const nextIndex = (keys.indexOf(currentTheme) + 1) % keys.length;
        axios
            .put(`${apiBaseUrl}/user_theme`, { theme: keys[nextIndex] }, config)
            .then(() => {
                let adjustUser=user;
                adjustUser.userData.theme=keys[nextIndex];
                setUser(adjustUser);
                localStorage.setItem('user',JSON.stringify(adjustUser));
                setTheme(keys[nextIndex]);
            });
    };

    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeContextProvider.propTypes = {
    children: PropTypes.any
};
