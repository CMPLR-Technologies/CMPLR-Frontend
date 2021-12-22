
import React,{useState} from 'react';
import PasswordSectionVersion1 from './PasswordSectionVersion1';
import PasswordSectionVersion2 from './PasswordSectionVersion2';
export default function PasswordSection() {
    const [versionOne, setVersionOne] = useState(true);
    return (
        <>
            {versionOne ? (
                <PasswordSectionVersion1
                    setVersionOne={setVersionOne}
                />
            ) : (
                <PasswordSectionVersion2
                    setVersionOne={setVersionOne}
                />
            )}
        </>
    );
}
