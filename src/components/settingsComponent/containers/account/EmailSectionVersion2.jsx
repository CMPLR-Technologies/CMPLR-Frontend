import React, { useContext, useState } from 'react';
import { handleUpdateEmail } from '../../Controller';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
export default function EmailSectionVersion2({ setVersionOne }) {
    const { email, updateEmail } = useContext(SettingsContext);
    const [newEmail, setNewEmail] = useState(email);
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    return (
        <div className="email" id="section">
            <div className="sub-section-left">
                <h3>Email</h3>
            </div>
            <div className="sub-section-right">
                <AuthInput
                    name="email"
                    type="email"
                    placeholder={newEmail}
                    className="text-field"
                    value={newEmail}
                    setValue={setNewEmail}
                    id="update-email-email"
                ></AuthInput>
                <AuthInput
                    name="password"
                    type="password"
                    placeholder={password}
                    className="text-field"
                    value={password}
                    setValue={setPassword}
                    id="update-email-password"
                ></AuthInput>
                {errorMsg.length != 0 && (
                    <div id="update-email-error">
                        <p>{errorMsg}</p>
                    </div>
                )}
                <div className="update-email-btns">
                    <AuthBtn
                        text="Cancle"
                        color="#999999"
                        id="update-email-btn-cancle"
                        handleClick={() => setVersionOne(true)}
                    ></AuthBtn>
                    <AuthBtn
                        text="Save"
                        color="#00b8ff"
                        handleClick={() => {
                            handleUpdateEmail(
                                newEmail,
                                password,
                                setErrorMsg,
                                updateEmail,
                                setVersionOne
                            );
                        }}
                        id="update-email-btn-save"
                    ></AuthBtn>
                </div>
            </div>
        </div>
    );
}
