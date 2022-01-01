import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import { toggleProperty } from '../../Service';
export default function SecuritySection() {
    const { emailActivityCheck, TFA, updateProperty } =
        useContext(SettingsContext);
        const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Security</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={emailActivityCheck}
                                onChange={() => {
                                    toggleProperty(
                                        'emailActivityCheck',
                                        !emailActivityCheck,
                                        updateProperty,
                                        user?.token
                                    );
                                }}
                                data-testid="email-activity-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">
                            Email me about account activity.
                        </p>
                        <p className="un-bold-text">
                            You will receive an email when someone logs into
                            your account or a new app is authorized.
                        </p>
                    </div>
                </div>
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={TFA}
                                onChange={() => {
                                    toggleProperty('TFA', !TFA, updateProperty, user?.token);
                                }}
                                data-testid="tfa-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Two-factor authentication</p>
                        <p className="un-bold-text">
                            Enabling two factor authentication makes it extra
                            difficult for anyone other than you to access your
                            account. Learn more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
