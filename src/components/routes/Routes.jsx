import React, { useContext } from 'react';
import LoginView from '../loginComponent/View';
import Register from '../registerComponent/View';
import HomePage from '../homeComponent/View';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbarComponent/View';
import MessagesPageMobile from '../navbarComponent/containers/navbarLinks/MessagesPopup/MessagesPageMobile';
import ForgetPassword from '../forgetPasswordComponent/View';
import ResetPassword from '../resetPasswordComponent/View';
import Settings from '../settingsComponent/View';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';
import HandMadeTextEditor from '../RichTextEditor/View';
import CreateModal from '../createPost/containers/PopupContainer/View';
import Dashboard from '../dashboardComponent/View';

import PostComponent from '../partials/postComponent/View';
export default function MainRoutes() {
    const theme = useContext(ThemeContext)[0];
    const css = `
        body{
            background-color: rgb(${
                theme ? themes[theme].navy : themes['trueBlue'].navy
            });
        }
    `;

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/messaging" element={<MessagesPageMobile />} />
                    <Route path="/new/post" element={<CreateModal />} />
                    <Route path="/rich" element={<HandMadeTextEditor />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/forget_password"
                        element={<ForgetPassword />}
                    />
<<<<<<< HEAD
                    <Route path="/reset_password" element={<ResetPassword />} />
                    <Route path="/a" element={<Settings page={'account'} />} />
                    <Route path="/settings/dashboard" element={<Settings />} />
                    <Route path="/settings/apps" element={<Settings />} />
                    <Route path="/settings/privacy" element={<Settings />} />
=======
                    <Route
                        path="/reset_password/:token"
                        element={<ResetPassword />}
                    />
                    <Route
                        path="/post"
                        element={
                            <>
                                <PostComponent
                                    userBlogName="kholdbold"
                                    isFollowed={false}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/reblog/:blogName/:postId/:reblogKey"
                        element={<CreateModal reblog={true} />}
                    />
>>>>>>> 2aec40a8594635d226713803c6a04cc26add0d5c
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
