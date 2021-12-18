import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ReblogReact from '../../../partials/postComponent/containers/Notes/ReblogReact.svg';

export default function Notifications() {
    return (
        <div className="notifications-container">
            <div className="header">
                <div className="control-left">
                    <div>
                        <div>
                            <div className="header-flex-cont">
                                <img
                                    data-testid="avatar-img-ts"
                                    src="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                                    className="avatar-img-mob"
                                />
                                <button className="btn-control">
                                    <span className="caption">hazemkak</span>
                                    <span className="icon_arrow_carrot_down">
                                        <RiArrowDropDownLine
                                            style={{
                                                fill: 'black'
                                            }}
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notf-body">
                <div className="notf-date">
                    <div className="duration">2 days ago</div>
                    <div className="date">Friday, 17-Dec-21</div>
                </div>
                <div className="relative">
                    <div className="notes-summary-avatars-react">
                        <div className="noter-avatar">
                            <img
                                className="noter-avatar-img"
                                src="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                                sizes="24px"
                                alt="Avatar"
                                loading="eager"
                                data-testid={`noter-avatar-img-ts`}
                            />
                        </div>
                        <div
                            data-testid={`avatar-react-ts`}
                            className="avatar-react"
                        >
                            <ReblogReact />
                        </div>
                    </div>
                    <div className="notf-content">
                        <strong>kholdbold</strong>{' '}
                        {`replied to your post "kaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aa a aaaaaaaaaaaaaaaaaaaaaa aa aa a a aa a aaaaaaaa aaaaaak"`}
                    </div>
                    <div className="type">
                        <Link className="post-link" to="*">
                            <svg
                                viewBox="0 0 18.7 17"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M16 6.1V2.6C16 .8 15 0 13.1 0H2.9C1 0 0 1.1 0 3.3v10.4C0 15.9 1 17 2.9 17h10.2c1.9 0 2.9-.8 2.9-2.6v-2.9l2.7-2.9c0-.1-2.7-2.5-2.7-2.5zm-4.5-.7c0-.5.3-.8.7-.8s.8.3.8.8v1.7l-.3 2.5c0 .3-.2.4-.4.4s-.4-.1-.4-.4l-.3-2.5V5.4zm-3.8 6.4c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V9.1C6.3 8.4 6 8 5.4 8c-.5 0-1 .4-1 1.2v2.6c0 .4-.1.8-.7.8s-.7-.4-.7-.8V5.4c0-.5.3-.8.7-.8.4 0 .7.3.7.8v2.1c.3-.4.7-.8 1.5-.8s1.7.5 1.7 2c.1.1.1 3.1.1 3.1zm2.5 0c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V7.5c0-.4.1-.8.7-.8.5 0 .7.4.7.8v4.3zm-.7-5.6c-.4 0-.7-.4-.7-.8s.3-.8.7-.8c.4 0 .7.4.7.8s-.3.8-.7.8zm2.8 6.3c-.4 0-.8-.4-.8-.9s.3-.9.8-.9.8.4.8.9-.4.9-.8.9z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="notf-body">
                <div className="notf-date">
                    <div className="duration">2 days ago</div>
                    <div className="date">Friday, 17-Dec-21</div>
                </div>
                <div className="relative">
                    <div className="notes-summary-avatars-react">
                        <div className="noter-avatar">
                            <img
                                className="noter-avatar-img"
                                src="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                                sizes="24px"
                                alt="Avatar"
                                loading="eager"
                                data-testid={`noter-avatar-img-ts`}
                            />
                        </div>
                        <div
                            data-testid={`avatar-react-ts`}
                            className="avatar-react"
                        >
                            <ReblogReact />
                        </div>
                    </div>
                    <div className="notf-content">
                        <strong>kholdbold</strong>{' '}
                        {`replied to your post "kaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aa a aaaaaaaaaaaaaaaaaaaaaa aa aa a a aa a aaaaaaaa aaaaaak"`}
                    </div>
                    <div className="type">
                        <Link className="post-link" to="*">
                            <svg
                                viewBox="0 0 18.7 17"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M16 6.1V2.6C16 .8 15 0 13.1 0H2.9C1 0 0 1.1 0 3.3v10.4C0 15.9 1 17 2.9 17h10.2c1.9 0 2.9-.8 2.9-2.6v-2.9l2.7-2.9c0-.1-2.7-2.5-2.7-2.5zm-4.5-.7c0-.5.3-.8.7-.8s.8.3.8.8v1.7l-.3 2.5c0 .3-.2.4-.4.4s-.4-.1-.4-.4l-.3-2.5V5.4zm-3.8 6.4c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V9.1C6.3 8.4 6 8 5.4 8c-.5 0-1 .4-1 1.2v2.6c0 .4-.1.8-.7.8s-.7-.4-.7-.8V5.4c0-.5.3-.8.7-.8.4 0 .7.3.7.8v2.1c.3-.4.7-.8 1.5-.8s1.7.5 1.7 2c.1.1.1 3.1.1 3.1zm2.5 0c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V7.5c0-.4.1-.8.7-.8.5 0 .7.4.7.8v4.3zm-.7-5.6c-.4 0-.7-.4-.7-.8s.3-.8.7-.8c.4 0 .7.4.7.8s-.3.8-.7.8zm2.8 6.3c-.4 0-.8-.4-.8-.9s.3-.9.8-.9.8.4.8.9-.4.9-.8.9z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="notes-summary-avatars-react">
                        <div className="noter-avatar">
                            <img
                                className="noter-avatar-img"
                                src="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                                sizes="24px"
                                alt="Avatar"
                                loading="eager"
                                data-testid={`noter-avatar-img-ts`}
                            />
                        </div>
                        <div
                            data-testid={`avatar-react-ts`}
                            className="avatar-react"
                        >
                            <ReblogReact />
                        </div>
                    </div>
                    <div className="notf-content">
                        <strong>kholdbold</strong>{' '}
                        {`replied to your post "kaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aa a aaaaaaaaaaaaaaaaaaaaaa aa aa a a aa a aaaaaaaa aaaaaak"`}
                    </div>
                    <div className="type">
                        <Link className="post-link" to="*">
                            <svg
                                viewBox="0 0 18.7 17"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M16 6.1V2.6C16 .8 15 0 13.1 0H2.9C1 0 0 1.1 0 3.3v10.4C0 15.9 1 17 2.9 17h10.2c1.9 0 2.9-.8 2.9-2.6v-2.9l2.7-2.9c0-.1-2.7-2.5-2.7-2.5zm-4.5-.7c0-.5.3-.8.7-.8s.8.3.8.8v1.7l-.3 2.5c0 .3-.2.4-.4.4s-.4-.1-.4-.4l-.3-2.5V5.4zm-3.8 6.4c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V9.1C6.3 8.4 6 8 5.4 8c-.5 0-1 .4-1 1.2v2.6c0 .4-.1.8-.7.8s-.7-.4-.7-.8V5.4c0-.5.3-.8.7-.8.4 0 .7.3.7.8v2.1c.3-.4.7-.8 1.5-.8s1.7.5 1.7 2c.1.1.1 3.1.1 3.1zm2.5 0c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V7.5c0-.4.1-.8.7-.8.5 0 .7.4.7.8v4.3zm-.7-5.6c-.4 0-.7-.4-.7-.8s.3-.8.7-.8c.4 0 .7.4.7.8s-.3.8-.7.8zm2.8 6.3c-.4 0-.8-.4-.8-.9s.3-.9.8-.9.8.4.8.9-.4.9-.8.9z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="notes-summary-avatars-react">
                        <div className="noter-avatar">
                            <img
                                className="noter-avatar-img"
                                src="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                                sizes="24px"
                                alt="Avatar"
                                loading="eager"
                                data-testid={`noter-avatar-img-ts`}
                            />
                        </div>
                        <div
                            data-testid={`avatar-react-ts`}
                            className="avatar-react"
                        >
                            <ReblogReact />
                        </div>
                    </div>
                    <div className="notf-content">
                        <strong>kholdbold</strong>{' '}
                        {`replied to your post "kaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aa a aaaaaaaaaaaaaaaaaaaaaa aa aa a a aa a aaaaaaaa aaaaaak"`}
                    </div>
                    <div className="type">
                        <Link className="post-link" to="*">
                            <svg
                                viewBox="0 0 18.7 17"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M16 6.1V2.6C16 .8 15 0 13.1 0H2.9C1 0 0 1.1 0 3.3v10.4C0 15.9 1 17 2.9 17h10.2c1.9 0 2.9-.8 2.9-2.6v-2.9l2.7-2.9c0-.1-2.7-2.5-2.7-2.5zm-4.5-.7c0-.5.3-.8.7-.8s.8.3.8.8v1.7l-.3 2.5c0 .3-.2.4-.4.4s-.4-.1-.4-.4l-.3-2.5V5.4zm-3.8 6.4c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V9.1C6.3 8.4 6 8 5.4 8c-.5 0-1 .4-1 1.2v2.6c0 .4-.1.8-.7.8s-.7-.4-.7-.8V5.4c0-.5.3-.8.7-.8.4 0 .7.3.7.8v2.1c.3-.4.7-.8 1.5-.8s1.7.5 1.7 2c.1.1.1 3.1.1 3.1zm2.5 0c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V7.5c0-.4.1-.8.7-.8.5 0 .7.4.7.8v4.3zm-.7-5.6c-.4 0-.7-.4-.7-.8s.3-.8.7-.8c.4 0 .7.4.7.8s-.3.8-.7.8zm2.8 6.3c-.4 0-.8-.4-.8-.9s.3-.9.8-.9.8.4.8.9-.4.9-.8.9z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="notes-summary-avatars-react">
                        <div className="noter-avatar">
                            <img
                                className="noter-avatar-img"
                                src="https://assets.tumblr.com/images/default_avatar/cone_closed_128.png"
                                sizes="24px"
                                alt="Avatar"
                                loading="eager"
                                data-testid={`noter-avatar-img-ts`}
                            />
                        </div>
                        <div
                            data-testid={`avatar-react-ts`}
                            className="avatar-react"
                        >
                            <ReblogReact />
                        </div>
                    </div>
                    <div className="notf-content">
                        <strong>kholdbold</strong>{' '}
                        {`replied to your post "kaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aa a aaaaaaaaaaaaaaaaaaaaaa aa aa a a aa a aaaaaaaa aaaaaak"`}
                    </div>
                    <div className="type">
                        <Link className="post-link" to="*">
                            <svg
                                viewBox="0 0 18.7 17"
                                width="20"
                                height="20"
                                fill="white"
                            >
                                <path d="M16 6.1V2.6C16 .8 15 0 13.1 0H2.9C1 0 0 1.1 0 3.3v10.4C0 15.9 1 17 2.9 17h10.2c1.9 0 2.9-.8 2.9-2.6v-2.9l2.7-2.9c0-.1-2.7-2.5-2.7-2.5zm-4.5-.7c0-.5.3-.8.7-.8s.8.3.8.8v1.7l-.3 2.5c0 .3-.2.4-.4.4s-.4-.1-.4-.4l-.3-2.5V5.4zm-3.8 6.4c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V9.1C6.3 8.4 6 8 5.4 8c-.5 0-1 .4-1 1.2v2.6c0 .4-.1.8-.7.8s-.7-.4-.7-.8V5.4c0-.5.3-.8.7-.8.4 0 .7.3.7.8v2.1c.3-.4.7-.8 1.5-.8s1.7.5 1.7 2c.1.1.1 3.1.1 3.1zm2.5 0c0 .4-.1.8-.7.8-.5 0-.7-.4-.7-.8V7.5c0-.4.1-.8.7-.8.5 0 .7.4.7.8v4.3zm-.7-5.6c-.4 0-.7-.4-.7-.8s.3-.8.7-.8c.4 0 .7.4.7.8s-.3.8-.7.8zm2.8 6.3c-.4 0-.8-.4-.8-.9s.3-.9.8-.9.8.4.8.9-.4.9-.8.9z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
