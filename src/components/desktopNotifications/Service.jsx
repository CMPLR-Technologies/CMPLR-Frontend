import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';

export const sendDesktopNotifyToken = () => {
    let apiToken = JSON.parse(localStorage.getItem('desktopToken'));
    let apiUser = JSON.parse(localStorage.getItem('user'));
    Axios({
        method: 'POST',
        url: `${apiBaseUrl}/notifications/store-token`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${apiUser?.token}`
        },
        data: {
            token: apiToken?.token
        }
    })
        .then(() => {})
        .catch(err => {
            console.log(err);
        });
};
