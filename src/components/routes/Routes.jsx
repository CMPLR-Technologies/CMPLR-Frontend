import React, { useContext } from 'react';
import LoginView from '../loginComponent/View';
import Register from '../registerComponent/View';
import HomePage from '../homeComponent/View';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbarComponent/View';
import MessagesPageMobile from '../navbarComponent/containers/navbarLinks/MessagesPopup/MessagesPageMobile';
import ForgetPassword from '../forgetPasswordComponent/View';
import ResetPassword from '../resetPasswordComponent/View';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';
import HandMadeTextEditor from '../RichTextEditor/View';
import CreateModal from '../createPost/containers/PopupContainer/View';
import Dashboard from '../dashboardComponent/View';

import PostComponent from '../partials/postComponent/View';
import FollowingPage from '../following/View';
import {
    RequireAuth,
    RequireUnAuth
} from '../../contexts/userContext/UserContext';
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
                    <Route
                        path="/register"
                        element={
                            <RequireUnAuth>
                                <Register />
                            </RequireUnAuth>
                        }
                    />
                    <Route path="/messaging" element={<MessagesPageMobile />} />
                    <Route
                        path="/new/post"
                        element={
                            <RequireAuth>
                                <CreateModal />
                            </RequireAuth>
                        }
                    />
                    <Route path="/rich" element={<HandMadeTextEditor />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <RequireUnAuth>
                                <Register />
                            </RequireUnAuth>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RequireUnAuth>
                                <LoginView />
                            </RequireUnAuth>
                        }
                    />
                    <Route
                        path="/following"
                        element={
                            <RequireAuth>
                                <FollowingPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/forget_password"
                        element={
                            <RequireUnAuth>
                                <ForgetPassword />
                            </RequireUnAuth>
                        }
                    />
                    <Route
                        path="/reset_password/:token"
                        element={<ResetPassword />}
                    />
                    <Route
                        path="/post"
                        element={
                            <RequireAuth>
                                <PostComponent
                                    userBlogName="kholdbold"
                                    isFollowed={false}
                                />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/reblog/:blogName/:postId/:reblogKey"
                        element={
                            <RequireAuth>
                                <CreateModal reblog={true} />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <RequireUnAuth>
                                <HomePage />
                            </RequireUnAuth>
                        }
                    />
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
