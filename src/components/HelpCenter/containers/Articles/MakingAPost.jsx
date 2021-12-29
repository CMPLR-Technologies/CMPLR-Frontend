/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function MakingAPost() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Making a Post" className="article-title">
                    Making a Post
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            This article is about making a new post. If you want
                            to learn about reblogging, head over to{' '}
                            <a href="https://tumblr.zendesk.com/hc/articles/231236387-Reblogs">
                                this article instead.
                            </a>
                        </p>
                        <p>
                            The articles listed{' '}
                            <a href="https://tumblr.zendesk.com/hc/sections/206752327-Post-options">
                                here
                            </a>{' '}
                            cover posting options like saving drafts, adding to
                            your queue, scheduling posts, and private posts.
                        </p>
                        <h2>In a Web Browser:</h2>
                        <ul>
                            <li>
                                At the top of your dashboard, you can click the
                                icon of the type of post you want to make.
                            </li>
                            <li>
                                From anywhere on your dashboard, you can click
                                the blue pencil button that's always hanging out
                                in the upper right-hand corner.
                            </li>
                            <li>
                                Use <a href="https://tumblr.new">tumblr.new</a>{' '}
                                or{' '}
                                <a href="https://tumblr/new">tumblr.com/new</a>{' '}
                                as a shortcut for making a new post.
                            </li>
                        </ul>
                        <p>
                            If you want to post from another blog on your
                            account, click the arrow next to your blog name in
                            an open post form, then choose the blog you want to
                            post from.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/1500006905382/legacyTextPost.png"
                                alt="The legacy post editor on web showing an empty text post."
                            />
                        </p>
                        <h2>Using the Beta Post Editor on Web</h2>
                        <p>
                            The steps to create a post while using our beta post
                            editor are the same as the steps for our legacy
                            editor. However, the formatting tools are a bit
                            different. Read more about them in{' '}
                            <a href="https://tumblr.zendesk.com/hc/articles/360010901913-Using-the-Neue-Post-Format">
                                this article.
                            </a>
                        </p>
                        <p>
                            <strong>Note:</strong> The beta post editor on web
                            defaults to the last blog you posted to.
                        </p>
                        <h2>In the App:</h2>
                        <p>
                            Tap the blue pencil button at the bottom of your
                            screen to open a new post. You can also swipe right
                            from the dash or tap the camera icon in the upper
                            left of your dash to access the{' '}
                            <a href="https://tumblr.zendesk.com/hc/articles/360043147134">
                                Tumblr camera.
                            </a>
                        </p>
                        <p>
                            <strong>Note:</strong> The post editor in the app
                            defaults to the last blog you posted from. If you
                            want to post from one of your other blogs, tap your
                            blog name in an open post form, then choose the blog
                            you want to post from.
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
