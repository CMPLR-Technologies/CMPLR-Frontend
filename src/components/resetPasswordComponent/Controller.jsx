export function handleNewPassword(firstPassword, secondPassword, setErrorMsg) {
    if (firstPassword.length < 8 || secondPassword.length < 8) {
        setErrorMsg('The password must be at least 8 characters.');
        return false;
    } else if (firstPassword !== secondPassword) {
        setErrorMsg('The new passwords do not match.');
        return false;
    }
    return true;
}
