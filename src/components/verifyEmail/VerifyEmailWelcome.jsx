import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyEmailConfirm } from './Service';
import { ChatContext } from '../../contexts/chatContext/chatContext';
import { UserContext } from '../../contexts/userContext/UserContext';
/**
 * Verify Email Welcome Component
 * @function VerifyEmail
 * @description it's a view for the user when he navigate through the link which verifies his email
 * @returns {Component}
 */

export default function VerifyEmailWelcome() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const { setUserBlog } = useContext(ChatContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { userId, hash } = useParams();
    useEffect(() => {
        if (user?.userData?.id !== userId) {
            verifyEmailConfirm(
                user,
                userId,
                hash,
                navigate,
                setUser,
                setUserBlog
            );
        }
    }, []);
    return (
        <>
            <h1>your email is verified successfully</h1>
        </>
    );
}
