/* eslint-disable camelcase */
import Axios from 'axios';
// import { apiBaseUrl } from '../../config.json';

export const resendEmailVerification = token => {
    console.log(token);

    Axios({
        method: 'POST',
        url: `http://a6f9-156-223-114-156.ngrok.io/api/email/verification-notification`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            console.log('Success Sent');
            return res;
        })
        .catch(() => {
            console.log('Fail');
        });
};
