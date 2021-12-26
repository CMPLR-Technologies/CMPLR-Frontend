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
import DeleteAccount from '../deleteAccountComponent/View';
import PostComponent from '../partials/postComponent/View';
import BlogSettings from '../blogSettingsComponent/View';
import DeleteBlogCard from '../blogSettingsComponent/containers/deleteBlog/DeleteBlog';
import PropTypes from 'prop-types';
const WithNavbar = ({ component }) => {
    return (
        <>
            <Navbar />
            {component}
        </>
    );
};
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
                {/* <Navbar /> */}
                <Routes>
                    <Route
                        path="/register"
                        element={<WithNavbar component={<Register />} />}
                    />
                    <Route
                        path="/messaging"
                        element={
                            <WithNavbar component={<MessagesPageMobile />} />
                        }
                    />
                    <Route
                        path="/new/post"
                        element={<WithNavbar component={<CreateModal />} />}
                    />
                    <Route
                        path="/rich"
                        element={
                            <WithNavbar component={<HandMadeTextEditor />} />
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={<WithNavbar component={<Dashboard />} />}
                    />
                    <Route
                        path="/login"
                        element={<WithNavbar component={<LoginView />} />}
                    />
                    <Route
                        path="/"
                        element={<WithNavbar component={<HomePage />} />}
                    />
                    <Route
                        path="/forget_password"
                        element={<ForgetPassword />}
                    />
                    <Route
                        path="/reset_password/:token"
                        element={<ResetPassword />}
                    />
                        <Route
                        path="/settings"
                        element={
                            <WithNavbar
                                component={<Settings page={'account'} />}
                            />
                        }
                    />
                    <Route
                        path="/settings/account"
                        element={
                            <WithNavbar
                                component={<Settings page={'account'} />}
                            />
                        }
                    />
                    <Route
                        path="/settings/dashboard"
                        element={
                            <WithNavbar
                                component={<Settings page={'dashboard'} />}
                            />
                        }
                    />
                    <Route
                        path="/settings/notifications"
                        element={
                            <WithNavbar
                                component={<Settings page={'notifications'} />}
                            />
                        }
                    />
                    <Route
                        path="/settings/apps"
                        element={
                            <WithNavbar
                                component={<Settings page={'apps'} />}
                            />
                        }
                    />
                    <Route
                        path="/reblog/:blogName/:postId/:reblogKey"
                        element={
                            <WithNavbar
                                component={<CreateModal reblog={true} />}
                            />
                        }
                    />
                    <Route path="/account/delete" element={<DeleteAccount />} />
                    <Route
                        path="/blog/new"
                        element={
                            <WithNavbar
                                component={<BlogSettings page={'create'} />}
                            />
                        }
                    />
                    <Route
                        path="/blog/:blogName/delete"
                        element={<DeleteBlogCard />}
                    />
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
WithNavbar.propTypes = {
    component: PropTypes.element.isRequired
};
