/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function BlogPages() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Blog Pages" className="article-title">
                    Blog Pages
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            <br />
                            On the web, your blog's pages are static web pages
                            that are accessible on your blog, but won’t show up
                            on the dashboard. They may be useful for things like
                            your bio, contact information, or master lists. You
                            can also use them to redirect to other websites, or
                            create a link to your posts with a specific tag.
                        </p>
                        <p>
                            In our apps, the pages that you can enable are
                            limited to your <strong>Likes</strong> and{' '}
                            <strong>Following</strong> pages. To create more
                            complex pages (as described in the Types of Pages
                            section), please use a web browser.
                        </p>
                        <div className="tips">
                            <p>
                                <strong>
                                    Looking for a workaround to link your pages
                                    in the apps?
                                </strong>{' '}
                                You can create an HTML link in your blog's
                                description, linking it to your page. For
                                example:{' '}
                                <code style={{ color: '#000' }}>
                                    &lt;a href="/pageurl"&gt;My Page!&lt;/a&gt;
                                </code>{' '}
                                (replacing “pageurl” with the URL you set for
                                your page).
                            </p>
                        </div>
                        <h3 id="types-of-pages">Types of Pages</h3>
                        <p>You have a few options to create your pages:</p>
                        <ul>
                            <li>
                                <strong>Standard Layout</strong> pages will
                                respect your blog's theme, and will be displayed
                                based on your existing styles.
                            </li>
                            <li>
                                <strong>Custom Layout</strong> pages allow you
                                to customize the code to be specifically used on
                                that page. Since these pages will not use your
                                theme's existing resources, you will need to
                                write the HTML, CSS, and JS to be used on that
                                page.
                            </li>
                            <li>
                                <strong>Link</strong> pages will redirect the
                                visitor to another URL. You could link visitors
                                to your profile on external sites like Twitter
                                or Facebook, or all your posts with a specific
                                tag (learn how on our page about{' '}
                                <a href="https://tumblr.zendesk.com/hc/articles/226256868-Organizing-with-tags">
                                    Organizing With Tags
                                </a>
                                ).
                            </li>
                        </ul>
                        <div className="callout">
                            <p>
                                Pages are static and completely separate from
                                your blog posts. You can't post or reblog to
                                your pages.
                            </p>
                        </div>
                        <h3 id="creating-pages">Creating Pages</h3>
                        <p>
                            Start by going to your blog's Customize page: click
                            the palette icon at the top right corner of the web
                            view of your blog (yourblog.tumblr.com). You can
                            also go to the Customize page from the account menu
                            account icon ({' '}
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4403863119639/snowman.png"
                                alt="snowman.png"
                                width={12}
                                height={15}
                            />{' '}
                            ) at the top of the dashboard: click the gear icon
                            to visit your settings, choose your blog from the
                            menu on the right, then click “Edit Theme.”
                            <br />
                            Once you're on your blog's customize page:
                        </p>
                        <ul>
                            <ol>
                                <li>
                                    Click “Add a Page” located in the "Edit
                                    theme" sidebar at the left side of the
                                    screen.
                                </li>
                                <li>
                                    Choose a page layout (Standard Layout,
                                    Custom Layout, or Link).
                                </li>
                                <li>
                                    Type a page URL in the field after{' '}
                                    <code>yourblog.tumblr.com/</code>. For
                                    example, a master list page could be
                                    /masterlist and a bio page could be /bio.
                                </li>
                                <li>Add a title in the "Page Title" field.</li>
                                <li>Enable "Show a link to this page."</li>
                                <li>Click “Save.”</li>
                            </ol>
                        </ul>
                        <div className="callout">
                            <p>
                                To prevent spam and other types of abuse, link
                                pages are unavailable for new accounts. They
                                will become available once your account has been
                                vetted.
                            </p>
                        </div>
                        <h3 id="troubleshooting-pages">
                            Troubleshooting Pages
                        </h3>
                        <p>
                            There are a few things to consider when
                            troubleshooting pages:
                        </p>
                        <ul>
                            <li>
                                If your link page isn't working, make sure
                                you’ve included <code>https://</code> at the
                                beginning of the URL in the page edit box.
                            </li>
                            <li>
                                If your blog doesn't show page links, a few
                                things could be happening:
                            </li>
                            <ul>
                                <li>
                                    You are using a theme that doesn't support
                                    pages.
                                </li>
                                <li>
                                    You are using custom HTML that doesn’t
                                    support pages.
                                </li>
                                <li>
                                    You did not select "Show a link to this
                                    page" when creating your page.
                                </li>
                            </ul>
                            <li>
                                If your custom theme is not showing links to
                                your pages (and you have checked your{' '}
                                <a href="https://www.tumblr.com/customize">
                                    theme's settings
                                </a>
                                ), check our custom themes documentation{' '}
                                <a href="https://www.tumblr.com/docs/en/custom_themes#pages">
                                    about pages blocks
                                </a>{' '}
                                (developer level).
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
