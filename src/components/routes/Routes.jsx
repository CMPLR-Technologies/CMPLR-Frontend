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
import FollowingPage from '../followingComponent/View';
import RequireAuth from '../../contexts/userContext/ProtectedRoutes';
import RequireUnAuth from '../../contexts/userContext/UnProtectedRoutes';
import Hashtag from '../hashtagsComponent/View';
import Explore from '../explore/View';

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
                    <Route path="/tagged/:tag" element={<Hashtag />} />

                    <Route element={<RequireUnAuth />}>
                        <Route path="/register" element={<Register />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<LoginView />} />

                        <Route
                            path="/forget_password"
                            element={<ForgetPassword />}
                        />

                        <Route
                            path="/reset_password/:token"
                            element={<ResetPassword />}
                        />

                        <Route path="/" element={<HomePage />} />
                    </Route>

                    <Route element={<RequireAuth />}>
                        <Route path="/rich" element={<HandMadeTextEditor />} />
                        <Route path="/following" element={<FollowingPage />} />
                        <Route
                            path="/edit/:blogName/:postId"
                            element={<CreateModal reblog={false} edit={true} />}
                        />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/post"
                            element={
                                <PostComponent
                                    userBlogName="kholdbold"
                                    isFollowed={false}
                                />
                            }
                        />
                        <Route
                            path="/reblog/:blogName/:postId/:reblogKey"
                            element={<CreateModal reblog={true} />}
                        />
                        <Route
                            path="/messaging"
                            element={<MessagesPageMobile />}
                        />
                        <Route path="/new/post" element={<CreateModal />} />
                        <Route path="/explore" element={<Explore />} />
                    </Route>
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
