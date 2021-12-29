import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import { apiBaseUrl } from '../../../../config.json';
import { LinearProgress } from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
import { AiFillCamera } from 'react-icons/ai';
import { ChatContext } from '../../../../contexts/chatContext/chatContext';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import { styled } from '@mui/material/styles';
import { uploadSelectedImageProfile } from '../Service';
const InputCam = styled('input')({
    display: 'none'
});

export default function ProfileSideSettings(props) {
    const { setUser } = useContext(UserContext);
    const { setUserBlog } = useContext(ChatContext);
    const [editProfile, setEditProfile] = useState(false);
    const {
        blogId
        /*blogName,*/
        /*setSidePostID,*/
    } = props;
    const {
        error,
        data: body,
        isPending
    } = useFetch(`${apiBaseUrl}/MiniProfileView/${blogId}`);
    const { user } = useContext(UserContext);
    const theme = useContext(ThemeContext)[0];
    const css = `
    .profile-settings .profile-side
            {
                background-color:rgb(${themes[theme].white});
            }
    .profile-settings-link{
        text-decoration: none;
        color: rgb(${themes[theme].black});   
    }
            `;
    //console.log(blogId, error, body, isPending);
    // const body = {
    //     username: 'huh',
    //     avatar: 'https://pbs.twimg.com/profile_images/1026496068555612160/Klg8BS8p_400x400.jpg',
    //     bg: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //     title: 'Heey man',
    //     description: 'wa wafbuaw uwbwakf'
    // };

    return (
        <div className="profile-settings">
            {error}
            {isPending && <LinearProgress />}
            {body && body.blog && (
                <div className="profile-side">
                    <div className="profile-side-header">
                        <div className="profile-side-header-div">
                            <img
                                className="profile-side-header-div-bg"
                                src={body.blog.header_image}
                                alt="couldn't load bg"
                            />
                        </div>

                        <div>
                            <label htmlFor="to-image-words">
                                <img
                                    className="profile-side-header-avatar"
                                    src={user?.userData?.avatar}
                                    alt="couldn't load avatar"
                                    onMouseOver={() => setEditProfile(true)}
                                    onMouseLeave={() => setEditProfile(false)}
                                />
                                <InputCam
                                    onChange={e =>
                                        uploadSelectedImageProfile(
                                            e.target.files[0],
                                            user,
                                            setUser,
                                            setUserBlog,
                                            'image'
                                        )
                                    }
                                    accept="image/*"
                                    data-element="insertImage"
                                    id="to-image-words"
                                    type="file"
                                />
                                <AiFillCamera
                                    style={{
                                        backgroundColor: 'white',
                                        fill: 'black',
                                        width: '20px',
                                        height: '20px',
                                        position: 'relative',
                                        zIndex: 7000,
                                        marginBottom: '-35px',
                                        cursor: 'pointer'
                                    }}
                                />
                            </label>
                        </div>
                        <div className="profile-side-header-text">
                            <NavLink
                                className="profile-settings-link"
                                to={`/blog/view/${body.blog.blog_name}/${blogId}/posts`}
                            >
                                <div className="profile-side-header-text-title">
                                    {body.blog.title === 'untitled'
                                        ? body.blog.blog_name
                                        : body.blog.title}
                                </div>
                            </NavLink>
                            <div className="profile-side-header-text-desc">
                                {body.blog.desciption}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <style>{css}</style>
        </div>
    );
}

ProfileSideSettings.propTypes = {
    blogId: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired
};
