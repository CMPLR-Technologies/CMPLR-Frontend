import React, { useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import { toggleProperty } from '../../Service';
export default function SoundsSection() {
    const { msgSound, updateProperty } = useContext(SettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Sounds</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={msgSound}
                                onChange={() => {
                                    toggleProperty(
                                        'msgSound',
                                        !msgSound,
                                        updateProperty,
                                        user?.token
                                    );
                                }}
                                data-testid="msg-sound-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Messaging sounds</p>
                        <p className="un-bold-text">
                            Assorted 'shling!' and 'fwip!' noises in messaging.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
