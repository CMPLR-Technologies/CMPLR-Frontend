/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function TopPosts() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Top Posts" className="article-title">
                    Top Posts
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                This feature gives you a glimpse of a Tumblr’s
                                best recent posts. On your own blog, it
                                showcases your most popular posts.{' '}
                            </span>
                        </p>
                        <p>
                            <strong>Who can see my Top Posts?</strong>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                Anyone on Tumblr can see your top posts when
                                they view your blog (unless you’ve{' '}
                            </span>
                            <a href="https://tumblr.zendesk.com/hc/en-us/articles/115011611747-Privacy-options">
                                <span style={{ fontWeight: 400 }}>
                                    hidden your blog
                                </span>
                            </a>
                            <span style={{ fontWeight: 400 }}>
                                , in which case no one can see it at all).
                            </span>
                        </p>
                        <p>
                            <strong>Can I select my own Top Posts?</strong>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                We do all the work for you in selecting these
                                posts. Your top posts can’t be selected or
                                removed manually. Of course, if you delete a
                                post, it will no longer show up in your top
                                posts.
                            </span>
                        </p>
                        <p>
                            <strong>
                                I don’t see top posts on my blog. How can I get
                                them?
                            </strong>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                Post more! You'll need to have enough posts with
                                at least one note in the past two months for us
                                to pick out the popular ones. And make sure you{' '}
                            </span>
                            <a href="https://tumblr.zendesk.com/hc/en-us/articles/226161387-Tagging-your-posts">
                                <span style={{ fontWeight: 400 }}>
                                    tag your posts
                                </span>
                            </a>
                            <span style={{ fontWeight: 400 }}>
                                ! Tags help boost the exposure of your posts so
                                they’ll get more notes.
                            </span>
                        </p>
                        <p>
                            <strong>
                                I mostly reblog posts instead of creating
                                originals. Will they show up here?
                            </strong>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                They sure will. Note that reblogged posts are
                                selected for top post status based on the notes{' '}
                            </span>
                            <em>
                                <span style={{ fontWeight: 400 }}>
                                    your reblog
                                </span>
                            </em>
                            <span style={{ fontWeight: 400 }}>
                                {' '}
                                receives--not the notes on the original post!
                            </span>
                        </p>
                        <p>
                            <strong>
                                I don’t particularly like the top posts on my
                                Tumblr. How do I get rid of them?
                            </strong>
                        </p>
                        <p>
                            <span style={{ fontWeight: 400 }}>
                                If you’d really prefer to not have top posts
                                displayed on your blog, you can turn them off.
                            </span>
                            <span style={{ fontWeight: 400 }}>
                                {' '}
                                Just tap the account icon (the little human),
                                tap the gear wheel icon, and then toggle off
                                ‘Show top posts.’
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
