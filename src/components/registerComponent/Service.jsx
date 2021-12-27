import Axios from 'axios';
import { validateStepOne, validateStepTwo } from './Controller';
import { apiBaseUrl } from '../../config.json';

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
                let errors = [];
                errors = getServiceErrors(err);

                if (err.response) setErrorMessage(errors);
                else setErrorMessage(["Couldn't Sign Up"]);
                setOpenError(true);
                setIsPending(false);
            });
    }
};

export const handleStepTwo = (
    bodyData,
    setOpenError,
    setErrorMessage,
    setUser,
    navigate,
    setIsPending
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
                navigate('/dashboard');
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.response);
                if (err.response) setErrorMessage(err.response.data.error);
                else setErrorMessage(["Couldn't Sign Up"]);
                setOpenError(true);
                setIsPending(false);
                return null;
            });
    }
};

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

    if (err.response.data.error?.password) {
        let len = err.response.data.error?.password?.length;
        for (let i = 0; i < len; i++) {
            errors.push(err.response.data.error?.password[i]);
        }
    }
    return errors;
};
