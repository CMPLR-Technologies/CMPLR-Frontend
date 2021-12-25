import React from 'react';
import CreateBlog from './containers/createBlog/CreateBlog';
// import SettingsDashboard from './containers/dashboard/SettingsDashboard';
// import SettingsNotifications from './containers/notfications/SettingsNotifications';
// import SettingsApps from './containers/settingsApps/SettingsApps';
// import SettingsContextProvider from '../../contexts/settingsContext/SettingsContext';
export default function blogSettings(page) {
    const currentPage = page.page;
    return (
        // <SettingsContextProvider>
            <div className="settings">
                {currentPage === 'create' && <CreateBlog />}
                {/* {currentPage === 'dashboard' && <SettingsDashboard />}
                {currentPage === 'notifications' && <SettingsNotifications />}
                {currentPage === 'apps' && <SettingsApps />} */}
            </div>
        // </SettingsContextProvider>
    );
}
