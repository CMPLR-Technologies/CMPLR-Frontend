import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    ThemeContext,
    themes
} from '../../../../../../contexts/themeContext/ThemeContext';
import AccountPopupActionRow from './AccountPopupActionRow';

export default function AccountPopupActions() {
    const [theme, changeTheme] = useContext(ThemeContext);
    const [paletteChanged, setPaletteChanged] = useState(false);
    const toggleTheme = () => {
        //console.log(theme, themes[theme]);
        setPaletteChanged(true);
        changeTheme(theme);
    };
    const viewShortcuts = () => {
        document.querySelector('.overlay-container').style.display = 'flex';
    };

    const likesCount = 10;
    const followingCount = 5;

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
                    count={likesCount}
                />
            </NavLink>
            <NavLink to="/following" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="2"
                    icon="following"
                    title="Following"
                    count={followingCount}
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
            <div onClick={viewShortcuts}>
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
