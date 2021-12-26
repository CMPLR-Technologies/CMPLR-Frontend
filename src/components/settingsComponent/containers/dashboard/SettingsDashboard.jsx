import React, { useEffect, useContext } from 'react';
import PagesList from '../../PagesList';
import InterfaceSection from './InterfaceSection';
import SoundsSection from './SoundsSection';
import PreferencesSection from './PreferencesSection';
import { getUserAccount } from '../../Service';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
export default function SettingsDashboard() {
    const { setSettings } = useContext(SettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        getUserAccount(setSettings, user?.token);
    }, []);

    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer">
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
