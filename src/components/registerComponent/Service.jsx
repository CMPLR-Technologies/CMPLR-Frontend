import Axios from 'axios';
import { validateGoogle, validateStepOne, validateStepTwo } from './Controller';
import { apiBaseUrl } from '../../config.json';
import { sendDesktopNotifyToken } from '../desktopNotifications/Service';

export const handleStepOne = (
    bodyData,
    setOpenError,
    setRegisterStep,
    setErrorMessage,
    setIsPending
) => {
    let errorMsg = validateStepOne(
        bodyData.email,
        bodyData.password,
        bodyData.blog_name
    );
    setIsPending(true);

    if (errorMsg?.length !== 0) {
        setErrorMessage(errorMsg); //TODO: set the msg which comes from backend
        setOpenError(true);
        setIsPending(false);
        return;
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/register/validate`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: bodyData
        })
            .then(() => {
                //all data is validated go to age page
                setOpenError(false);
                setRegisterStep(2);
                setIsPending(false);
            })
            .catch(err => {
                const errorArr = getServiceErrors(err);
                if (err.response)
                    setErrorMessage(
                        errorArr?.length !== 0
                            ? errorArr[0]
                            : "Couldn't Sign Up"
                    );
                else setErrorMessage("Couldn't Sign Up");
                setOpenError(true);
                setIsPending(false);
                return null;
            });
    }
};

export const handleStepTwo = (
    bodyData,
    setOpenError,
    setErrorMessage,
    setUser,
    navigate,
    setIsPending,
    setUserBlog
) => {
    const errorMsg = validateStepTwo(bodyData.age);
    setIsPending(true);
    if (errorMsg?.length !== 0) {
        setErrorMessage(errorMsg); //TODO: set the msg which comes from backend
        setOpenError(true);
        setIsPending(false);
        return;
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/register/insert`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: bodyData
        })
            .then(res => {
                setOpenError(false);
                const user = {
                    token: res.data.response.token,
                    userData: res.data.response.user,
                    blogName: res.data.response.blog_name
                };
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setUserBlog(user.userData);
                navigate('/dashboard');
                setIsPending(false);
                sendDesktopNotifyToken();
            })
            .catch(err => {
                const errorArr = getServiceErrors(err);
                if (err.response)
                    setErrorMessage(
                        errorArr?.length !== 0
                            ? errorArr[0]
                            : "Couldn't Sign Up"
                    );
                else setErrorMessage("Couldn't Sign Up");
                setOpenError(true);
                setIsPending(false);
                return null;
            });
    }
};

export const handleGoogleAuth = (
    bodyData,
    setOpenError,
    setErrorMessage,
    setUser,
    navigate,
    setIsPending,
    setUserBlog
) => {
    const errorMsg = validateGoogle(bodyData?.blogName, bodyData?.age);
    if (errorMsg !== '') {
        setErrorMessage(errorMsg);
        setOpenError(true);
        setIsPending(false);
        return;
    } else {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/google/signup`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: bodyData
        })
            .then(res => {
                setOpenError(false);
                const user = {
                    token: res.data.response.token,
                    userData: res.data.response.user,
                    blogName: res.data.response.blog_name
                };
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setUserBlog(user.userData);
                navigate('/dashboard');
                setIsPending(false);
                sendDesktopNotifyToken();
            })
            .catch(err => {
                const errorArr = getServiceErrors(err);
                if (err.response)
                    setErrorMessage(
                        errorArr?.length !== 0
                            ? errorArr[0]
                            : "Couldn't Sign Up"
                    );
                else setErrorMessage("Couldn't Sign Up");
                setOpenError(true);
                setIsPending(false);
                return null;
            });
    }
};

// to check on all possible errors from backend
export const getServiceErrors = err => {
    let errors = [];

    if (err?.response?.data?.error?.blog_name) {
        let len = err?.response?.data?.error?.blog_name?.length;
        for (let i = 0; i < len; i++) {
            errors.push(err?.response?.data?.error?.blog_name[i]);
        }
    }

    if (err?.response?.data?.error?.email) {
        let len = err?.response?.data?.error?.email?.length;
        for (let i = 0; i < len; i++) {
            errors.push(err?.response?.data?.error?.email[i]);
        }
    }

    if (err.response?.data?.error?.password) {
        let len = err.response.data?.error?.password?.length;
        for (let i = 0; i < len; i++) {
            errors.push(err.response.data.error?.password[i]);
        }
    }
    return errors;
};
