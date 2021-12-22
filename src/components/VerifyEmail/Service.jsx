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
