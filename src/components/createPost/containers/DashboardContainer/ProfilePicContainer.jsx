import React from 'react';
import p0 from '../../../../assets/images/profile_pic0.png';

export default function ProfilePicContainer() {
    return (
        <>
            <div className="profilepic_create">
                <div className="profilepicinner_create">
                    <span className="innerspan">
                        <span className="innerspan">
                            <a className="inneranchor">
                                <div className="picontainer">
                                    <div className="picStyles">
                                        <div className="picDiv">
                                            <img
                                                src={p0}
                                                alt="avatar"
                                                loading="eager"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}
