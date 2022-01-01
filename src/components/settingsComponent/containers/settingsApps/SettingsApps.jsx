import React from 'react';
import PagesList from '../../PagesList';
import AppsSection from './AppsSection';
/**
 * @function SettingsApps
 * @description This function is used to render the apps settings page
 * @returns {React.Component} Account settings page component
 */
export default function SettingsAccount() {
    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer" data-testid="settings-apps">
                    <h2 className="title">Apps</h2>
                    <div>
                        <AppsSection />
                    </div>
                </div>
            </div>

            <PagesList />
        </div>
    );
}
