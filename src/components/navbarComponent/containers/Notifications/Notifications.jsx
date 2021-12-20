import React from 'react';
import NotfBody from './NotfBody';
import NotfHeader from './NotfHeader';

export default function Notifications(props) {
    const { userBlogName, userAvatar, notfArray } = props;
    return (
        <div className="notifications-container">
            <NotfHeader userBlogName={userBlogName} userAvatar={userAvatar} />
            {notfArray.map(
                (
                    { notfDate, notfAvatar, notfType, notfUser, postSnap },
                    index
                ) => (
                    <NotfBody
                        key={index}
                        notfDate={notfDate}
                        notfAvatar={notfAvatar}
                        notfType={notfType}
                        notfUser={notfUser}
                        postSnap={postSnap}
                    />
                )
            )}
        </div>
    );
}
