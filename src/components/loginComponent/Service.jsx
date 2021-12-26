import { apiBaseUrl } from '../../config.json';
import Axios from 'axios';
import { getServiceErrors } from '../registerComponent/Service';
import { sendDesktopNotifyToken } from '../desktopNotifications/Service';

const logUser = (
    email,
    password,
    setUser,
    setError,
    setIsPending,
    navigate
) => {
    Axios.post(`${apiBaseUrl}/login`, {
        email,
        password
    })
        .then(res => {
            const user = {
                token: res?.data?.response?.token,
                userData: res.data?.response?.user,
                blogName: res.data?.response?.blog_name
            };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            setIsPending(false);
            sendDesktopNotifyToken();
            navigate('/dashboard');
        })
        .catch(err => {
            const errorArr = getServiceErrors(err);

            if (err.response)
                setError(
                    errorArr?.length !== 0 ? errorArr[0] : "Couldn't Log In"
                );
            else setError("Couldn't Log In");
            setIsPending(false);
        });
};

const responseGoogleSuccess = (respond, navigate, setIsPending, setUser) => {
    const token = respond?.accessToken;
    setIsPending(true);
    Axios.post(`${apiBaseUrl}/google/login`, {
        token
    })
        .then(res => {
            const user = {
                token: res.data.response.token,
                userData: res.data.response.user,
                blogName: res.data?.response?.blog_name
            };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard');
            setIsPending(false);
            sendDesktopNotifyToken();
        })
        .catch(() => {
            setIsPending(false);
            navigate('/onboarding', { state: { token: token } });
        });
};
const responseGoogleFailure = (res, setError) => {
    setError(res.error);
};

export { logUser, responseGoogleSuccess, responseGoogleFailure };
