function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkDeleteAccount(password, email, setErrorMsg) {
    if (password === '' || email === '') {
        setErrorMsg('All fields are required.');
        return false;
    } else if (validateEmail(email) === false) {
        setErrorMsg('You need to enter a valid email.');
        return false;
    } else if (password.length < 8) {
        setErrorMsg('Password must be at least 8 characters.');
        return false;
    }
    return true;
}
