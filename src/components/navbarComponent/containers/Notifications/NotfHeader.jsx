import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
    
export default function NotfHeader(props) {
    const { userBlogName, userAvatar } = props;

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
        </div>
    );
}
