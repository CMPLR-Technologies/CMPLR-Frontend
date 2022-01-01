import React, { useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import { toggleProperty } from '../../Service';
export default function InterfaceSection() {
    const { endlessScrolling, showBadge, updateProperty } =
        useContext(SettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Interface</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={endlessScrolling}
                                onChange={() => {
                                    toggleProperty(
                                        'endlessScrolling',
                                        !endlessScrolling,
                                        updateProperty,
                                        user?.token
                                    );
                                }}
                                data-testid="endless-scrolling-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Enable endless scrolling</p>
                        <p className="un-bold-text">
                            Surf your dashboard page-by-page instead of as an
                            infinitely-scrolling feed. To update the URL for
                            each page in your browser, you'll also need to
                            disable Best Stuff First.
                        </p>
                    </div>
                </div>
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={showBadge}
                                onChange={() => {
                                    toggleProperty(
                                        'showBadge',
                                        !showBadge,
                                        updateProperty,
                                        user?.token
                                    );
                                }}
                                data-testid="show-badge-check"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        {/* TODO:is this showBadge? */}
                        <p className="bold-text">
                            Show timestamps on posts, reblogs, and notes.
                        </p>
                        <p className="un-bold-text">
                            Enabling this displays timestamps in the post,
                            reblog trail, and notes views. By default,
                            timestamps are only visible in the meatballs menu on
                            posts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
