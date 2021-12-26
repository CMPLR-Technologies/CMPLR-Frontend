import React, { useContext, useState } from 'react';
import { updateEmailInDb } from '../../Service';
import AuthInput from '../../../partials/AuthInput';
import AuthBtn from '../../../partials/AuthBtn';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import PropTypes from 'prop-types';
export default function EmailSectionVersion2({ setVersionOne }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email, updateProperty } = useContext(SettingsContext);
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
                    placeholder={
                        newEmail !== '' ? newEmail : 'Your email address'
                    }
                    className="text-field"
                    value={newEmail}
                    setValue={setNewEmail}
                    id="update-email-email"
                ></AuthInput>
                <AuthInput
                    name="password"
                    type="password"
                    placeholder={
                        password !== '' ? password : 'Confirm password'
                    }
                    className="text-field"
                    value={password}
                    setValue={setPassword}
                    id="update-email-password"
                ></AuthInput>

                {errorMsg.length !== 0 && (
                    <div id="update-email-error">
                        <p>{errorMsg}</p>
                    </div>
                )}
                <div className="update-email-btns">
                    <AuthBtn
                        text="Cancel"
                        color="#999999"
                        id="update-email-btn-cancel"
                        handleClick={() => setVersionOne(true)}
                    ></AuthBtn>
                    <AuthBtn
                        text="Save"
                        color="#00b8ff"
                        handleClick={() => {
                            updateEmailInDb(
                                newEmail,
                                password,
                                setErrorMsg,
                                updateProperty,
                                setVersionOne,
                                user?.token
                            );
                        }}
                        id="update-email-btn-save"
                    ></AuthBtn>
                </div>
            </div>
        </div>
    );
}
EmailSectionVersion2.propTypes = {
    setVersionOne: PropTypes.func.isRequired
};
