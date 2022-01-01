import React, { useState, useContext } from 'react';
import { updatePasswordInDb } from '../../Service';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';

export default function PasswordSectionVersion2({ setVersionOne }) {
    const theme = useContext(ThemeContext)[0];

    const user = JSON.parse(localStorage.getItem('user'));
    const [currPassword, setCurrPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    return (
        <div className="email" id="section" data-testid="version2-password">
            <div className="sub-section-left">
                <h3>Password</h3>
            </div>
            <div className="sub-section-right">
                <AuthInput
                    name="password"
                    type="password"
                    placeholder={
                        currPassword !== '' ? currPassword : 'Current password'
                    }
                    className="text-field"
                    value={currPassword}
                    setValue={setCurrPassword}
                    id="update-email-email"
                ></AuthInput>
                <AuthInput
                    name="password"
                    type="password"
                    placeholder={
                        newPassword !== '' ? newPassword : 'New password'
                    }
                    className="text-field"
                    value={newPassword}
                    setValue={setNewPassword}
                    id="update-email-password"
                ></AuthInput>
                <AuthInput
                    name="password"
                    type="password"
                    placeholder={
                        confirmNewPassword !== ''
                            ? confirmNewPassword
                            : 'Confirm new password'
                    }
                    className="text-field"
                    value={confirmNewPassword}
                    setValue={setConfirmNewPassword}
                    id="update-email-password"
                ></AuthInput>
                {errorMsg.length !== 0 && (
                    <div id="update-email-error">
                        <p>{errorMsg}</p>
                    </div>
                )}
                <div className="update-email-btns">
                    <AuthBtn
                        text="Cancle"
                        color={`rgb(${themes[theme].black})`}
                        id="update-password-btn-cancel"
                        handleClick={() => setVersionOne(true)}
                    ></AuthBtn>
                    <AuthBtn
                        text="Change Password"
                        color={`rgb(${themes[theme].accent})`}
                        handleClick={() => {
                            updatePasswordInDb(
                                currPassword,
                                newPassword,
                                confirmNewPassword,
                                setVersionOne,
                                setErrorMsg,
                                user?.token
                            );
                        }}
                        id="update-password-btn-save"
                    ></AuthBtn>
                </div>
            </div>
        </div>
    );
}
PasswordSectionVersion2.propTypes = {
    setVersionOne: PropTypes.func.isRequired
};
