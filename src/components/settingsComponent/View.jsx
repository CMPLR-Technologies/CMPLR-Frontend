import React from 'react';
import SettingsAccount from './containers/account/SettingsAccount';
import SettingsContextProvider from '../../contexts/settingsContext/SettingsContext';
export default function Settings(page) {
    const currentPage = page.page;
    return (
        <SettingsContextProvider>
        <div className="settings">
            {currentPage === 'account' && <SettingsAccount />}
            
            
        </div>
        </SettingsContextProvider>
    );
}
