import React, { useEffect, useContext } from 'react';
import PagesList from '../../PagesList';
import TumblrNewsSection from './TumblrNewsSection';
import ConversationalNotificationsSection from './ConversationalNotificationsSection';
import { getUserAccount } from '../../Service';

import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
export default function SettingsAccount() {
    const { setSettings } = useContext(SettingsContext);
    useEffect(() => {
        getUserAccount(setSettings);
    }, []);

    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer">
                    <h2 className="title">Notifications</h2>
                    <div>
                        <TumblrNewsSection />
                        <ConversationalNotificationsSection />
                    </div>
                </div>
            </div>

            <PagesList />
        </div>
    );
}
