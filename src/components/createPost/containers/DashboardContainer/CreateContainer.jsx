import React from 'react';
import OptionsCreatePost from './OptionsCard';
import ProfilePicContainer from './ProfilePicContainer';

export default function CreateContainer() {
    return (
        <>
            <div className="create1div">
                <main className="create_main">
                    {/* */}
                    <div className="create_container">
                        <ProfilePicContainer />
                        <OptionsCreatePost />
                    </div>
                </main>
            </div>
        </>
    );
}
