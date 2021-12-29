import Axios from 'axios';
import { useContext } from 'react';
import { ChatContext } from '../../../contexts/chatContext/chatContext';
import { UserContext } from '../../../contexts/userContext/UserContext';
import { apiBaseUrl } from '../../../config.json';

export const uploadSelectedImageProfile = (file, user) => {
    let formData = new FormData();
    formData.append('image', file);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/image_upload`,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user}`
        },
        data: formData
    })
        .then(res => {
            const avatarLink = res?.data?.response?.url;
            updateProfile(avatarLink, user);
        })
        .catch(() => {});
};

const updateProfile = (avatarLink, user) => {
    const { setUser } = useContext(UserContext);
    const { setUserBlog } = useContext(ChatContext);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/blogs/${user?.blogName}/settings/save`,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user}`
        },
        data: { avatar: avatarLink }
    })
        .then(() => {
            let userNew = user;
            userNew.userData.avatar = avatarLink;
            setUser(userNew);
            localStorage.setItem('user', JSON.stringify(userNew));
            setUserBlog(userNew.userData);
        })
        .catch(() => {});
};
