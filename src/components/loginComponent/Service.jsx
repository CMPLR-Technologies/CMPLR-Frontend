import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';
import { getServiceErrors } from '../registerComponent/Service';

const logUser = (email, password, setUser, setError, setIsPending) => {
    Axios.post(`${apiBaseUrl}/login`, {
        email,
        password
    })
        .then(res => {
            const user = {
                token: res.data.response.token,
                userData: res.data.response.user,
                blogName: res.data?.response?.blog_name
            };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            setIsPending(false);
        })
        .catch(err => {
            if (err.response) setError(getServiceErrors(err));
            else setError(["Couldn't Log In"]);
            setIsPending(false);
        });
};
export { logUser };
