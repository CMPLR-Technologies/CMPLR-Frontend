function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkUpdateEmail(newEmail, password, setErrorMsg) {
    if (newEmail === '') {
        setErrorMsg('You need to enter an email address');
        return false;
    } else if (password === '') {
        setErrorMsg('You need to enter your password');
        return false;
    } else if (validateEmail(newEmail) === false) {
        setErrorMsg('You need to enter a valid email');
        return false;
    } else if (password.length < 8) {
        setErrorMsg('Password must be at least 8 characters');
        return false;
    }
    return true;
}

export function checkUpdatePassword(
    currPassword,
    newPassword,
    confirmNewPassword,
    setErrorMsg
) {
    setErrorMsg('');
    if (currPassword === '') {
        setErrorMsg('Current Password is empty.');
        return false;
    } else if (currPassword.length < 8) {
        setErrorMsg('Invalid current password.');
        return false;
    } else if (newPassword === '') {
        setErrorMsg('New Password is empty.');
        return false;
    } else if (newPassword.length < 8) {
        setErrorMsg('New Password must be at least 8 characters .');
        return false;
    } else if (currPassword === newPassword) {
        setErrorMsg('New and current Passwords must be different.');
        return false;
    } else if (newPassword !== confirmNewPassword) {
        setErrorMsg('Passwords do not match.');
        return false;
    }
    return true;
}
export function checkAddTag(filteredTags, tag, setErrorMsg, filteringType) {
    let oldTags = filteredTags.slice();

    if (tag === '') {
        setErrorMsg(filteringType + ' is empty.');
        return false;
    } else if (
        oldTags.splice(-1).length > 0 &&
        oldTags.splice(-1).includes(tag)
    ) {
        setErrorMsg(filteringType + ' already exists.');
        return false;
    }
    return true;
}
