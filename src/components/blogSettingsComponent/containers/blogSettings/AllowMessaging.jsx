import React, { useContext } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { updatePropertyInDb } from '../../Service';
import { useParams } from 'react-router-dom';
export default function AllowMessaging() {
    const { updateProperty, allowMessaging } = useContext(BlogSettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    return (
        <div className="security" id="section" data-testid="section">
            <div className="sub-section-left" data-testid="sub-section-left">
                <h3>Messaging</h3>
            </div>
            <div className="sub-section-right" data-testid="sub-section-right">
                <div
                    className="sub-section-right-up"
                    data-testid="sub-section-right-up"
                >
                    <div className="switch-div" data-testid="switch-div">
                        <label className="switch" data-testid="switch">
                            <input
                                type="checkbox"
                                checked={allowMessaging}
                                onChange={() => {
                                    updatePropertyInDb(
                                        user?.token,
                                        blogName,
                                        updateProperty,
                                        'allowMessaging',
                                        !allowMessaging
                                    );
                                }}
                                data-testid="switch-input-msg-ts"
                            ></input>
                            <span
                                className="slider round"
                                data-testid="slider"
                            ></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">
                            Only allow messages from CMPlrs you follow
                        </p>
                        <p className="un-bold-text">
                            CMPlrs you don't follow won't be able to start
                            conversations with you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
