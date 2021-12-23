import React, { useContext } from 'react';
import OptionsCreatePost from './containers/DashboardContainer/OptionsCard';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import ProfilePicContainer from './containers/DashboardContainer/ProfilePicContainer';

export default function CreatePost() {
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
                        <ProfilePicContainer />
                        <OptionsCreatePost />
                    </div>
                </main>
            </div>
        </>
    );
}
