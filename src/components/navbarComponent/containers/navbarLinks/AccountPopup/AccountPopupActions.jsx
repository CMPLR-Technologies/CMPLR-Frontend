import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    ThemeContext,
    themes
} from '../../../../../contexts/themeContext/ThemeContext';
import axios from 'axios';
import AccountPopupActionRow from './AccountPopupActionRow';

export default function AccountPopupActions() {
    const [theme, setTheme] = useContext(ThemeContext);
    const [paletteChanged, setPaletteChanged] = useState(false);
    const toggleTheme = () => {
        //console.log(theme, themes[theme]);
        setPaletteChanged(true);
        const keys = Object.keys(themes);
        const nextIndex = (keys.indexOf(theme) + 1) % keys.length;
        axios
            .put('http://localhost:3333/users', { theme: keys[nextIndex] })
            .then(() => {
                setTheme(keys[nextIndex]);
            });
    };
    const ViewShortcuts = () => {
        document.querySelector('.overlay-container').style.display = 'flex';
    };

    return (
        <div
            data-testid="dropDownAccountActions"
            className={`account-popup-actions`}
        >
            <NavLink to="/likes" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="1"
                    icon="likes"
                    title="Likes"
                    count="x"
                />
            </NavLink>
            <NavLink to="/following" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="2"
                    icon="following"
                    title="Following"
                    count="y"
                />
            </NavLink>
            <NavLink to="/settings/account" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="3"
                    icon="settings"
                    title="Settings"
                    count=" "
                />
            </NavLink>
            <NavLink to="/blog/view/changes" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="4"
                    icon="new"
                    title="What's new"
                    count=" "
                />
            </NavLink>
            <NavLink to="/help" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="5"
                    icon="help"
                    title="Help"
                    count=" "
                />
            </NavLink>
            <div onClick={ViewShortcuts}>
                <AccountPopupActionRow
                    key="6"
                    icon="shortcuts"
                    title="Keyboard shortcuts"
                    count=" "
                />
            </div>
            <div onClick={toggleTheme}>
                <AccountPopupActionRow
                    key="7"
                    icon="themes"
                    title={paletteChanged ? theme : 'Change Palette'}
                    count={`${Object.keys(themes).indexOf(theme) + 1}/${
                        Object.keys(themes).length
                    }`}
                />
            </div>
        </div>
    );
}
