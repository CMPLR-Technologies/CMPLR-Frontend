import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileFullHeader from './containers/ProfileFullHeader';

export default function ProfileFull() {
    const { blogID, content } = useParams();

    return (
        <div>
            <ProfileFullHeader blogID={blogID} content={content} />
            {content === 'likes' ? (
                <ProfileFullLikesMenu blogID={blogID} />
            ) : content === 'following' ? (
                <ProfileFullFollowingMenu blogID={blogID} />
            ) : (
                <ProfileFullGenericMenu />
            )}
        </div>
    );
}
