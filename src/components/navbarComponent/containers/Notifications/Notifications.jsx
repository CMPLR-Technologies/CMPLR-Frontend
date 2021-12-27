import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotfBody from './NotfBody';
import NotfHeader from './NotfHeader';

export default function Notifications(props) {
    const { userBlogName, userAvatar, notfArray, setNotfArray } = props;
    const [notfDates, setNotfDates] = useState(
        notfArray ? Object.keys(notfArray) : []
    );
    const [notf, setNotf] = useState(notfArray);
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
                        <div className="notf-body-cont">
                            {notf[date] &&
                                notf[date].map((notf, index) => (
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to={`/blog/view/${
                                            notf['from_blog_name']
                                        }/${
                                            notf['post_ask_answer_id']
                                                ? notf['post_ask_answer_id']
                                                : ''
                                        }`}
                                        key={index}
                                    >
                                        <NotfBody notf={notf} key={index} />
                                    </Link>
                                ))}
                        </div>
                    </>
                );
            })}
            <div className="see-everything-btn">
                <Link to={`/blog/${userBlogName}/activity`}>
                    <button className="btn see-everything">
                        See Everything
                    </button>
                </Link>
            </div>
        </div>
    );
}
