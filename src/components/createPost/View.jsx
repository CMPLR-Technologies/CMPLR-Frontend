import React, { useContext } from 'react';
import OptionsCreatePost from './containers/DashboardContainer/OptionsCard';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import ProfilePicContainer from './containers/DashboardContainer/ProfilePicContainer';
import ProfileMiniHoverWrapper from '../profileViews/mini&sideViews/View';
import { UserContext } from '../../contexts/userContext/UserContext';

export default function CreatePost() {
    const { user } = useContext(UserContext);
    const theme = useContext(ThemeContext)[0];
    const css = `
        .create_container {
            background: rgb(${themes[theme]?.white});
        }
        .profilepic_create{
            color: rgb(${themes[theme]?.white});
        }
        .btncreateoption{
            color: rgba(${themes[theme]?.black});
        }
        .post-forms-modal{
            color:rgba(${themes[theme]?.black});
        }
        .v-center-outer{
            color:rgba(${themes[theme]?.black});
        }
        .v-center-inner{
            color:rgba(${themes[theme]?.black});
        }
    `;

    return (
        <>
            <style>{css}</style>

            <div className="create1div">
                <main className="create_main">
                    <div className="create_container">
                        <ProfileMiniHoverWrapper
                            blogID={user?.userData?.primary_blog_id.toString()}
                            blogName={user?.blogName}
                        >
                            <ProfilePicContainer />
                        </ProfileMiniHoverWrapper>
                        <OptionsCreatePost />
                    </div>
                </main>
            </div>
        </>
    );
}
