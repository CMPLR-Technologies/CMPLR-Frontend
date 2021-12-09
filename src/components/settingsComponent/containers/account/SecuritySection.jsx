import React,{useContext} from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';

export default function SecuritySection() {
    const { accountActivity,twoFactorAuthentication } = useContext(SettingsContext);
    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Security</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label class="switch">
                            <input
                                type="checkbox"
                                checked={accountActivity}
                            ></input>
                            <span class="slider round"></span>
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
                        <label class="switch">
                            <input
                                type="checkbox"
                                checked={twoFactorAuthentication}
                            ></input>
                            <span class="slider round"></span>
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
