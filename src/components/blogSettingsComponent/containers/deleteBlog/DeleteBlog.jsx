import React, { useState, useEffect } from 'react';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';

import { deleteBlog } from '../../Service';
import { useNavigate } from 'react-router-dom';
import PropsTypes from 'prop-types';
import { useParams } from 'react-router-dom';
/**
 * @function DeleteBlog
 * @description this is the stateful component of the delete account page
 * @param {password} password - the password of the user
 * @param {email} email - the email of the user
 * @returns {component} the component of DeleteBlog
 */

export default function DeleteBlog({ setWithNav }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName, blogId } = useParams();
    const history = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    useEffect(() => {
        setWithNav(false);
    }, []);
    window.addEventListener('popstate', function (event) {
        setWithNav(true);
    });

    return (
        <div
            data-testid="delete-account-container"
            id="forget-password"
            className="LoginView"
        >
            <div className="LoginCard" id="delete-account-card">
                <div className="LoginCard__logo-container" id="reset-pass-logo">
                    <p className="LoginCard__logo logo-delete-account">
                        Hey. Whoa.
                    </p>
                </div>
                <p className="form-msg-delete-account">
                    Are you sure you want to delete your blog? You’ll lose the
                    username {blogName} and everything you’ve posted will be
                    gone forever.
                </p>
                <p className="form-msg-delete-account">
                    If you’re sure, confirm by logging in below.
                </p>
                <div className="login-form" id="delete-account-form">
                    <AuthInput
                        id="reset-auth-input"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="text-field"
                        value={email}
                        setValue={setEmail}
                        dataTestid="input-labels"
                    ></AuthInput>
                    <AuthInput
                        id="reset-auth-input"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="text-field"
                        value={password}
                        setValue={setPassword}
                        dataTestid="input-labels"
                    ></AuthInput>
                    {errorMsg.length !== 0 && (
                        <div data-testid="message-error" className="form-msg">
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: '14px',
                                    padding: '0'
                                }}
                            >
                                {errorMsg}
                            </p>
                        </div>
                    )}
                    <AuthBtn
                        id="reset-password-btn"
                        text={`Delete ${blogName}`}
                        color="red"
                        handleClick={() =>
                            deleteBlog(
                                password,
                                email,
                                blogName,
                                setErrorMsg,
                                history,
                                user?.token,
                                parseInt(blogId) ===
                                    user?.userData?.primary_blog_id
                                    ? true
                                    : false
                            )
                        }
                        dataTestid="button-reset-password"
                    ></AuthBtn>
                    <AuthBtn
                        id="reset-password-btn"
                        text="Nevermind"
                        color="#001935"
                        handleClick={() => {
                            history(`/settings/blog/${blogName}`);
                        }}
                        dataTestid="button-reset-password"
                    ></AuthBtn>
                </div>
            </div>
        </div>
    );
}
DeleteBlog.propTypes = {
    blogName: PropsTypes.string.isRequired,
    setWithNav: PropsTypes.func.isRequired
};
