function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function checkCreateBlog(
    title,
    url,
    privacy,
    password,
    errorMsg,
    setErrorMsg
) {
    let flag = true;
    setErrorMsg([]);
    if (title === '') {
        setErrorMsg(prev => [...prev, 'title is required']);
        flag = false;
    }
    if (url === '') {
        setErrorMsg(prev => [...prev, 'url is required']);
        flag = false;
    }
    if (privacy) {
        if (password === '') {
            setErrorMsg(prev => [...prev, 'password is required']);
            flag = false;
        } else if (password.length < 8) {
            setErrorMsg(prev => [
                ...prev,
                'password must be at least 8 characters'
            ]);
            flag = false;
        }
    }
    return flag;
}
export function checkDeleteBlog(password, email, setErrorMsg) {
    setErrorMsg(' ');
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
