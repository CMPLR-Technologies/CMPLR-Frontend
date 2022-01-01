import React, { useEffect, useContext } from 'react';
import PagesList from '../../PagesList';
import InterfaceSection from './InterfaceSection';
import SoundsSection from './SoundsSection';
import PreferencesSection from './PreferencesSection';
import { getUserAccount } from '../../Service';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
/**
 * @function SettingsDashboard
 * @description This function is used to render the Dashboard settings page
 * @returns {React.Component} Account settings page component
 */
export default function SettingsDashboard() {
    const { setSettings } = useContext(SettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        getUserAccount(setSettings, user?.token);
    }, []);

    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer" data-testid="settings-dashboard">
                    <h2 className="title">Dashboard</h2>
                    <div>
                        <InterfaceSection />
                        <SoundsSection />
                        <PreferencesSection />
                    </div>
                </div>
            </div>

            <PagesList />
        </div>
    );
}
