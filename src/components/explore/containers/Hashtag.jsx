import React from 'react';

export default function Hashtag() {
    return (
        <div className="explore-hashtag">
            <a href="/">
                <span>#code</span>
                <div className="explore-hashtag-images">
                    <img src="https://64.media.tumblr.com/6ac1ae522b94b16a52e7f3ac252deb2a/072cd2f2e5d2138c-ea/s400x600/62943a44b28a223927097817f2e64044928065b0.jpg" />
                    <img src="https://64.media.tumblr.com/0e766f789003390be05f12216eb70d11/734913bbf56b1b0c-13/s400x600/dbfe58974887f1f866fa935849cba89a6fefb5d0.jpg" />
                </div>
            </a>
            <button>Follow</button>
        </div>
    );
}
