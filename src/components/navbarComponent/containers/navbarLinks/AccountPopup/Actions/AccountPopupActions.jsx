import React, { useContext, useState, useEffect } from 'react';
import { apiBaseUrl } from '../../../../../../config.json';
import { NavLink } from 'react-router-dom';
import {
    ThemeContext,
    themes
} from '../../../../../../contexts/themeContext/ThemeContext';
import AccountPopupActionRow from './AccountPopupActionRow';
import ShortcutsPageOverlay from './shortcuts/ShortcutsPageOverlay';
import axios from 'axios';

/**
 * @function AccountPopupActions
 * @description Account Popup Actions Container
 * @property {bool} paletteChanged - state set to false at first and is changed to true if palette is changed
 * @property {function} setPaletteChanged - paletteChanged state setter
 * @property {bool} shortcutOverlay - boolean to manage visibility of shortcuts list
 * @property {function} setShortcutOverlay - shortcutOverlay state setter
 * @property {number} likesCount
 * @property {function} setLikesCount - likesCount state setter
 * @property {number} followingCount
 * @property {function} setFollowingCount - followingCount state setter
 * @property {function} viewShortcuts - Event Handler to call setShortcutOverlay(true)
 * @property {function} toggleTheme - calls changeTheme in ThemeContext
 * @returns {Component}
 */

export default function AccountPopupActions() {
    const [theme, changeTheme] = useContext(ThemeContext);
    const [paletteChanged, setPaletteChanged] = useState(false);
    const [shortcutOverlay, setShortcutOverlay] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);

    const toggleTheme = () => {
        setPaletteChanged(true);
        changeTheme(theme);
    };
    const viewShortcuts = () => {
        setShortcutOverlay(true);
    };

    useEffect(() => {
        axios
            .get(`${apiBaseUrl}/likes`)
            .then(response => {
                setLikesCount(response.data.length);
            })
            .catch(() => {});
        axios
            .get(`${apiBaseUrl}/following`)
            .then(response => {
                setFollowingCount(response.data.length);
            })
            .catch(() => {});
    }, []);

    return (
        <div
            data-testid="AccountPopupActions"
            className={`account-popup-actions`}
        >
            {shortcutOverlay && (
                <ShortcutsPageOverlay setShortcutOverlay={setShortcutOverlay} />
            )}

            <NavLink to="/likes" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="1"
                    icon="likes"
                    title="Likes"
                    count={likesCount ? likesCount : ' '}
                />
            </NavLink>
            <NavLink to="/following" className={`account-action-link`}>
                <AccountPopupActionRow
                    key="2"
                    icon="following"
                    title="Following"
                    count={followingCount ? followingCount : ' '}
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
            <div onClick={viewShortcuts} data-testid="ViewShortcuts">
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
