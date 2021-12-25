import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileFullHeader from './containers/ProfileFullHeader';

export default function ProfileFull() {
    const { blogName, blogID, content } = useParams();
    return (
        <div>
            <ProfileFullHeader
                blogName={blogName}
                blogID={blogID}
                content={content}
            />
        </div>
    );
}
