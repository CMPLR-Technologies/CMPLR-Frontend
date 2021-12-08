import React from 'react';
import p0 from '../../../../assets/images/profile_pic0.png';

export function ProfilePic() {
    return (
        <div className="post-margin">
            <div className="post-form--avatar">
                <div className="channel-avatar avatar-container">
                    <a href="#TODO THE PROFILE LINK" className="avatar-link">
                        <img className="avatar-image" src={p0} alt="untitled" />
                    </a>
                </div>
                <div className="primary-avatar">
                    <a href="#TODO THE PROFILE LINK" className="avatar-link">
                        <img className="avatar-image" src={p0} alt="untitled" />
                    </a>
                </div>
            </div>
        </div>
    );
}
