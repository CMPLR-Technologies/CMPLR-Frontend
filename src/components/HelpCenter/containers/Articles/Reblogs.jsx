/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Reblogs() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Reblogs" className="article-title">
                    Reblogs
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            A reblog is when you see a post you enjoy on Tumblr,
                            and by clicking the reblog button, you make the post
                            appear on your blog too. Now all of your followers
                            can enjoy the post, thanks to your signal boost.
                        </p>
                        <p>
                            You should feel free to add commentary, or pics, or
                            a gif when you reblog something. Or not! Whatever
                            floats your perfectly specific boat.
                        </p>
                        <p>
                            To reblog, first make sure you’re logged into
                            Tumblr. Once you are, just look in the lower right
                            corner of that post on the dashboard (or the upper
                            right hand corner of a blog post’s permalink page)
                            and you’ll see the reblog button - two arrows
                            forming a rectangle. Hit it. From there, you can add
                            your own caption if you want, and publish it on your
                            blog. To upload an image or GIF, click or tap the
                            corresponding picture icon or the little GIF icon to
                            search for one.
                        </p>
                        <p>
                            You can also reblog starting from a certain post in
                            the reblog thread. Just click the username of
                            whoever made the reblog you want to reblog from.
                            It'll open up, and you can click or tap its reblog
                            icon to reblog that post.
                        </p>
                        <p>Some more points about reblogs:</p>
                        <ul>
                            <li>
                                You can't edit earlier reblogs, or the original
                                post, in your reblog.
                            </li>
                            <li>
                                You can't remove the original caption in a
                                reblog chain, but you can remove everything that
                                comes after. To remove additional captions on a
                                post you're reblogging, just hit the reblog
                                button and look for the X that appears next to
                                the added commentary. Punch it, and all those
                                words will disappear. Keep in mind that this is
                                an all-or-nothing thing: you can’t delete a
                                single reblog caption within the thread.
                            </li>
                            <li>
                                To be sure your posts are credited properly once
                                others start reblogging them, use the{' '}
                                <a href="http://support.tumblr.com/post/125279368827/heres-a-nice-thing-no-matter-how-many-times-an">
                                    content source field
                                </a>
                                ! In fact, we’ll automatically use it for you.
                                No matter how many times an original post of
                                yours gets reblogged, you’ll always be credited
                                as the source. Rebloggers might add a gif, or
                                some commentary, but your username will always,
                                always be stuck to the bottom of the post. Click
                                on that source link any time you want to see the
                                original post.
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
