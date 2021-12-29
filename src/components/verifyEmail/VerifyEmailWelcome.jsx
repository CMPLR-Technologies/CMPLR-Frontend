import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyEmailConfirm } from './Service';

export default function VerifyEmailWelcome() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const { userId, hash } = useParams();
    useEffect(() => {
        console.log('recieved blogId', userId);
        if (user?.userData?.id !== userId) {
            console.log('entered');
            verifyEmailConfirm(user, userId, hash, navigate);
        }
    }, []);
    return (
        <>
            <h1>your email is verified successfuulyy</h1>
        </>
    );
}
