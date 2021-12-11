import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { useNavigate } from 'react-router-dom';
import { handleNewPssword } from './Controller';
export function newPassword(
    firstPassword,
    secondPassword,
    email,
    setErrorMsg,
    token
) {
    if (handleNewPssword(firstPassword, secondPassword, setErrorMsg) === true) {
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
                // console.log(res.data.meta.status_code);
                if (res.data.meta.status_code === 200) {
                    const user = {
                        token: res.data.response.token,
                        userData: res.data.response.user,
                        blogName: res.data.response.blog_name
                    };
                    console.log(user);
                    // setUser(user);
                    // localStorage.setItem('user', JSON.stringify(user));
                    useNavigate('/dashboard');
                } else {
                    setErrorMsg('Invalid password please try again');
                }
            })
            .catch(() => {
                setErrorMsg('Invalid password please try again');
            });
    }
}

export function getEmail(token, setEmail) {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/reset_password/${token}`
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                console.log(res.data.response.email);
                setEmail(res.data.response.email);
            }
        })
        .catch(() => {});
}
