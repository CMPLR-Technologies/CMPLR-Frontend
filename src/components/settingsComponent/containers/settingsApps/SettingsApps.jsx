import React from 'react';
import PagesList from '../../PagesList';
import AppsSection from './AppsSection';
export default function SettingsAccount() {
  
    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer">
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
