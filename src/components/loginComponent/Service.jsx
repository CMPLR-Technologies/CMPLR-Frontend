//import { apiBaseUrl } from '../../config.json';
//import Axios from 'axios';

const logUser = (Email, Password) => {
    const [done, error, userData] = [
        true,
        null,
        { name: Email, pass: Password }
    ];
    return { done, error, userData };
};

/*{
        Axios.post(`${apiBaseUrl}/login`, {
            Email,
            Password
        })
            .then(() => {
                // @Todo: update context provider
            })
            .catch(() => {
                setError('Error log in');
            });
    }*/

export { logUser };
