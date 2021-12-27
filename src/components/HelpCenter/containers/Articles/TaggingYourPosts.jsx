/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function TaggingYourPosts() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Tagging your posts" className="article-title">
                    Tagging your posts
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            Tags make it easier for readers to find posts about
                            a specific topic on your blog. For instance, you
                            could tag your landscape photographs with #landscape
                            or posts about your butler with #butler.
                            <br />
                            <br />
                            Tagging your posts is as easy as you’d expect. When
                            you create a post, enter the tags in the field at
                            the bottom of the post form.
                        </p>
                        <p>Tips:</p>
                        <ul>
                            <li>
                                You don't need to put a tag in quotes or start
                                with a hash symbol (#).
                            </li>
                            <li>Hit enter to separate each tag.</li>
                            <li>
                                Only the first 20 tags on a post will show up in
                                searches. After that, you’re just tagging for
                                show.
                            </li>
                            <li>
                                Tags on Tumblr can have spaces in them. They are
                                the most legible tags on the internet. Hooray!
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
