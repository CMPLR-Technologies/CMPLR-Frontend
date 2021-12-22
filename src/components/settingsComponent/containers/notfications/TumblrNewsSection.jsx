import React, { useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import { toggleProperty } from '../../Service';
export default function TumblrNewsSection() {
    const { tumblrNews, updateProperty } = useContext(SettingsContext);

    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Tumblr news</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={tumblrNews}
                                onChange={() => {
                                    toggleProperty(
                                        'tumblrNews',
                                        !tumblrNews,
                                        updateProperty
                                    );
                                }}
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">
                            Email me about trending topics, interesting blogs,
                            whatever.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
