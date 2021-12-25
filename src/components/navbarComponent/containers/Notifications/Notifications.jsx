import React, { useState } from 'react';
import NotfBody from './NotfBody';
import NotfHeader from './NotfHeader';

export default function Notifications(props) {
    const { userBlogName, userAvatar, notfArray, setNotfArray } = props;
    const [notfDates, setNotfDates] = useState(Object.keys(notfArray));
    const [notf, setNotf] = useState(notfArray);
    const filterNotf = filter => {
        if (filter === 'all') {
            setNotf(notfArray);
            return;
        }
        const tempNotf = {};
        notfDates.map(date => {
            notfArray[date] &&
                notfArray[date].map(notf => {
                    if (notf.type === filter) {
                        tempNotf[date] = [];
                        tempNotf[date].push(notf);
                    }
                });
        });
        setNotf(tempNotf);
    };

    return (
        <div className="notifications-container">
            <NotfHeader
                filterNotf={filterNotf}
                userBlogName={userBlogName}
                userAvatar={userAvatar}
            />
            {notfDates.map(date => {
                return (
                    <>
                        {notf[date] && (
                            <div className="notf-date">
                                <div className="duration">2 days ago</div>{' '}
                                {/*TODO calc duration depends on BE response format*/}
                                <div className="date">{date}</div>
                            </div>
                        )}
                        {notf[date] &&
                            notf[date].map((notf, index) => (
                                <>
                                    <NotfBody notf={notf} key={index} />
                                </>
                            ))}
                    </>
                );
            })}
            {/* {notfArray.map(
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
            )} */}
        </div>
    );
}
