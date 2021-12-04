import React from 'react';
import p0 from '../../assets/images/profile_pic0.png';
import OptionsCreatePost from './containers/OptionsCard';

export default function CreatePost() {
    return (
        <>
            <div className="create1div">
                <main className="create_main">
                    {/* */}
                    <div className="create_container">
                        <div className="profilepic_create">
                            <div className="profilepicinner_create">
                                <span className="innerspan">
                                    <span className="innerspan">
                                        <a
                                            className="inneranchor"
                                            href="/user/prfile/TODO"
                                        >
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
                        <OptionsCreatePost />
                    </div>
                </main>
            </div>
        </>
    );
}
