import React, { useState, useEffect, useContext } from 'react';
import PagesList from '../../PagesList';
import EmailSection from './EmailSection';
import PasswordSection from './PasswordSection';
import SecuritySection from './SecuritySection';
import FilteringTagsSection from './FilteringTagsSection';
import DeleteSection from './DeleteSection';
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
                    <h2 className="title">Account</h2>
                    <div>
                        <EmailSection />
                        <PasswordSection />
                        <SecuritySection />
                        <FilteringTagsSection />
                        <DeleteSection />
                    </div>
                </div>
            </div>

            <PagesList />
        </div>
    );
}
