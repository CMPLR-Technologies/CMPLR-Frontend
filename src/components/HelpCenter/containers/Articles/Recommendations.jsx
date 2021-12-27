/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Recommendations() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Recommendations" className="article-title">
                    Recommendations
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            Recommendations include posts, blogs, tags, and
                            group chats that Tumblr thinks you might like.
                        </p>
                        <h2>Recommendation Reasons in the Mobile Apps</h2>
                        <p>
                            In our mobile apps, some recommendations will appear
                            with reasons that explain why you're seeing them:
                        </p>
                        <ul>
                            <li>
                                <strong>In your orbit</strong> means that some
                                blogs you follow also follow the recommended
                                Tumblr.
                            </li>
                            <li>
                                <strong>Like [insert username here]</strong>{' '}
                                means the recommended Tumblr is similar to
                                another you already follow, or is related to a
                                blog you recently followed.
                            </li>
                            <li>
                                <strong>You seem interested</strong> means
                                you’ve liked a few posts from this Tumblr before
                                but you're not following them yet.
                            </li>
                            <li>
                                <strong>Big in [insert tag here]</strong> means
                                you like a lot of stuff with that tag, and the
                                recommended Tumblr posts a lot of stuff with
                                that tag.
                            </li>
                        </ul>
                        <h2>Managing Your Recommendations</h2>
                        <p>
                            There's no way to turn off recommendations entirely.
                            However, you can make individual recommendations
                            disappear forever by clicking or tapping the post
                            meatballs at the top of the recommendation. After
                            you dismiss the recommendation, we'll never
                            recommend that post or blog to you again.
                        </p>
                        <h3>Tips</h3>
                        <ul>
                            <li>
                                If you’re just starting out on Tumblr, try
                                following some more blogs to reduce the overall
                                amount of recommendations you’re seeing.
                            </li>
                            <li>
                                Sometimes folks mistake results from their{' '}
                                <a
                                    href="/hc/en-us/articles/226259728"
                                    target="_self"
                                    rel="undefined"
                                >
                                    followed tags
                                </a>{' '}
                                as recommendations. You can identify a followed
                                tag injected post by the highlighted tag and
                                accompanying magnifying glass icon on the post.
                                If you want to stop seeing results from your
                                followed tags in the dashboard, you can turn off
                                "Include posts from your followed tags" from
                                your dashboard preferences. More information can
                                be found{' '}
                                <a
                                    href="/hc/en-us/articles/115013590547"
                                    target="_self"
                                >
                                    here
                                </a>
                                .
                            </li>
                            <li>
                                You can opt out of “In your orbit”
                                recommendations. You can read about managing
                                your dashboard preferences{' '}
                                <a
                                    href="/hc/en-us/articles/115013590547"
                                    target="_self"
                                >
                                    here
                                </a>
                                .
                            </li>
                            <li>
                                For better, more relevant recommendations,
                                toggle on “Improved Search” in{' '}
                                <a
                                    href="https://www.tumblr.com/settings/privacy"
                                    target="_self"
                                >
                                    your settings
                                </a>{' '}
                                on web.
                            </li>
                        </ul>
                        <p>
                            If you see something that doesn’t belong on Tumblr,
                            please report it. You can learn how to report
                            content{' '}
                            <a
                                href="/hc/en-us/articles/226270628"
                                target="_self"
                            >
                                here
                            </a>
                            .
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
