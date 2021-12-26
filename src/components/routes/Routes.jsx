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
import { themes, ThemeContext } from '../../contexts/themeContext/ThemeContext';
import CreateModal from '../createPost/containers/PopupContainer/View';
import Dashboard from '../dashboardComponent/View';
import FollowingPage from '../followingComponent/View';
import RequireAuth from '../../contexts/userContext/ProtectedRoutes';
import RequireUnAuth from '../../contexts/userContext/UnProtectedRoutes';
import Hashtag from '../hashtagsComponent/View';
import GoogleCard from '../registerComponent/GoogleCard';
import Explore from '../explore/View';
import LikedBlogs from '../likesComponent/View';

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
                        <Route path="/onboarding" element={<GoogleCard />} />
                    </Route>

                    <Route element={<RequireAuth />}>
                        <Route path="/following" element={<FollowingPage />} />
                        <Route path="/likes" element={<LikedBlogs />} />
                        <Route
                            path="/edit/:blogName/:postId"
                            element={<CreateModal reblog={false} edit={true} />}
                        />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/reblog/:blogName/:postId/:reblogKey"
                            element={<CreateModal reblog={true} />}
                        />
                        <Route
                            path="/messaging"
                            element={<MessagesPageMobile />}
                        />
                        <Route path="/new/post" element={<CreateModal />} />
                        <Route path="/new" element={<NewPostPopup />} />

                        <Route path="/explore/:type" element={<Explore />} />
                    </Route>
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
