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
                if (err.response) setErrorMessage(err.response.data.error);
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
                setUser(res.data.response);
                localStorage.setItem('user', JSON.stringify(res.data.response));
                navigate('/dashboard');
                setIsPending(false);
            })
            .catch(err => {
                if (err.response) setErrorMessage(err.response.data.error);
                else setErrorMessage(["Couldn't Sign Up"]);
                setOpenError(true);
                setIsPending(false);
                return null;
            });
    }
};
