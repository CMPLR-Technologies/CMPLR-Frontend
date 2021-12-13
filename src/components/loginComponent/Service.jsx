import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';

const logUser = (email, password, setUser, setError, setIsPending) => {
    Axios.post(`${apiBaseUrl}/login`, {
        email,
        password
    })
        .then(res => {
            const user = { token: res.data.token, userData: res.data.user };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            setIsPending(false);
        })
        .catch(err => {
            if (err.response) setError(err.response.data.error);
            else setError(["couldn't log in"]);
            setIsPending(false);
        });
};
export { logUser };
