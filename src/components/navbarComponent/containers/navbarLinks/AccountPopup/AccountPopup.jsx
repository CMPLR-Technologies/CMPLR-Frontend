import React, { useContext } from 'react';
import AccountPopupSeperator from './Seperators/AccountPopupSeperator';
import AccountPopupHeader from './Seperators/AccountPopupHeader';
import AccountPopupFooter from './Seperators/AccountPopupFooter';
import AccountPopupActions from './Actions/AccountPopupActions';
import AccountPopupBlogsContainer from './Blogs/AccountPopupBlogsContainer';

import {
    ThemeContext,
    themes
} from '../../../../../contexts/themeContext/ThemeContext';

/**
 * @function AccountPopup
 * @description Account Popup Main Component (Container)
 * @returns {Component}
 */

export default function AccountPopup() {
    const theme = useContext(ThemeContext)[0];
    const css = `
    .account-popup {
        background-color: rgb(${themes[theme].white});
    }   
    .account-popup-header{
        background-color: rgb(${themes[theme].black}, 0.07);
        color: rgba(${themes[theme].black} ,.65);
    }
    .account-popup .clickable {
        color: rgba(${themes[theme].black} ,.65);
    }
    .clickable:hover {
        color: rgba(${themes[theme].black} ,.85);
    }
    .account-popup-actions{
        color: rgb(${themes[theme].black});
    }
    .account-action-row:hover{
        background-color:  rgb(${themes[theme].secondaryAccent});
    }
    .overlay-div {
        background-color: rgb(${themes[theme].navy});
    }
    .shortcut-container {
        background-color: rgb(${themes[theme].white});
    }
    .shortcut-container h2{
        border-bottom: 2px solid rgba(${themes[theme].black}, 0.13);
    }
    .overlay-container span,
    .overlay-container h1,
    .overlay-container h2,
    .overlay-container div {
        color: rgb(${themes[theme].black});
    }
    .shortcut:hover {
        background-color: rgba(${themes[theme].black}, .07);
    }
    .shortcut-key{
        background: rgba(${themes[theme].black}, .13);
    }
    .log-out-overlay{
        background: rgb(${themes[theme].navy});
    }
    .AuthBtn{
        color: rgb(${themes[theme].navy});
    }
    .log-out-overlay-text{
        color: rgb(${themes[theme].whiteOnDark});
    }
    `;

    return (
        <div data-testid="AccountPopup" className={`account-popup`}>
            <AccountPopupHeader />
            <AccountPopupActions />
            <AccountPopupSeperator />
            <AccountPopupBlogsContainer />
            <AccountPopupFooter />
            <style>{css}</style>
        </div>
    );
}
