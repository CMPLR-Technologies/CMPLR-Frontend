import React, { useContext } from 'react';
import AccountPopupSeperator from './AccountPopupSeperator';
import AccountPopupHeader from './AccountPopupHeader';
import AccountPopupFooter from './AccountPopupFooter';
import AccountPopupActions from './AccountPopupActions';

import {
    ThemeContext,
    themes
} from '../../../../../contexts/themeContext/ThemeContext';

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
    `;

    return (
        <div data-testid="dropDownAccount" className={`account-popup`}>
            <AccountPopupHeader />
            <AccountPopupActions />
            <AccountPopupSeperator />

            <AccountPopupFooter />
            {/* 
            <AccountPopupBlogs />
             */}
            <style>{css}</style>
        </div>
    );
}
