import React, { useEffect, useContext } from 'react';
import PagesList from '../../PagesList';
import TumblrNewsSection from './TumblrNewsSection';
import ConversationalNotificationsSection from './ConversationalNotificationsSection';
import { getUserAccount } from '../../Service';

import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
/**
 * @function SettingsNotifications
 * @description This function is used to render the notifications settings page
 * @returns {React.Component} Account settings page component
 */
export default function SettingsAccount() {
    const { setSettings } = useContext(SettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        getUserAccount(setSettings, user?.token);
    }, []);
    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer" tset-id="settings-notifications">
                    <h2 className="title">Notifications</h2>
                    <div>
                        {/* <TumblrNewsSection /> */}
                        <ConversationalNotificationsSection />
                    </div>
                </div>
            </div>

            <PagesList />
        </div>
    );
}
