import React, { useContext, useEffect } from 'react';
import PagesList from '../../../settingsComponent/PagesList';
import UserNameSection from './UserNameSection';
import AllowAskSection from './AllowAskSection';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { getBlogSettings } from '../../Service';
export default function BlogSettingsCard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const blogName = user?.blogName;
    const { setBlogs } = useContext(BlogSettingsContext);
    useEffect(() => {
        getBlogSettings(setBlogs, user?.token, blogName);
    }, []);
    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer">
                    <h2 className="title">Account</h2>
                    <div>
                        <UserNameSection />
                        <AllowAskSection />
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
