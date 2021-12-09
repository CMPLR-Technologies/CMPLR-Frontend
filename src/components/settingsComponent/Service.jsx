//NOTE meta and Meta status amd status_code
import axios from 'axios';
import { apiBaseUrl } from '../../config.json';
export function getUserAccount(setSettings) {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/settings/account`
    })
        .then(res => {
            if (res.data.meta.status === 200) {
                console.log(res.data.response);
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

export function updateEmailDb(enteredPassword, newEmail) {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/settings/change_email`
        // data: {
        //     email: newEmail,
        //     password: enteredPassword
        // }
    })
        .then(res => {
            if (res.data.meta.status_code === 200) {
                return res.data.response.email;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

export function updatePasswordDb(oldPassword, newPassword) {
    axios({
        method: 'put',
        url: `${apiBaseUrl}/settings/change_password`,
        data: {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
    })
        .then(res => {
            if (res.data.meta.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

export function getTagFiltering() {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/user/filtered_tags`
    })
        .then(res => {
            if (res.data.Meta.status === 200) {
                return res.data.filtered_tags;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}
export function addTagFiltering(tags) {
    axios({
        method: 'post',
        url: `${apiBaseUrl}/user/filtered_tags`,
        data: {
            filtered_tags: tags
        }
    })
        .then(res => {
            if (res.data.Meta.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

export function deleteTagFiltering(tag) {
    axios({
        method: 'Delete',
        url: `${apiBaseUrl}/user/filtered_tags/${tag}`
    })
        .then(res => {
            if (res.data.Meta.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

toogleEmailMe = flag => {
    axios({
        method: 'put',
        url: `${apiBaseUrl}/settings/email-me`
    })
        .then(res => {
            if (res.data.Meta.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
};














export function getContentFiltering() {
    axios({
        method: 'get',
        url: `${apiBaseUrl}/user/filtered_content`
    })
        .then(res => {
            if (res.data.Meta.status === 200) {
                return res.data.filtered_content;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

export function addContentFiltering(contents) {
    axios({
        method: 'post',
        url: `${apiBaseUrl}/user/filtered_content`,
        data: {
            filtered_tags: contents
        }
    })
        .then(res => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}

export function deleteContentFiltering(content) {
    axios({
        method: 'Delete',
        url: `${apiBaseUrl}/user/filtered_content/${content}`
    })
        .then(res => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch(() => {
            return false;
        });
}
