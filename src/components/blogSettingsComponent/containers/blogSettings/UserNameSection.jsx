import React, { useState, useContext } from 'react';
import UserNameSectionVersion1 from './UserNameSectionVersion1';
import UserNameSectionVersion2 from './UserNameSectionVersion2.jsx';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';

export default function EmailSection() {
    const { blogId } = useContext(BlogSettingsContext);
    const [versionOne, setVersionOne] = useState(true);
    const [sectionName, setSectionName] = useState(
        blogId ===
            JSON.parse(localStorage.getItem('user').userData['primary_blog_id'])
            ? 'UserName'
            : 'Tumblr URL'
    );
    return (
        <>
            {versionOne ? (
                <UserNameSectionVersion1
                    setVersionOne={setVersionOne}
                    sectionName={sectionName}
                />
            ) : (
                <UserNameSectionVersion2
                    setVersionOne={setVersionOne}
                    sectionName={sectionName}
                />
            )}
        </>
    );
}
