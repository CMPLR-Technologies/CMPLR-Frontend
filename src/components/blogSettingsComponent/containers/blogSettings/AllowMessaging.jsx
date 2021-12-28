import React, { useContext } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { updatePropertyInDb } from '../../Service';
import { useParams } from 'react-router-dom';
export default function AllowMessaging() {
    const { updateProperty, allowMessaging } = useContext(BlogSettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    return (
        <div className="security" id="section">
            <div className="sub-section-left">
                <h3>Messaging</h3>
            </div>
            <div className="sub-section-right">
                <div className="sub-section-right-up">
                    <div className="switch-div">
                        <label className="switch">
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
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">
                            Only allow messages from Tumblrs you follow
                        </p>
                        <p className="un-bold-text">
                            Tumblrs you don't follow won't be able to start
                            conversations with you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
