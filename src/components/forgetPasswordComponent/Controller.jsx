export function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function handleResetPassword(
    email,
    reCAPTCHAFlag,
    setEmptyEmail,
    setReCAPTCHAIsClicked,
    setEmailEnteredIsTrue,
    setWeAreInForgetPassPage
) {
    //empty email is true so we will show error message
    if (email.length === 0) {
        setEmptyEmail(true);
        setReCAPTCHAIsClicked(false);
        setEmailEnteredIsTrue(false);
        setWeAreInForgetPassPage(true);
        return false;
    }
    //Recaptcha is not clicked so we will show error message
    else if (!reCAPTCHAFlag) {
        setWeAreInForgetPassPage(true);
        setReCAPTCHAIsClicked(true);
        setEmailEnteredIsTrue(false);
        setEmptyEmail(false);
        return false;
    }
    //enter email is false so we will show error message or not in database
    else if (validateEmail(email) === false) {
        setWeAreInForgetPassPage(true);
        setEmailEnteredIsTrue(true);
        setEmptyEmail(false);
        setReCAPTCHAIsClicked(false);
        return false;
    } else {
        setEmailEnteredIsTrue(false);
        setEmptyEmail(false);
        setReCAPTCHAIsClicked(false);
        return true;
    }
}
