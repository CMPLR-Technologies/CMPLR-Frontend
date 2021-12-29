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

export const verifyEmailConfirm = (user, userID, hash, navigate) => {
    if (user?.userData?.id === userID) {
        Axios({
            method: 'GET',
            url: `${apiBaseUrl}/verify-email/${userID}/${hash}`,
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        })
            .then(() => {
                navigate('/');
            })
            .catch(() => {});
    }
};
