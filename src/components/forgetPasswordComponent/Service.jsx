import axios from 'axios';
import { apiBaseUrl } from '../../config.json';

import { handleResetPassword } from './Controller';
export function emailInDataBase(
    email,
    reCAPTCHAFlag,
    setEmptyEmail,
    setReCAPTCHAIsClicked,
    setEmailEnteredIsTrue,
    setWeAreInForgetPassPage
) {
    if (
        handleResetPassword(
            email,
            reCAPTCHAFlag,
            setEmptyEmail,
            setReCAPTCHAIsClicked,
            setEmailEnteredIsTrue,
            setWeAreInForgetPassPage
        ) === true
    ) {
        axios({
            method: 'post',
            url: `${apiBaseUrl}/forgot_password`,
            data: {
                email: email
            }
        })
            .then(res => {
                if (res?.status === 200) {
                    setWeAreInForgetPassPage(false);
                } else if (res?.status === 404) {
                    setEmailEnteredIsTrue(true);
                }
            })
            .catch(() => {
                setEmailEnteredIsTrue(true);
            });
    }
}
