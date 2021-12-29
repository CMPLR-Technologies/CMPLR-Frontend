import React from 'react';

export default function ThemeBasics() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Theme basics" className="article-title">
                    Theme basics
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            Your theme is how your blog looks at its web address
                            on a regular computer (see ours at&nbsp;
                            <a
                                title="staff.tumblr.com"
                                href="http://staff.tumblr.com/"
                            >
                                staff.tumblr.com
                            </a>
                            ).&nbsp;You can choose from tons of themes at{' '}
                            <a href="http://tumblr.com/themes">
                                tumblr.com/themes
                            </a>
                            ,&nbsp;and you can always edit your theme&nbsp;from{' '}
                            <a href="https://tumblr.zendesk.com/hc/en-us/articles/230775027-Customize-menu">
                                the Customize menu
                            </a>
                            .
                        </p>
                        <p>
                            You can check out any blog’s theme (including your
                            own) by visiting its URL directly, or by clicking on
                            that blog in the dashboard, then clicking the
                            username at the top of the panel that slides out.
                        </p>
                        <p>
                            If you want to edit the HTML of your theme, use the
                            editor in the{' '}
                            <a href="https://tumblr.zendesk.com/hc/en-us/articles/230775027-Customize-menu">
                                Customize menu
                            </a>
                            &nbsp;of your blog. The Description box is also
                            HTML-enabled, if you just need a place to put small
                            snippets of code.
                        </p>
                        <p>
                            If you want to know all the particulars of Tumblr’s
                            theme code, have a look at our&nbsp;
                            <a href="https://www.tumblr.com/docs/en/custom_themes">
                                guide
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
