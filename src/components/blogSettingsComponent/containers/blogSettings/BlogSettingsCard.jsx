import React, { useContext, useEffect, useState } from 'react';
import PagesList from '../../../settingsComponent/PagesList';
import UserNameSection from './UserNameSection';
import AllowAskSection from './AllowAskSection';
import AllowMessaging from './AllowMessaging';
import VisibilitySection from './VisibilitySection';
import RepliesSection from './RepliesSection';
import BlockSection from './BlockSection';
import DeleteSection from './DeleteSection';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { getBlogSettings, getBlocksOfBlog } from '../../Service';
import { useParams } from 'react-router-dom';
import ProfileSideSettings from '../../../profileViews/mini&sideViews/sideView/ProfileSideSettings';
export default function BlogSettingsCard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    const { setBlogs, updateProperty, blogId } =
        useContext(BlogSettingsContext);
    const [errMsg, setErrMsg] = useState('');
    useEffect(() => {
        getBlogSettings(setBlogs, user?.token, blogName);
        getBlocksOfBlog(user?.token, blogName, updateProperty, setErrMsg);
        if (errMsg?.length !== 0) {
            alert(errMsg);
        }
    }, []);
    return (
        <div className="settings" data-testid="settings">
            <div className="container1" data-testid="container1">
                <div className="subcontainer" data-testid="subcontainer">
                    {/* <ProfileSideSettings blogId={blogId} /> */}
                    <div>
                        <UserNameSection />
                        <RepliesSection />
                        <AllowAskSection />
                        <AllowMessaging />
                        <VisibilitySection />
                        <BlockSection />
                        <DeleteSection blogName={blogName} />
                    </div>
                </div>
            </div>
            <PagesList />
        </div>
    );
}
