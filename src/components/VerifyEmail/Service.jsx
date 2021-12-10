/* eslint-disable camelcase */
import Axios from 'axios';
// import { apiBaseUrl } from '../../config.json';

export const resendEmailVerification = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    console.log(token);

    Axios({
        method: 'POST',
        url: `http://a6f9-156-223-114-156.ngrok.io/api/email/verification-notification`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: token
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
