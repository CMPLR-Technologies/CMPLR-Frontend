/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function GoogleAnalytics() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Google Analytics" className="article-title">
                    Google Analytics
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            While the Tumblr Activity page is great for checking
                            out your notes, we can’t really measure the activity
                            on your blog page itself. That’s where Google
                            Analytics comes in. It’s the best way to track stuff
                            like:
                        </p>
                        <ul>
                            <li>Number of blog visitors</li>
                            <li>Visitor frequency</li>
                            <li>Your most popular posts</li>
                            <li>Search terms people used to find you</li>
                            <li>Where your visitors are coming from</li>
                            <li>Your blog’s height and weight</li>
                            <li>And loads more.</li>
                        </ul>
                        <p>
                            To&nbsp;set up a Google Analytics account, go{' '}
                            <a href="https://support.google.com/analytics/answer/1008015?hl=en&ref_topic=3544906">
                                here
                            </a>
                            . Once that's done, you'll need to add the ID to
                            your blog's theme.&nbsp;Many themes allow you to
                            paste a Google Analytics ID in the Appearance
                            section of the Customize menu. Learn how to find
                            your Google Analytics ID{' '}
                            <a href="https://support.google.com/analytics/answer/1032385?hl=en">
                                here
                            </a>
                            .
                        </p>
                        <p>
                            If your theme doesn’t have such a field, follow the
                            instructions below.
                        </p>
                        <ul>
                            <li>
                                Copy your Google Analytics tracking code to your
                                computer’s clipboard.
                            </li>
                            <li>Open your Dashboard in a new window.</li>
                            <li>
                                Access the Customize menu for the blog you’d
                                like to track.
                            </li>
                            <li>
                                Click “Edit HTML” and paste the code just before
                                &lt;/head&gt;.
                            </li>
                            <li>Click "Save."</li>
                        </ul>
                        <p>
                            Note that if your Google Analytics status&nbsp;reads
                            “Tracking code not verified,” this means Google’s
                            system has not processed your data yet. If you
                            continue having trouble, visit the{' '}
                            <a href="https://developers.google.com/analytics/resources/articles/gaTrackingTroubleshooting">
                                Google Analytics help page
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
