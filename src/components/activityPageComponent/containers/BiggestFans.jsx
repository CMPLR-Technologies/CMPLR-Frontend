import React from 'react';
import BiggestFansItem from './BiggestFansItem';
export default function BiggestFans() {
    return (
        <div className="BiggestFans">
            <span className="head">Biggest Fans</span>
            <div className="BiggestFansBoxs">
                <BiggestFansItem
                    key="1"
                    blogName="gaser"
                    blogId="1"
                    photo="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"
                    shape="cirle"
                />
                <BiggestFansItem
                    key="2"
                    blogName="gaser"
                    blogId="1"
                    photo="https://assets.tumblr.com/images/default_avatar/cube_open_64.png"
                    shape="cirle"
                />
            </div>
        </div>
    );
}
