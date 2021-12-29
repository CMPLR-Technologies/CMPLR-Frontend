import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotfBody from './NotfBody';
import NotfHeader from './NotfHeader';
import propTypes from 'prop-types';
Notifications.propTypes = {
    userBlogName: propTypes.string,
    userAvatar: propTypes.string,
    notfArray: propTypes.object,
    setNotfArray: propTypes.func,
    activity: propTypes.bool
};
export default function Notifications(props) {
    const {
        userBlogName,
        userAvatar,
        notfArray,
        setNotfArray,
        setUnseenNotf,
        activity,
        setSideBlogId,
        setSideBlogName,
        setShowSideBlog
    } = props;
    const [notfDates, setNotfDates] = useState(
        notfArray ? Object.keys(notfArray) : null
    );
    const [notf, setNotf] = useState(notfArray);

    useEffect(() => {
        if (notfArray !== null) setNotfDates(Object.keys(notfArray));
        setNotf(notfArray);
    }, [notfArray]);
    const filterNotf = filter => {
        if (filter === 'all') {
            setNotf(notfArray);
            return;
        }
        const tempNotf = {};
        notfDates &&
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
        <>
            <div className={!activity ? `notifications-container` : ''}>
                {!activity && (
                    <NotfHeader
                        filterNotf={filterNotf}
                        userBlogName={userBlogName}
                        userAvatar={userAvatar}
                        setNotfArray={setNotfArray}
                        setUnseenNotf={setUnseenNotf}
                    />
                )}{' '}
                <div className={!activity ? `notf-body-cont` : ''}>
                    {notfDates &&
                        notfDates.map(date => {
                            return (
                                <>
                                    {notf && notf[date] && (
                                        <div className="notf-date">
                                            <div className="duration">
                                                2 days ago
                                            </div>{' '}
                                            {/*TODO calc duration depends on BE response format*/}
                                            <div className="date">{date}</div>
                                        </div>
                                    )}
                                    {notf &&
                                        notf[date] &&
                                        notf &&
                                        notf[date].map((notf, index) => (
                                            <div
                                                style={{
                                                    textDecoration: 'none',
                                                    color: 'black'
                                                }}
                                                key={index}
                                            >
                                                <NotfBody
                                                    notf={notf && notf}
                                                    key={index}
                                                    setUnseenNotf={
                                                        setUnseenNotf
                                                    }
                                                    setSideBlogId={
                                                        setSideBlogId
                                                    }
                                                    setSideBlogName={
                                                        setSideBlogName
                                                    }
                                                    setShowSideBlog={
                                                        setShowSideBlog
                                                    }
                                                />
                                            </div>
                                        ))}
                                </>
                            );
                        })}
                </div>
                {!activity && (
                    <div className="see-everything-btn">
                        <Link to={`/blog/${userBlogName}/activity`}>
                            <button className="btn see-everything">
                                See Everything
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
