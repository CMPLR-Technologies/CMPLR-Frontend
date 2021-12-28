import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { checkDeleteAccount } from './Controller';

// export function deleteAccount(
//     password,
//     email,
//     setErrorMsg,
//     history,
//     setWithNav,
//     token
// ) {
//     if (checkDeleteAccount(password, email, setErrorMsg)) {
//         axios({
//             //TODO change to delete
//             method: 'delete',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//             url: `${apiBaseUrl}/settings/account/delete`,
//             data: {
//                 email: email,
//                 password: password
//             }
//         })
//             .then(res => {
//                 if (res.data.meta.status_code === 200) {
//                     setWithNav(true);
//                     localStorage.clear();
//                     history('/');
//                 } else {
//                     setErrorMsg('Error deleting account');
//                 }
//             })
//             .catch(() => {
//                 setErrorMsg('Error deleting account');
//             });
//     }
// }

export function deleteAccount(
    password,
    email,
    blogName,
    setErrorMsg,
    history,
    token,
    isPrimaryBlog,
    setWithNav
) {
    if (checkDeleteAccount(password, email, setErrorMsg)) {
        //TODO if its the primary key clear local storage and refresh
        //TODO If its not the primary key then just delete the blog and return to settings
        setErrorMsg('');
        axios({
            method: 'post',
            url: `${apiBaseUrl}/blog/${blogName}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                email: email,
                password: password
            }
        })
            .then(res => {
                if (res?.data?.meta?.status_code === 200) {
                    setWithNav(true);
                    if (isPrimaryBlog === true) {
                        localStorage.clear();
                        history(`/login`);
                    } else {
                        history('/settings/account');
                    }
                }
            })
            .catch(err => {
                if (err?.response?.status === 404) {
                    setErrorMsg('blog name is not available');
                } else if (err?.response?.status === 403) {
                    setErrorMsg('email or password is incorrect');
                } else setErrorMsg('error deleting blog');
            });
    }
}
