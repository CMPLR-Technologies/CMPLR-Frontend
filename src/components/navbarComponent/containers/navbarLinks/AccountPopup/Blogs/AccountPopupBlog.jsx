import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../../../contexts/themeContext/ThemeContext';
import { NavLink } from 'react-router-dom';

/**
 * @function AccountPopupBlogsContainer
 * @description in between seperator in the Account Popup Container
 * @property {string} avatar
 * @property {string} url
 * @property {string} title
 * @property {number} posts
 * @property {number} followers
 * @property {number} drafts
 * @property {number} queue
 * @property {bool} primary
 * @property {array} rows
 * @property {bool} expanded - storing state of expansion of blog links (posts, followers ...)
 * @property {function} setExpanded - expanded setter
 * @returns {Component}
 */

export default function AccountPopupBlog(props) {
    const { avatar, url, title, posts, followers, drafts, queue, primary } =
        props.blog;

    const [expanded, setExpanded] = useState(primary);
    const theme = useContext(ThemeContext)[0];
    const rows = [
        {
            title: 'Posts',
            link: `/blog/${url}`,
            count: posts ? posts.length : 0
        },
        {
            title: 'Followers',
            link: `/blog/${url}/followers`,
            count: followers ? followers.length : 0
        },
        {
            title: 'Activity',
            link: `/blog/${url}/activity`,
            count: 0
        },
        {
            title: 'Drafts',
            link: `/blog/${url}/drafts`,
            count: drafts ? drafts.length : 0
        },
        {
            title: 'Queue',
            link: `/blog/${url}/queue`,
            count: queue ? queue.length : 0
        },
        {
            title: 'Edit Appearence',
            link: `/settings/blog/${url}`,
            count: 0
        }
    ];

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const css = `
        .account-popup-blog *{
            color: rgba(${themes[theme].black},.65);
        }
        .account-popup-blog-head-text h1{
            color: rgb(${themes[theme].black});
        }
        .account-popup-blog-head:hover, .account-popup-blog-link-row:hover{
            background-color: rgb(${themes[theme].secondaryAccent});

        }
    `;

    return (
        <div data-testid="AccountPopupBlog" className="account-popup-blog">
            <div className="account-popup-blog-head">
                <NavLink
                    to={`/blog/${url}`}
                    className="account-popup-blog-head-img"
                >
                    <img src={`${avatar}`} alt="ava" />
                </NavLink>
                <NavLink
                    to={`/blog/${url}`}
                    className="account-popup-blog-head-text"
                >
                    <h1>{url}</h1>
                    <div>{title === '' ? 'untitled' : title}</div>
                </NavLink>
                <div
                    className="account-popup-blog-head-button"
                    onClick={() => toggleExpanded()}
                >
                    <svg
                        width="20"
                        height="20"
                        fill={`rgb(${themes[theme].black},.65)`}
                    >
                        <path d="M15 8.015v1.984h6V8.015h-6zm-1.004 5.976H21v-2.014h-7.004v2.014zm2.003 3.982h4.998V15.99H16v1.984zm-6.966-5.93c2.238 0 4.06-1.563 4.06-3.867C13.093 5.875 11.271 4 9.033 4 6.793 4 4.97 5.875 4.97 8.176c.003 2.307 1.825 3.867 4.063 3.867zm-.036 1.93C5.635 13.972 3 16.33 3 19.978 3 20.54 3.43 21 3.96 21h10.077c.528 0 .958-.457.958-1.02 0-3.649-2.635-6.008-5.998-6.008z" />
                    </svg>
                </div>
            </div>

            {expanded && (
                <div className="account-popup-blog-links">
                    {rows.map((row, index) => (
                        <NavLink
                            key={index}
                            to={row.link}
                            className="account-popup-blog-link-row"
                        >
                            <div className="link-row-title">{row.title}</div>
                            <div className="link-row-count">
                                {row.count > 0 ? row.count : ' '}
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
            <style>{css}</style>
        </div>
    );
}
AccountPopupBlog.propTypes = {
    blog: PropTypes.object.isRequired
};
