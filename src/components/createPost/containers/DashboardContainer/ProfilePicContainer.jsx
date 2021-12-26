import React, { useContext } from 'react';
import { UserContext } from '../../../../contexts/userContext/UserContext';

export default function ProfilePicContainer() {
    const { user } = useContext(UserContext);
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
                                                src={user?.userData?.avatar}
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
