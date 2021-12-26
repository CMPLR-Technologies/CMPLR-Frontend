import React, { useState } from 'react';
import EmailSectionVersion1 from './EmailSectionVersion1';
import EmailSectionVersion2 from './EmailSectionVersion2';

export default function EmailSection() {
    const [versionOne, setVersionOne] = useState(true);
    return (
        <>
            {versionOne ? (
                <EmailSectionVersion1 setVersionOne={setVersionOne} />
            ) : (
                <EmailSectionVersion2 setVersionOne={setVersionOne} />
            )}
        </>
    );
}
