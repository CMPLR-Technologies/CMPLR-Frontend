import React, { useState } from 'react';
import UserNameSectionVersion1 from './UserNameSectionVersion1';
import UserNameSectionVersion2 from './UserNameSectionVersion2.jsx';
import BlogSettingsContextProvider from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
export default function UserNameSection() {
    const [versionOne, setVersionOne] = useState(true);
    return (
        <BlogSettingsContextProvider>
            {versionOne ? (
                <UserNameSectionVersion1 setVersionOne={setVersionOne} />
            ) : (
                <UserNameSectionVersion2 setVersionOne={setVersionOne} />
            )}
        </BlogSettingsContextProvider>
    );
}
