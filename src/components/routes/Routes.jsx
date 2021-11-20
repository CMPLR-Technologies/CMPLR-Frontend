import React from 'react';
import LoginView from '../loginComponent/View';
import Register from '../registerComponent/View';
import HomePage from '../homeComponent/View';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbarComponent/View';
import MessagesPageMobile from '../navbarComponent/containers/navbarLinks/MessagesPopup/MessagesPageMobile';
import NewPostPopup from '../navbarComponent/containers/navbarLinks/newPost/NewPostPopup';
import ForgetPassword from '../forgetPasswordComponent/View';
import ResetPassword from '../resetPasswordComponent/View';
export default function MainRoutes() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/messaging" element={<MessagesPageMobile />} />
                    <Route path="/new" element={<NewPostPopup />} />
                    <Route path="/explore" element={<h1>Explore</h1>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/forget_password"
                        element={<ForgetPassword />}
                    />
                    <Route path="/reset_password" element={<ResetPassword />} />
                </Routes>
            </Router>
        </>
    );
}
