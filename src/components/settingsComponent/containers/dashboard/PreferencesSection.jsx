import React, { useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import { toggleProperty } from '../../Service';
export default function PreferencesSection() {
    const { bestStuffFirst, includeFollowedTags, updateProperty } =
        useContext(SettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Preferences</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={bestStuffFirst}
                                onChange={() => {
                                    toggleProperty(
                                        'bestStuffFirst',
                                        !bestStuffFirst,
                                        updateProperty,
                                        user?.token
                                    );
                                }}
                                data-testid="best-stuff-first-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Best Stuff First</p>
                        <p className="un-bold-text">
                            This switch puts stuff you'll like at the top of
                            your dash.
                        </p>
                    </div>
                </div>
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={includeFollowedTags}
                                onChange={() => {
                                    toggleProperty(
                                        'includeFollowedTags',
                                        !includeFollowedTags,
                                        updateProperty,
                                        user?.token
                                    );
                                }}
                                data-testid="include-followed-tags-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Include followed tag posts</p>
                        <p className="un-bold-text">
                            Posts from the tags you follow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
