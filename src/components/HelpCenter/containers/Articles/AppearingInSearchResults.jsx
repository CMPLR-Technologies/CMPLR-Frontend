/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function AppearingInSearchResults() {
    return (
        <div>
            <section className="article-info">
                <h1
                    title="Appearing In Search Results"
                    className="article-title"
                >
                    Appearing In Search Results
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <h2>Troubleshooting Post and Blog Visibility</h2>
                        <p>
                            We keep our search results pretty untouched — any
                            filters we implement are related to spam and abuse
                            prevention.
                        </p>
                        <p>
                            If you are looking for a post you just published,
                            try checking Recent results. More often than not,
                            your post is appearing in Recent rather Most
                            Popular.
                        </p>
                        <p>
                            <em>
                                Posts don't appear on search results right
                                away—please note it takes a few minutes for our
                                systems to process each post.
                            </em>
                        </p>
                        <p>
                            However, there are some factors affecting what
                            appears in search results:
                        </p>
                        <ul>
                            <li>
                                Check the Visibility settings for your blog. If
                                "Hide [blogname] from search results" is
                                enabled, the blog will not appear in search
                                results.
                            </li>
                            <li>
                                Is your post an original post or a reblog?
                                Reblogging is a great way to share a post with
                                others, but only original posts will appear in
                                search results.
                            </li>
                            <li>
                                The first 20 tags on a post will be indexed for
                                recent and most popular results. While a post
                                will support up to 30 tags, those last ten tags
                                will not be indexed.
                            </li>
                            <li>
                                Including links in posts may affect its
                                visibility.
                            </li>
                            <li>
                                <a href="https://tumblr.zendesk.com/hc/articles/231476507-Private-posts">
                                    Private posts
                                </a>{' '}
                                will not appear in search results.
                            </li>
                            <li>
                                Posting from a new account? It may take a little
                                time before your posts from a new account appear
                                in search results.
                            </li>
                            <li>
                                Posts from a brand new secondary blog can also
                                take some time before appearing in results as
                                well.
                            </li>
                            <li>
                                Blogs that are flagged as explicit will not
                                appear in search results. If you believe your
                                blog was miscategorized, you can appeal this
                                decision by following{' '}
                                <a href="https://tumblr.zendesk.com/hc/articles/360011657153-Reviewing-and-appealing-content-flagged-as-adult">
                                    these instructions.
                                </a>
                            </li>
                        </ul>
                        <h2>Privacy Settings</h2>
                        <p>
                            If you don't want to appear in search results, you
                            can hide your blog from all search engine results
                            (including our own) by turning on the option "Hide
                            [blogname] from search results" in your blog's
                            settings.
                        </p>
                        <p>To adjust your Visibility settings on web:</p>
                        <ul>
                            <li>Navigate to the Settings page.</li>
                            <li>Select the blog you wish to hide.</li>
                            <li>Scroll down to find the Visibility options.</li>
                            <li>
                                Toggle the option to "Hide [blogname] from
                                search results."
                            </li>
                        </ul>
                        <p>
                            To adjust your Visibility settings in the mobile
                            apps:
                        </p>
                        <ul>
                            <li>
                                Tap the account button to view your primary
                                blog.
                            </li>
                            <li>
                                Tap the blog name in the top left corner to
                                choose another blog.
                            </li>
                            <li>Tap the gear icon in the top right corner.</li>
                            <li>
                                Tap Visibility, and toggle the option to "Hide
                                [blogname] from search results."
                            </li>
                        </ul>
                        <p>
                            Please see our{' '}
                            <a href="https://tumblr.zendesk.com/hc/articles/115011611747">
                                Privacy Options
                            </a>{' '}
                            for more information.
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
