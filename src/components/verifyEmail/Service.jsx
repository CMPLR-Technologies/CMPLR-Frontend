/* eslint-disable camelcase */
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const resendEmailVerification = (token, setState, setIsPending) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/email/verification-notification`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(() => {
            setState(false);
            setIsPending(false);
        })
        .catch(() => {
            setIsPending(false);
        });
};

export const verifyEmailConfirm = (
    user,
    userID,
    hash,
    navigate,
    setUser,
    setUserBlog
) => {
    Axios({
        method: 'GET',
        url: `${apiBaseUrl}/verify-email/${userID}/${hash}`,
        headers: {
            Authorization: `Bearer ${user?.token}`
        }
    })
        .then(res => {
            let userNew = user;
            userNew.userData.email_verified_at = res?.data?.email_verified_at;
            setUser(userNew);
            localStorage.setItem('user', JSON.stringify(userNew));
            setUserBlog(userNew.userData);
            //navigate('/');
        })
        .catch(() => {});
};
