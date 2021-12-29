import React, { useContext, useState } from 'react';
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
import MyProfile from '../MyProfileComponent/View';
import DeleteBlog from '../blogSettingsComponent/containers/deleteBlog/DeleteBlog';
import CreateBlog from '../blogSettingsComponent/containers/createBlog/CreateBlog';
import FollowingPage from '../followingComponent/View';
import RequireAuth from '../../contexts/userContext/ProtectedRoutes';
import RequireUnAuth from '../../contexts/userContext/UnProtectedRoutes';
import Hashtag from '../hashtagsComponent/View';
import GoogleCard from '../registerComponent/GoogleCard';
import Explore from '../explore/View';
import HelpCenter from '../HelpCenter/View';
import Article from '../HelpCenter/containers/Article';
import ArticleCategoryIndividual from '../HelpCenter/containers/ArticleCategoryIndividual';
import LikedBlogs from '../likesComponent/View';
import ProfileFullContainer from '../profileViews/fullView/View';
import PostComponent from '../partials/postComponent/containers/PostComponent';

export default function MainRoutes() {
    const theme = useContext(ThemeContext)[0];
    const [withNav, setWithNav] = useState(true);
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
                {withNav && <Navbar />}
                <Routes>
                    <Route path="/tagged/:tag" element={<Hashtag />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route
                        path="/help/:category"
                        element={<ArticleCategoryIndividual />}
                    />
                    <Route
                        path="/help/:category/:article"
                        element={<Article />}
                    />

                    <Route element={<RequireUnAuth />}>
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
                        <Route
                            path="/blog/:blogName/delete/:blogId"
                            element={<DeleteBlog setWithNav={setWithNav} />} //WITHOUTNAV
                        />
                        <Route
                            path="/settings"
                            element={<Settings page={'account'} />}
                        />
                        <Route
                            path="/settings/account"
                            element={<Settings page={'account'} />}
                        />
                        <Route
                            path="/settings/dashboard"
                            element={<Settings page={'dashboard'} />}
                        />
                        <Route
                            path="/settings/notifications"
                            element={<Settings page={'notifications'} />}
                        />
                        <Route
                            path="/settings/apps"
                            element={<Settings page={'apps'} />}
                        />
                        <Route
                            path="/account/delete/:blogName"
                            element={<DeleteAccount setWithNav={setWithNav} />} //WITHOUTNAV
                        />
                        <Route
                            path="/blog/new"
                            element={<CreateBlog setWithNav={setWithNav} />} //WITHOUTNAV
                        />
                        <Route
                            path="/blog/:blogName/settings"
                            element={<BlogSettings />}
                        />
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
                        <Route
                            path="/blog/view/:blogName/:blogID/:content/:postID"
                            element={<ProfileFullContainer />}
                        />
                        <Route
                            path="/blog/view/:blogName/:blogID/:content"
                            element={<ProfileFullContainer />}
                        />
                        <Route
                            path="/blog/:blogUrlIdf/*"
                            element={<MyProfile />}
                        />
                        <Route path="/explore/:type" element={<Explore />} />
                        <Route
                            path="/messaging"
                            element={<MessagesPageMobile />}
                        />
                    </Route>
                </Routes>
                <style>{css}</style>
            </Router>
        </>
    );
}
