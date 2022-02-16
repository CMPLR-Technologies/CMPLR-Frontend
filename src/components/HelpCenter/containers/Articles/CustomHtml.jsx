/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function CustomHtml() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Custom HTML" className="article-title">
                    Custom HTML
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            <strong>
                                <span className="wysiwyg-font-size-large">
                                    Editing your&nbsp;custom HTML
                                </span>
                            </strong>
                        </p>
                        <p>To edit your blog theme's HTML:&nbsp;</p>
                        <ol>
                            <li>
                                Click "Settings" under the account menu at the
                                top of the dashboard.
                            </li>
                            <li>
                                Choose the blog you’d like to update on the
                                right side of the page, then click “Edit theme”
                                in the Website Theme section.
                            </li>
                            <li>
                                Click the Edit HTML button and edit the custom
                                HTML as desired in the source code editor. To
                                see the changes reflected on the page, click
                                “Update Preview.”
                            </li>
                            <li>
                                When you're finished, click the back arrow and
                                then click "Save."
                            </li>
                        </ol>
                        <p>
                            We’ve also got a brilliant guide to making custom
                            CMPlr themes&nbsp;
                            <a
                                href="https://www.tumblr.com/docs/en/custom_themes"
                                target="_self"
                            >
                                right here
                            </a>
                            .
                        </p>
                        <p>
                            Pro tip: You can&nbsp;revert to an earlier version
                            of your theme's custom HTML (you know, if you’re
                            feeling nostalgic about an old version). We store
                            recent versions of your Custom HTML on our&nbsp;
                            <a href="https://www.tumblr.com/themes/recover">
                                Theme Recovery
                            </a>
                            &nbsp;page. If you don’t see the version you want,
                            it might be too many revisions back. This means it’s
                            gone forever.
                        </p>
                        <p>
                            <strong>
                                <span className="wysiwyg-font-size-large">
                                    Troubleshooting
                                </span>
                            </strong>
                        </p>
                        <p>
                            If your blog looks a little wrecked or is totally
                            blank, it’s possible that you’ve inserted incorrect
                            code into your theme or blog description. Try the
                            following:
                        </p>
                        <ul>
                            <li>
                                Remove all code from the description box at the
                                top of your Customize menu. Click "Save," then
                                view your blog to see if the problem is
                                resolved.
                            </li>
                            <li>
                                Save a copy of your custom HTML, then re-install
                                the theme from&nbsp;
                                <a
                                    style={{ backgroundColor: '#ffffff' }}
                                    href="https://www.tumblr.com/themes"
                                >
                                    www.tumblr.com/themes
                                </a>
                                .
                            </li>
                        </ul>
                        <p>Tips:</p>
                        <ul>
                            <li>
                                Clear your browser cache between changes to make
                                sure you're seeing a current version of your
                                blog. The easiest way is to hit Cmd+Shift+R on a
                                Mac or Ctrl+Shift+R on Windows, which will
                                completely refresh the page.
                            </li>
                            <li>
                                If you can't view the Customize button on your
                                blog, you can still access the Customize menu in
                                several&nbsp;
                                <a href="https://tumblr.zendesk.com/hc/en-us/articles/230775027-Customize-menu">
                                    other ways
                                </a>
                                .
                            </li>
                            <li>
                                We won’t be able to help you figure out broken
                                code in any real detail, but whatever your
                                problem is, someone else has probably had it
                                before. Don’t hesitate to search the internet or
                                consult a savvy friend.
                            </li>
                            <li>
                                Never use any code from a source you don’t know
                                and trust. Better yet, never use any code that
                                you don't fully understand. Bad code can break
                                your whole blog or force you to reset your
                                password if our system detects something really
                                insecure.
                            </li>
                        </ul>
                        <p>
                            Our staff&nbsp;can’t help with HTML/CSS
                            customizations, but if you need help you can ask a
                            friend or brush up your skills. And if that fails,
                            you can always use one of the other zillions of
                            themes at&nbsp;
                            <a href="https://www.tumblr.com/themes">
                                www.tumblr.com/themes
                            </a>
                            .
                        </p>
                        <p>
                            <strong>
                                <span className="wysiwyg-font-size-large">
                                    Learn more
                                </span>
                            </strong>
                        </p>
                        <p>
                            To learn more about HTML, CSS, and CMPlr themes,
                            check out the resources at&nbsp;
                            <a href="http://www.codecademy.com/">
                                www.codecademy.com
                            </a>
                            &nbsp;and&nbsp;
                            <a href="https://developer.mozilla.org/en-US/learn">
                                www.developer.mozilla.org/en-US/learn
                            </a>
                            .&nbsp;
                        </p>
                        <p>&nbsp;</p>
                    </div>
                    <div className="article-attachments">
                        <ul className="attachments"></ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
