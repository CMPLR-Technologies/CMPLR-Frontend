import React from 'react';

export default function PinnedPosts() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Pinned posts" className="article-title">
                    Pinned posts
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                You can highlight any post on your blog–original
                                or reblog–by pinning it to the top of your
                                Tumblr.
                            </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                Just tap or click the meatballs menu (
                                <span className="wysiwyg-font-size-small">
                                    ●●●
                                </span>
                                ) on the upper right-hand corner of any of your
                                posts, and choose “Pin.”
                            </span>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                Changed your mind? Head to the meatballs again
                                to remove the pin. You can also choose a
                                different post to pin. Note that you can only
                                pin one post at a time, so pinning a new post
                                will replace whatever is currently pinned.
                            </span>
                        </p>
                    </div>
                    <div className="article-attachments">
                        <ul className="attachments"></ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
