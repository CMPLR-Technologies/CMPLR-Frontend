import React, { useState } from 'react';
import RegisterStepOne from './RegisterStepOne';
import RegisterStepTwo from './RegisterStepTwo';
import { UserContext } from '../../../contexts/userContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { handleStepOne, handleStepTwo } from '../Service';

/**
 * Register Main Component
 * @function RegisterCard
 * @description this is the statful component of the register page
 * @returns {Component} the Component of RegisterStepOne & RegisterStepTwo for handling the whole registeration
 */
export default function RegisterCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [blogName, setBlogName] = useState('');
    const [age, setAge] = useState(null);
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [registerStep, setRegisterStep] = useState(1);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [isPending, setIsPending] = useState(false);

    const handleOne = () => {
        const dataBody = {
            email: email,
            password: password,
            // eslint-disable-next-line camelcase
            blog_name: blogName
        };
        handleStepOne(
            dataBody,
            setOpenError,
            setRegisterStep,
            setErrorMessage,
            setIsPending
        );
    };

    const handleTwo = () => {
        const bodyData = {
            email: email,
            password: password,
            // eslint-disable-next-line camelcase
            blog_name: blogName,
            age: parseInt(age)
        };
        handleStepTwo(
            bodyData,
            setOpenError,
            setErrorMessage,
            setUser,
            navigate,
            setIsPending
        );
    };
    return (
        <>
            {registerStep === 1 && (
                <RegisterStepOne
                    handleStepOne={handleOne}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    blogName={blogName}
                    setBlogName={setBlogName}
                    openError={openError}
                    errorMessage={errorMessage}
                    isPending={isPending}
                />
            )}
            {registerStep === 2 && (
                <RegisterStepTwo
                    handleStepTwo={handleTwo}
                    age={age}
                    setAge={setAge}
                    openError={openError}
                    errorMessage={errorMessage}
                    isPending={isPending}
                />
            )}
        </>
    );
}
