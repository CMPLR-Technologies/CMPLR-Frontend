/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function ConnectingToTwitter() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Connecting to Twitter" className="article-title">
                    Connecting to Twitter
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            <strong>
                                <span className="wysiwyg-font-size-large">
                                    Connecting your Twitter and Tumblr accounts
                                </span>
                            </strong>
                        </p>
                        <p>In the app:</p>
                        <ol>
                            <li>Tap the account tab.</li>
                            <li>Tap the gear icon.</li>
                            <li>
                                Choose "Linked accounts" and follow the
                                directions.
                            </li>
                        </ol>
                        <p>On the web:</p>
                        <ol>
                            <li>
                                Click "Settings" under the account menu at the
                                top of the dashboard.
                            </li>
                            <li>
                                Click the blog you want to connect to your
                                Twitter feed on the right side of the page.
                            </li>
                            <li>
                                In the Twitter section, click the Share on
                                Twitter button.
                            </li>
                            <li>
                                Click “Sign in with Twitter,” then enter your
                                Twitter credentials and “Authorize app.”
                            </li>
                        </ol>
                        <p>
                            <strong>
                                <span className="wysiwyg-font-size-large">
                                    Pro tips
                                </span>
                            </strong>
                        </p>
                        <ul>
                            <li>
                                To&nbsp;toggle tweeting on and off per post,
                                click or tap the blue Twitter bird on the post
                                form. Blue bird = on. Gray bird = off.
                            </li>
                            <li>
                                To edit your tweet just before publishing your
                                post (on the web only), click on the Twitter
                                icon to open the text field, customize your
                                tweet, then click “Done.”
                            </li>
                            <li>
                                To show recent Tweets on your
                                blog,&nbsp;first&nbsp;make sure your Twitter and
                                Tumblr accounts are connected by following the
                                instructions above.&nbsp;Next, you’ll need to
                                install a theme that supports the Twitter
                                widget. Finally, configure your theme settings
                                at&nbsp;
                                <a href="http://www.tumblr.com/customize">
                                    www.tumblr.com/customize
                                </a>
                                . There should be a Twitter section under
                                Appearance Options where you can turn the widget
                                on or off.
                            </li>
                        </ul>
                        <p>Troubleshooting</p>
                        <ul>
                            <li>
                                If you're having trouble connecting to Twitter,
                                go to&nbsp;
                                <a href="https://twitter.com/settings/applications">
                                    https://twitter.com/settings/applications
                                </a>
                                &nbsp;and click “Revoke access” next to Tumblr,
                                then complete the&nbsp;
                                <a href="https://www.tumblr.com/docs/en/blog_management#twitterconnect">
                                    connection
                                </a>
                                &nbsp;steps above. If that doesn’t help, make
                                sure you’ve enabled pop-ups on your browser.
                            </li>
                            <li>
                                If your posts aren't showing up in your Twitter
                                feed, assuming your accounts are connected
                                correctly (as described above), tweeting could
                                be delayed due to Twitter network issues. Also,
                                make sure the Twitter icon in the post form is
                                blue before you publish. (If it’s gray, that
                                means you’ve turned off tweeting for that
                                specific post.)
                            </li>
                            <li>
                                We can't control how Tumblr content looks on
                                Twitter.&nbsp;A Tweet of a photo post, for
                                example, may or may not have an image preview
                                attached, and who even knows how they’ll handle
                                a chat post.
                            </li>
                        </ul>
                    </div>
                    <div className="article-attachments">
                        <ul className="attachments"></ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
