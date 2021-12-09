import { updateEmailDb } from './Service';
import { updatePasswordDb } from './Service';

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function handleUpdateEmail(
    newEmail,
    password,
    setErrorMsg,
    updateEmail,
    setVersionOne
) {
    if (password === '') {
        setErrorMsg(
            'You need to enter your password to change your email address'
        );
    } else if (password.length < 8) {
        setErrorMsg('Password must be at least 8 characters long');
    } else if (validateEmail(newEmail) === false) {
        setErrorMsg('You need to enter a valid email');
    } else {
        updateEmailDb(newEmail, password).then(res => {
            //TODO if the email already exists
            if (res === false) {
                setErrorMsg('Invalid password entered');
            } else {
                setErrorMsg('');
                updateEmail(newEmail);
                setVersionOne(true);
            }
        });
    }
}

export function handleUpdatePassword(
    currPassword,
    newPassword,
    newPassword2,
    updatePassword,
    setVersionOne,
    setErrorMsg
) {
    if (currPassword === '') {
        setErrorMsg('Password is empty.');
    } else if (currPassword.length < 8) {
        setErrorMsg('Invalid password entered');
    } else if (newPassword !== newPassword2) {
        setErrorMsg('Passwords do not match.');
    } else {
        updatePasswordDb(currPassword, newPassword).then(res => {
            //TODO if the email already exists
            if (res === false) {
                setErrorMsg('Invalid password entered');
            } else {
                setErrorMsg('');
                updatePassword(newPassword);
                setVersionOne(true);
            }
        });
    }
}
