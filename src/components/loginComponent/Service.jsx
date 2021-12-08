import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';

const logUser = (email, password, setUser, setError) => {
    Axios.post(`${apiBaseUrl}/login`, {
        email,
        password
    })
        .then(res => {
            const user = { token: res.data.token, userData: res.data.user };
            setUser(user);
        })
        .catch(err => {
            setError(err.response.data.error[0]);
        });
};
export { logUser };
