import React from 'react';
export default function PagesList() {
    return (
        <div className="container2">
            <div className="wrapper">
                <ul className="list">
                    <li className="list-item">
                        <a
                            className="list-item-anchor"
                            href="/settings/account"
                        >
                            <span>Account</span>
                            <small className="list-item-anchor-small">
                                The essentials
                            </small>
                        </a>
                    </li>
                    <li className="list-item">
                        <a
                            className="list-item-anchor"
                            href="/settings/account"
                        >
                            <span>Dashboard</span>
                            <small className="list-item-anchor-small">
                                Appearance options, text editor
                            </small>
                        </a>
                    </li>
                    <li className="list-item">
                        <a
                            className="list-item-anchor"
                            href="/settings/account"
                        >
                            <span>Apps</span>
                            <small className="list-item-anchor-small">
                                Things you've connected
                            </small>
                        </a>
                    </li>
                    <li className="list-item">
                        <a
                            className="list-item-anchor"
                            href="/settings/account"
                        >
                            <span>Privacy</span>
                            <small className="list-item-anchor-small">
                                Personalization and data management
                            </small>
                        </a>
                    </li>
                </ul>
                <div className="blog">
                    <h1 className="blog-h1">Blog</h1>
                    <ul className="list">
                        <li className="list-item blog-item">
                            <div className="temp">
                                <a
                                    className="blog-item-anchor"
                                    href="/settings/blog/hazemabdo22"
                                >
                                    <div className="icon-text">
                                        <div className="icon">
                                            <img
                                                class="nLowv"
                                                srcset="https://assets.tumblr.com/images/default_avatar/cube_open_64.png 64w, https://assets.tumblr.com/images/default_avatar/cube_open_96.png 96w, https://assets.tumblr.com/images/default_avatar/cube_open_128.png 128w, https://assets.tumblr.com/images/default_avatar/cube_open_512.png 512w"
                                                sizes="37px"
                                                alt="Avatar"
                                                style={{
                                                    width: '37px',
                                                    height: '37px'
                                                }}
                                                loading="eager"
                                            />
                                        </div>
                                        <div className="text">
                                            <div className="text-up">
                                                <span className="text-up-span">
                                                    Hazem Abdo
                                                </span>
                                            </div>
                                            <div className="text-down">
                                                Untitiled
                                            </div>
                                        </div>
                                    </div>
                                    <div className="star">
                                        <svg
                                            viewBox="0 0 12 12"
                                            width="12"
                                            height="12"
                                            fill="white"
                                            className="star-svg"
                                        >
                                            <path d="M2.3 11.4L6 0l3.7 11.4L0 4.3h12"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
