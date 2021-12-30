import Axios from 'axios';
import { apiBaseUrl } from '../../../config.json';

export const uploadSelectedImageProfile = (
    file,
    user,
    setUser,
    setUserBlog,
    blogName,
    setData,
    data,
    type
) => {
    let formData = new FormData();
    formData.append('image', file);
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/image_upload`,
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user?.token}`
        },
        data: formData
    })
        .then(res => {
            const avatarLink = res?.data?.response?.url;
            if (type === 'cover') {
                updateCover(avatarLink, user, blogName, setData, data);
            } else {
                updateProfile(
                    avatarLink,
                    user,
                    setUser,
                    setUserBlog,
                    blogName,
                    setData,
                    data
                );
            }
        })
        .catch(() => {});
};

const updateProfile = (
    avatarLink,
    user,
    setUser,
    setUserBlog,
    blogName,
    setData,
    data
) => {
    Axios({
        method: 'PUT',
        url: `${apiBaseUrl}/blog/${blogName}/settings/save`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user?.token}`
        },
        data: { avatar: avatarLink }
    })
        .then(() => {
            let newData = data;
            newData.blog.avatar = avatarLink;
            setData(newData);
            let userNew = user;
            userNew.userData.avatar = avatarLink;
            setUser(userNew);
            localStorage.setItem('user', JSON.stringify(userNew));
            setUserBlog(userNew.userData);
        })
        .catch(() => {});
};

const updateCover = (avatarLink, user, blogName) => {
    Axios({
        method: 'PUT',
        url: `${apiBaseUrl}/blog/${blogName}/settings/save`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${user?.token}`
        },
        // eslint-disable-next-line camelcase
        data: { header_image: avatarLink }
    })
        .then(() => {
            document.location.reload(true);
        })
        .catch(() => {});
};
