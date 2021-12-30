/* eslint-disable camelcase */
import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
import { checkUpdateEmail } from './Controller';
import { checkUpdatePassword } from './Controller';
import { checkAddTag } from './Controller';

const camelToSnakeCase = str => {
    if (str[0] === str[0].toUpperCase()) {
        return str;
    }
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};
export function getUserAccount(setSettings, token) {
    axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/user/settings`
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                setSettings(res?.data?.response);
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            alert('Could not get user account settings please try again later');
            return false;
        });
}

export function updateEmailInDb(
    newEmail,
    password,
    setErrorMsg,
    updateProperty,
    setVersionOne,
    token
) {
    if (checkUpdateEmail(newEmail, password, setErrorMsg)) {
        axios({
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${apiBaseUrl}/settings/change_email`,
            data: {
                email: newEmail,
                password: password
            }
        })
            .then(res => {
                if (res?.data?.meta?.status_code === 200) {
                    updateProperty('email', res?.data?.response?.email);
                    setVersionOne(true);
                }
            })
            .catch(err => {
                if (err?.response?.status === 422) {
                    setErrorMsg('Invalid email entered');
                } else if (err?.response?.status === 400) {
                    setErrorMsg('Invalid password entered');
                } else {
                    setErrorMsg('Error updating email');
                }
            });
    }
}

export function updatePasswordInDb(
    currPassword,
    newPassword,
    confirmNewPassword,
    setVersionOne,
    setErrorMsg,
    token
) {
    if (
        checkUpdatePassword(
            currPassword,
            newPassword,
            confirmNewPassword,
            setErrorMsg
        )
    ) {
        axios({
            method: 'put',
            url: `${apiBaseUrl}/settings/change_password`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            data: {
                password: currPassword,
                new_password: newPassword,
                confirm_new_password: confirmNewPassword
            }
        })
            .then(res => {
                if (res?.data?.meta?.status_code === 200) {
                    setVersionOne(true);
                }
            })
            .catch(err => {
                if (err?.response?.status === 400) {
                    setErrorMsg('Current password is not valid');
                } else setErrorMsg('Error updating password');
            });
    }
}

export function toggleProperty(property, value, updateProperty, token) {
    axios({
        method: 'put',
        url: `${apiBaseUrl}/user/settings`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        data: {
            [camelToSnakeCase(property)]: value
        }
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                updateProperty(property, value);
            }
        })
        .catch(() => {
            alert('Error updating property');
        });
}

export function addFilteredTag(
    filteredTags,
    updateProperty,
    tag,
    setErrMsg,
    url,
    filteringType,
    token
) {
    if (checkAddTag(filteredTags, tag, setErrMsg, filteringType)) {
        axios({
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            url: `${apiBaseUrl}/user/${url}`,
            data: {
                filteringType: filteredTags
            }
        })
            .then(res => {
                if (res?.data?.meta?.status_code === 200) {
                    updateProperty(filteringType, filteredTags);
                    setErrMsg('');
                } else {
                    setErrMsg('Error adding ' + filteringType);
                }
            })
            .catch(() => {
                setErrMsg('Error adding ' + filteringType);
            });
    }
}

export function deleteFilteredTag(
    tags,
    updateProperty,
    tag,
    setErrMsg,
    url,
    filteringType,
    token
) {
    axios({
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/user/filtered_tags/${tag}`
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                updateProperty(filteringType, tags);
            } else {
                setErrMsg('Error deleting tag');
            }
        })
        .catch(() => {
            setErrMsg('Error deleting tag');
        });
}

export function getUserBlogs(setBlogs, token) {
    axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        url: `${apiBaseUrl}/user/info`
    })
        .then(res => {
            if (res?.data?.meta?.status_code === 200) {
                setBlogs(res?.data?.response?.blogs);
            } else {
                setBlogs([]);
            }
        })
        .catch(() => {
            alert('Could not get user blogs please try again later');
        });
}
