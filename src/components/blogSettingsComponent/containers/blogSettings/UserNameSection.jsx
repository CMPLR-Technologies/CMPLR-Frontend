import React, { useState } from 'react';
import UserNameSectionVersion1 from './UserNameSectionVersion1';
import UserNameSectionVersion2 from './UserNameSectionVersion2.jsx';

export default function UserNameSection() {
    const [versionOne, setVersionOne] = useState(true);
    return (
        <>
            {versionOne ? (
                <UserNameSectionVersion1
                    setVersionOne={setVersionOne}
                   
                />
            ) : (
                <UserNameSectionVersion2
                    setVersionOne={setVersionOne}
                  
                />
            )}
        </>
    );
}
