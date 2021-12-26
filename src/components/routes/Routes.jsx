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
import CreateModal from '../createPost/containers/PopupContainer/View';
import Dashboard from '../dashboardComponent/View';
import DeleteAccount from '../deleteAccountComponent/View';
import BlogSettings from '../blogSettingsComponent/View';
import DeleteBlogCard from '../blogSettingsComponent/containers/deleteBlog/DeleteBlog';
import PropTypes from 'prop-types';

import ProfileFull from '../profileViews/fullView/View';

import FollowingPage from '../followingComponent/View';
import RequireAuth from '../../contexts/userContext/ProtectedRoutes';
import RequireUnAuth from '../../contexts/userContext/UnProtectedRoutes';
import Hashtag from '../hashtagsComponent/View';
import GoogleCard from '../registerComponent/GoogleCard';
import Explore from '../explore/View';
import LikedBlogs from '../likesComponent/View';
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
                        path="/tagged/:tag"
                        element={<WithNavbar component={<Hashtag />} />}
                    />
                    <Route element={<RequireUnAuth />}>
                        <Route
                            path="/register"
                            element={<WithNavbar component={<Register />} />}
                        />
                        <Route
                            path="/register"
                            element={<WithNavbar component={<Register />} />}
                        />
                        <Route
                            path="/login"
                            element={<WithNavbar component={<LoginView />} />}
                        />

                        <Route
                            path="/forget_password"
                            element={
                                <WithNavbar component={<ForgetPassword />} />
                            }
                        />

                        <Route
                            path="/reset_password/:token"
                            element={
                                <WithNavbar component={<ResetPassword />} />
                            }
                        />

                        <Route
                            path="/"
                            element={<WithNavbar component={<HomePage />} />}
                        />
                        <Route
                            path="/onboarding"
                            element={<WithNavbar component={<GoogleCard />} />}
                        />
                    </Route>
                    <Route element={<RequireAuth />}>
                        <Route
                            path="/following"
                            element={
                                <WithNavbar component={<FollowingPage />} />
                            }
                        />
                        <Route
                            path="/likes"
                            element={<WithNavbar component={<LikedBlogs />} />}
                        />
                        <Route
                            path="/edit/:blogName/:postId"
                            element={
                                <WithNavbar
                                    component={
                                        <CreateModal
                                            reblog={false}
                                            edit={true}
                                        />
                                    }
                                />
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={<WithNavbar component={<Dashboard />} />}
                        />
                        <Route
                            path="/reblog/:blogName/:postId/:reblogKey"
                            element={
                                <WithNavbar
                                    component={<CreateModal reblog={true} />}
                                />
                            }
                        />
                        <Route
                            path="/messaging"
                            element={
                                <WithNavbar
                                    component={<MessagesPageMobile />}
                                />
                            }
                        />
                        <Route
                            path="/new/post"
                            element={<WithNavbar component={<CreateModal />} />}
                        />
                        <Route
                            path="/new"
                            element={
                                <WithNavbar component={<NewPostPopup />} />
                            }
                        />
                        <Route
                            path="/explore"
                            element={<WithNavbar component={<Explore />} />}
                        />

                        <Route
                            path="/explore/recommended-for-you"
                            element={<WithNavbar component={<Explore />} />}
                        />

                        <Route
                            path="/blog/view/:blogName/:blogID/"
                            element={<WithNavbar component={<ProfileFull />} />}
                        />
                        <Route
                            path="/blog/view/:blogName/:blogID/:content"
                            element={<WithNavbar component={<ProfileFull />} />}
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
                                    component={
                                        <Settings page={'notifications'} />
                                    }
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
                            path="/account/delete"
                            element={<DeleteAccount />}
                        />
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
                    </Route>
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
WithNavbar.propTypes = {
    component: PropTypes.element.isRequired
};
