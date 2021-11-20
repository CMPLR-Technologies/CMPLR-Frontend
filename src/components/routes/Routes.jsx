import React, { useContext } from 'react';
import LoginView from '../loginComponent/View';
import Register from '../registerComponent/View';
import HomePage from '../homeComponent/View';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../navbarComponent/View';
import MessagesPageMobile from '../navbarComponent/containers/navbarLinks/MessagesPopup/MessagesPageMobile';
import NewPostPopup from '../navbarComponent/containers/navbarLinks/newPost/NewPostPopup';
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';

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
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
