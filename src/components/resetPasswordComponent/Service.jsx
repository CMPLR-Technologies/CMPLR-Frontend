/* eslint-disable camelcase */
import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { handleNewPassword } from './Controller';

export function newPassword(
    firstPassword,
    secondPassword,
    email,
    setErrorMsg,
    token,
    setUser,
    navigate
) {
    if (
        handleNewPassword(firstPassword, secondPassword, setErrorMsg) === true
    ) {
        axios({
            method: 'post',
            url: `${apiBaseUrl}/reset_password`,
            data: {
                email: email,
                token: token,
                password: firstPassword,
                password_confirmation: secondPassword
            }
        })
            .then(res => {
                if (res?.data?.meta?.status_code === 200) {
                    const user = {
                        token: res?.data?.response?.token,
                        userData: res?.data?.response?.user,
                        blogName: res?.data?.response?.blog_name
                    };
                    setUser(user);
                    localStorage.setItem('user', JSON.stringify(user));
                    setErrorMsg([]);
                    navigate('/dashboard');
                } else {
                    setErrorMsg('Invalid password please try again');
                }
            })
            .catch(() => {
                setErrorMsg('Could not change the password ');
            });
    }
}

export function getEmail(token, setEmail, setErrorMsg) {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/reset_password/${token}`
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                setEmail(res?.data?.response?.email);
            }
        })
        .catch(() => {
            setErrorMsg('Could not get the email please try again');
        });
}
