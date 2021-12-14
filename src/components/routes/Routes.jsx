import React, { useContext } from 'react';
import LoginView from '../loginComponent/View';
import Register from '../registerComponent/View';
import HomePage from '../homeComponent/View';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbarComponent/View';
import MessagesPageMobile from '../navbarComponent/containers/navbarLinks/MessagesPopup/MessagesPageMobile';
import NewPostPopup from '../navbarComponent/containers/navbarLinks/newPost/NewPostPopup';
import ForgetPassword from '../forgetPasswordComponent/View';
import ResetPassword from '../resetPasswordComponent/View';
import Settings from '../settingsComponent/View';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';
import CreatePost from '../createPost/View';

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
                    <Route path="/new" element={<NewPostPopup />} />
                    <Route path="/explore" element={<h1>Explore</h1>} />
                    <Route path="/dashboard" element={<CreatePost />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/forget_password"
                        element={<ForgetPassword />}
                    />
                    <Route path="/reset_password" element={<ResetPassword />} />
                    <Route path="/a" element={<Settings page={'account'} />} />
                    <Route path="/settings/dashboard" element={<Settings />} />
                    <Route path="/settings/apps" element={<Settings />} />
                    <Route path="/settings/privacy" element={<Settings />} />
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
