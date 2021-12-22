import React from 'react';
import SettingsAccount from './containers/account/SettingsAccount';
import SettingsDashboard from './containers/dashboard/SettingsDashboard';
import SettingsNotifications from './containers/notfications/SettingsNotifications';
import SettingsApps from './containers/settingsApps/SettingsApps';
import SettingsContextProvider from '../../contexts/settingsContext/SettingsContext';
export default function Settings(page) {
    const currentPage = page.page;
    return (
        <SettingsContextProvider>
            <div className="settings">
                {currentPage === 'account' && <SettingsAccount />}
                {currentPage === 'dashboard' && <SettingsDashboard />}
                {currentPage === 'notifications' && <SettingsNotifications />}
                {currentPage === 'apps' && <SettingsApps />}
            </div>
        </SettingsContextProvider>
    );
}
