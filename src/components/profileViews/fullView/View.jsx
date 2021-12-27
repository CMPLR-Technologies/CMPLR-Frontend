import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileFull from './containers/ProfileFull';

export default function ProfileFullContainer() {
    const { blogName, blogID, content } = useParams();
    const [scrollTop, setScrollTop] = useState(0);
    const headerScrollAnimation = el => {
        setScrollTop(el.target.scrollTop);
    };

    return (
        <div className="profile-full" onScroll={headerScrollAnimation}>
            <ProfileFull
                blogName={blogName}
                blogID={blogID}
                content={content}
                scrollTop={scrollTop}
            />
        </div>
    );
}
