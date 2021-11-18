import React, { useContext, useState } from 'react';
import RegisterStepOne from './RegisterStepOne';
import RegisterStepTwo from './RegisterStepTwo';
import { apiBaseUrl } from '../../../config.json';
import Axios from 'axios';
import { UserContext } from '../../../contexts/userContext/UserContext';
import { useNavigate } from 'react-router-dom';

export default function RegisterCard() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [blogName, setBlogName] = useState('');
    const [age, setAge] = useState(null);
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [registerStep, setRegisterStep] = useState(1);

    const handleStepOne = () => {
        setRegisterStep(2);
        // Axios({
        //     method: "POST",
        //     url: `${apiBaseUrl}/register/validate`,
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     data: {
        //       email: email,
        //       password: password,
        //       blogName: blogName,
        //     },
        //   })
        //     .then((res) => {
        //       //all data is validated go to age page
        //       setOpenError(false);
        //       setRegisterStep(2);
        //     })
        //     .catch((err) => {
        //       setErrorMessage(""); //TODO: set the msg which comes from backend
        //       setOpenError(true);
        //     });
    };

    const handleStepTwo = () => {
        Axios({
            method: 'POST',
            url: `${apiBaseUrl}/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                email: email,
                password: password,
                blogName: blogName,
                age: parseInt(age)
            }
        })
            .then(res => {
                //TODO: setUser"context"
                setUser(res.data);
                navigate('/dashboard');
                setOpenError(false);
            })
            .catch(err => {
                setErrorMessage(err); //TODO: set the msg which comes from backend
                setOpenError(true);
            });
    };
    return (
        <>
            {registerStep === 1 && (
                <RegisterStepOne
                    handleStepOne={handleStepOne}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    blogName={blogName}
                    setBlogName={setBlogName}
                    openError={openError}
                    errorMessage={errorMessage}
                />
            )}
            {registerStep === 2 && (
                <RegisterStepTwo
                    handleStepTwo={handleStepTwo}
                    age={age}
                    setAge={setAge}
                    openError={openError}
                    errorMessage={errorMessage}
                />
            )}
        </>
    );
}
