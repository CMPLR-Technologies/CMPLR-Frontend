import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { checkDeleteAccount } from './Controller';

export function deleteAccount(password, email, setErrorMsg, history) {
    if (checkDeleteAccount(password, email, setErrorMsg)) {
        axios({
            //TODO change to delete
            method: 'get',
            url: `${apiBaseUrl}/settings/account/delete`,
            // data: {
            //     email: email,
            //     password: password
            // }
        })
            .then(res => {
                if (res.data.meta.status_code === 200) {
                    history.push('/');
                } else {
                    setErrorMsg('Error deleting account');
                }
            })
            .catch(() => {
                setErrorMsg('Error deleting account');
            });
    }
}
