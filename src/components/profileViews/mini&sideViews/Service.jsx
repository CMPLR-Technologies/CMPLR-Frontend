import Axios from 'axios';
import { apiBaseUrl } from '../../../config.json';

export const uploadSelectedImageProfile = (
    file,
    user,
    setUser,
    setUserBlog
) => {
    let formData = new FormData();
    formData.append('image', file);
    console.log('called with img ', formData);
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
            console.log('image uploaded link ', avatarLink);
            updateProfile(avatarLink, user, setUser, setUserBlog);
        })
        .catch(() => {});
};

const updateProfile = (avatarLink, user, setUser, setUserBlog) => {
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
