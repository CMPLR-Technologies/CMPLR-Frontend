import Axios from 'axios';
import { validateStepOne, validateStepTwo } from './Controller';
import { apiBaseUrl } from '../../config.json';

export const handleStepOne = (
    bodyData,
    setOpenError,
    setRegisterStep,
    setErrorMessage
) => {
    let errorMsg = validateStepOne(
        bodyData.email,
        bodyData.password,
        bodyData.blog_name
    );
    if (errorMsg?.length !== 0) {
        setErrorMessage(errorMsg); //TODO: set the msg which comes from backend
        setOpenError(true);
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
            })
            .catch(err => {
                setErrorMessage(err.response.data.error);
                setOpenError(true);
            });
    }
};

export const handleStepTwo = (
    bodyData,
    setOpenError,
    setErrorMessage,
    setUser,
    navigate
) => {
    const errorMsg = validateStepTwo(bodyData.age);
    if (errorMsg?.length !== 0) {
        setErrorMessage(errorMsg); //TODO: set the msg which comes from backend
        setOpenError(true);
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
                navigate('/dashboard');
            })
            .catch(err => {
                setErrorMessage(err.response.data.error);
                setOpenError(true);
                return null;
            });
    }
};
