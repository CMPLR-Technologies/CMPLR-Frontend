import React from 'react';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function NotfHeader(props) {
    const { userBlogName, userAvatar, filterNotf } = props;
    const [selected, setSelected] = useState(1);

    return (
        <div className="header">
            <div className="control-left">
                <div>
                    <div>
                        <div className="header-flex-cont">
                            <img
                                data-testid="avatar-img-ts"
                                src={userAvatar}
                                className="avatar-img-mob"
                            />
                            <button className="btn-control">
                                <span className="caption">{userBlogName}</span>
                                <span className="icon_arrow_carrot_down">
                                    <RiArrowDropDownLine
                                        style={{
                                            fill: 'black'
                                        }}
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notf-types">
                <div
                    onClick={() => {
                        setSelected(1);
                        filterNotf('all');
                    }}
                    className={`all ${selected === 1 ? 'selected' : ''}`}
                >
                    All
                </div>
                <div
                    onClick={() => {
                        setSelected(2);
                        filterNotf('reblog');
                    }}
                    className={`reblogs ${selected === 2 ? 'selected' : ''}`}
                >
                    Reblogs
                </div>
                <div
                    onClick={() => {
                        setSelected(3);
                        filterNotf('reply');
                    }}
                    className={`replies ${selected === 3 ? 'selected' : ''}`}
                >
                    Replies
                </div>
            </div>
        </div>
    );
}
