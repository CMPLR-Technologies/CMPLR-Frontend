import React, { useEffect, useContext } from 'react';
import PagesList from '../../../settingsComponent/PagesList';
import UserNameSection from './UserNameSection';
import { useParams } from 'react-router-dom';
// import { getUserAccount } from '../../Service';

import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
export default function BlogSettings() {
    const { blogNameParams } = useParams();
    const { blogName, updateProperty } = useContext(BlogSettingsContext);
    useEffect(() => {
        updateProperty('blogName', blogNameParams);
    }, []);

    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer">
                    <h2 className="title">Account {blogName}</h2>
                    <div>
                        <UserNameSection />
                        {/* <EmailSection />
                        <PasswordSection />
                        <SecuritySection />
                        <FilteringSection />
                        <DeleteSection /> */}
                    </div>
                </div>
            </div>
            <PagesList />
        </div>
    );
}
