import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileFull from './containers/ProfileFull';

export default function ProfileFullContainer() {
    const { blogName, blogID, content } = useParams();
    const css = `
    .nav, .nav * {
            display: none;
        }
    `;
    return (
        <div className="profile-full">
            <ProfileFull
                blogName={blogName}
                blogID={blogID}
                content={content}
            />
            <style>{css}</style>
        </div>
    );
}
