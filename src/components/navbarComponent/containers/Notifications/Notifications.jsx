import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotfBody from './NotfBody';
import NotfHeader from './NotfHeader';
import propTypes from 'prop-types';
import TimeAgo from 'timeago-react';

Notifications.propTypes = {
    userBlogName: propTypes.string,
    userAvatar: propTypes.string,
    notfArray: propTypes.object,
    setNotfArray: propTypes.func,
    activity: propTypes.bool,
    setUnseenNotf: propTypes.func,
    setSideBlogId: propTypes.func,
    setSideBlogName: propTypes.func,
    setShowSideBlog: propTypes.func
};
export default function Notifications(props) {
    const {
        userBlogName,
        userAvatar,
        notfArray,
        setNotfArray,
        activity,
        setUnseenNotf,
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
            <div
                data-testid="notifications-dropdown-ts"
                className={!activity ? `notifications-container` : ''}
            >
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
                                        <div
                                            className="notf-date"
                                            data-testid="notf-date"
                                        >
                                            <div
                                                className="duration"
                                                data-test-id="notf-date-duration"
                                            >
                                                <TimeAgo datetime={date} />
                                            </div>{' '}
                                            <div
                                                className="date"
                                                data-test-id="notf-date-date"
                                            >
                                                {date}
                                            </div>
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
                                                data-test-id="notf-body"
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
                                                    activity={true}
                                                />
                                            </div>
                                        ))}
                                </>
                            );
                        })}
                </div>
                {!activity && (
                    <div
                        className="see-everything-btn"
                        data-test-id="see-everything"
                    >
                        <Link to={`/blog/${userBlogName}/activity`}>
                            <button
                                className="btn see-everything"
                                data-test-id="see-everything-btn"
                            >
                                See Everything
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
