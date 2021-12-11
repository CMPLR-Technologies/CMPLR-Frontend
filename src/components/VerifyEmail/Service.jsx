/* eslint-disable camelcase */
import Axios from 'axios';
// import { apiBaseUrl } from '../../config.json';

export const resendEmailVerification = (token, setState) => {
    Axios({
        method: 'POST',
        url: `http://a6f9-156-223-114-156.ngrok.io/api/email/verification-notification`,
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
