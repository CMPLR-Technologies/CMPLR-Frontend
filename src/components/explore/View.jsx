import React from 'react';

import Following from './containers/Following';
import HashtagsList from './containers/HashtagsList';
import Nav from './containers/Nav';

export default function Explore() {
    return (
        <div className="explore">
            <div className="explore-main">
                <Nav />
                <HashtagsList />
            </div>
            <div className="explore-sidebar">
                <Following />
            </div>
        </div>
    );
}
