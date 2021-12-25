import React, { useState, useContext } from 'react';
import { updatePasswordInDb } from '../../Service';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import PropTypes from 'prop-types';
export default function PasswordSectionVersion2({ setVersionOne }) {
    const { updatePassword } = useContext(SettingsContext);
    const [currPassword, setCurrPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    return (
        <div className="email" id="section">
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
                        color="#999999"
                        id="update-password-btn-cancel"
                        handleClick={() => setVersionOne(true)}
                    ></AuthBtn>
                    <AuthBtn
                        text="Change Password"
                        color="#00b8ff"
                        handleClick={() => {
                            updatePasswordInDb(
                                currPassword,
                                newPassword,
                                confirmNewPassword,
                                setVersionOne,
                                setErrorMsg
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