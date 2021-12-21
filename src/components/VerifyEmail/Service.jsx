/* eslint-disable camelcase */
import Axios from 'axios';
import { apiBaseUrl } from '../../config.json';

export const resendEmailVerification = (token, setState) => {
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/email/verification-notification`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            setState(false);
            return res;
        })
        .catch(() => {});
};
