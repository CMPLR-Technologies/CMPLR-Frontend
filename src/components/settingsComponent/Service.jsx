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
export function getUserAccount(setSettings) {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/settings`
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                setSettings(res.data.response);
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

export function updateEmailInDb(
    newEmail,
    password,
    setErrorMsg,
    updateProperty,
    setVersionOne
) {
    if (checkUpdateEmail(newEmail, password, setErrorMsg)) {
        axios({
            //TODO change to post
            method: 'get',
            url: `${apiBaseUrl}/settings/change-email`
            // data: {
            //     email: newEmail,
            //     password: password
            // }
        })
            .then(res => {
                if (res.data.meta.status_code === 200) {
                    updateProperty('email', res.data.response);
                    setVersionOne(true);
                } else {
                    setErrorMsg('Invalid email entered');
                }
            })
            .catch(() => {
                setErrorMsg('Error updating email');
            });
    }
}

export function updatePasswordInDb(
    currPassword,
    newPassword,
    confirmNewPassword,
    setVersionOne,
    setErrorMsg
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
            //TODO change to post
            method: 'get',
            url: `${apiBaseUrl}/settings/change-password`
            // data: {
            //     password: currPassword,
            //     new_password: newPassword,
            //     confirm_new_password: confirmNewPassword
            // }
        })
            .then(res => {
                if (res.data.meta.status_code === 200) {
                    setVersionOne(true);
                } else {
                    setErrorMsg('Invalid password entered');
                }
            })
            .catch(() => {
                setErrorMsg('Error updating password');
            });
    }
}

export function toggleProperty(property, value, updateProperty) {
    axios({
        //TODO change to put and update endpoint
        method: 'get',
        //TODO change it to settings
        url: `${apiBaseUrl}/user/settings2`
        // data: {
        //     [camelToSnakeCase(property)]: value
        // }
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                updateProperty(property, value);
            }
        })
        .catch(() => {});
}

export function addFilteredTag(filteredTags, updateProperty, tag, setErrMsg) {
    if (checkAddTag(filteredTags, tag, setErrMsg)) {
        axios({
            //TODO change to post
            method: 'get',
            url: `${apiBaseUrl}/user/filtered_tags`
            // data: {
            //     filtered_tags: tags
            // }
        })
            .then(res => {
                if (res.data.meta.status_code === 200) {
                    updateProperty('filteredTags', filteredTags);
                } else {
                    setErrMsg('Error adding tag');
                }
            })
            .catch(() => {
                setErrMsg('Error adding tag');
            });
    }
}

export function deleteFilteredTag(tags, updateProperty, tag, setErrMsg) {
    console.log(tags);
    axios({
        //TODO change to Delete
        method: 'get',
        //TODO change it to /user/filtered_tags/${tag}
        url: `${apiBaseUrl}/user/filtered_tags`
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                updateProperty('filteredTags', tags);
            } else {
                setErrMsg('Error deleting tag');
            }
        })
        .catch(() => {
            setErrMsg('Error deleting tag');
        });
}
