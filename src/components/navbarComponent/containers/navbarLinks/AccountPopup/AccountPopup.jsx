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
            <AccountPopupBlogsContainer />
            <AccountPopupFooter />
            {/*
             */}
            <style>{css}</style>
        </div>
    );
}
