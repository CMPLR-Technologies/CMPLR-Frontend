/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function TagAndPostContentFiltering() {
    return (
        <div>
            <section className="article-info">
                <h1
                    title="Tag and Post Content Filtering"
                    className="article-title"
                >
                    Tag and Post Content Filtering
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>
                            There are two filtering options on Tumblr: By tags
                            and by post content. Regardless of which option you
                            choose, filtered posts will have an overlay
                            obscuring the post itself with an explanation of why
                            the post was filtered along with the option to view
                            the post if you'd like.
                        </p>
                        <p>
                            It's also worth noting that filtering isn't applied
                            to ads, sponsored posts, asks and submissions in
                            your inbox, posts sent via messaging, or your own
                            posts.
                        </p>
                        <h2>Tag Filtering</h2>
                        <p>
                            Tag filtering hides posts with certain #tags from
                            your dashboard and in search.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4412352012183/filteredTag.png"
                                alt="A filtered post in the dashboard. The meatballs icon is in the top right corner, but the rest of the post is covered by a gray overlay. Text on the overlay reads This post contains filtered tags. #horse. There is a button that reads View post."
                                width={500}
                                height={270}
                            />
                        </p>
                        <h3>On the Web:</h3>
                        <ul>
                            <li>
                                Click the account icon{' '}
                                <img
                                    src="https://tumblr.zendesk.com/hc/article_attachments/4403863119639/snowman.png"
                                    width="12px"
                                    height="15px"
                                />
                                , then click{' '}
                                <a href="https://www.tumblr.com/settings/account">
                                    Settings
                                </a>
                                .
                            </li>
                            <li>
                                Scroll down to the "Filtering" section and click
                                the pencil icon to the right of "Filtered Tags."
                            </li>
                            <li>
                                Type the tag you'd like to filter, then click
                                "Add."
                            </li>
                            <li>
                                To remove a filter, click the "Remove" button.
                            </li>
                        </ul>
                        <h3>In the Apps:</h3>
                        <ul>
                            <li>
                                Tap the account icon{' '}
                                <img
                                    src="https://tumblr.zendesk.com/hc/article_attachments/4403863119639/snowman.png"
                                    width="12px"
                                    height="15px"
                                />
                                .
                            </li>
                            <li>
                                Tap the gear icon at the top right, then tap
                                "General settings" (iOS) or "Account settings"
                                (Android).
                            </li>
                            <li>Tap "Filtering."</li>
                            <li>
                                Tap "+New" to the right of "Filtered Tags" to
                                add tags to the list.
                            </li>
                            <li>
                                To remove a filter while using the iOS app,
                                swipe left on that item, then tap "Delete." In
                                the Android app, tap the filter you'd like to
                                remove, then tap "Remove."
                            </li>
                        </ul>
                        <p>
                            Keep in mind that this feature is only as good as
                            the tags on a post allow it to be. It can only
                            filter out posts with the <em>exact</em> tag you've
                            filtered.
                        </p>
                        <h2>Post Content Filtering</h2>
                        <p>
                            Post content filtering searches the <em>entire</em>{' '}
                            post for instances of your filtered word or phrase,
                            not just the tags.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4412352011543/filteredContent.png"
                                alt="A filtered post in the dashboard. The meatballs icon is in the top right corner, but the rest of the post is covered by a gray overlay. Text on the overlay reads This post contains filtered content. horse friend. There is a button that reads View post."
                                width={500}
                                height={270}
                            />
                        </p>
                        <h3>On the Web:</h3>
                        <ul>
                            <li>
                                Click the account icon{' '}
                                <img
                                    src="https://tumblr.zendesk.com/hc/article_attachments/4403863119639/snowman.png"
                                    width="12px"
                                    height="15px"
                                />
                                , then click{' '}
                                <a href="https://www.tumblr.com/settings/account">
                                    Settings
                                </a>
                                .
                            </li>
                            <li>
                                Scroll down to the "Filtering" section and click
                                the pencil icon next to "Filtered Post Content."
                            </li>
                            <li>
                                Type the word or phrase you'd like to filter,
                                then click "Add." Keep in mind that you're
                                limited to 200 filters and each filtered word or
                                phrase has to be under 250 characters.
                            </li>
                            <li>
                                To remove a filter, click the "Remove" button.
                            </li>
                        </ul>
                        <h3>In the Apps:</h3>
                        <ul>
                            <li>
                                Tap the account icon{' '}
                                <img
                                    src="https://tumblr.zendesk.com/hc/article_attachments/4403863119639/snowman.png"
                                    width="12px"
                                    height="15px"
                                />
                                .
                            </li>
                            <li>
                                Tap the gear icon at the top right, then tap
                                "General settings" (iOS) or "Account settings"
                                (Android).
                            </li>
                            <li>Scroll down and tap "Filtering."</li>
                            <li>Tap the +New icon to add a new filter.</li>
                            <li>
                                Type the word or phrase you want to filter, then
                                tap "Add."
                            </li>
                            <li>
                                To remove a filter while using the iOS app,
                                swipe left on that item, then tap "Delete." In
                                the Android app, tap the filter you'd like to
                                remove, then tap "Remove."
                            </li>
                        </ul>
                        <h2>Viewing Filtered Posts</h2>
                        <p>
                            You can reveal a filtered post anytime by clicking
                            on "View post:"
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4412360355735/filteredTagViewPost.gif"
                                alt="A looping GIF of a filtered post on the dashboard. The meatballs icon is in the top right corner, but the rest of the post is covered by a gray overlay. This post contains the filtered tag #horse. There is a button that reads View post. The user clicks the View Post button to remove the gray overlay and reveal the post."
                                width={500}
                                height={270}
                            />
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4412352011799/filteredContentViewPost.gif"
                                alt="A looping GIF shows a filtered post on the dashboard. The meatballs icon is in the top right corner, but the rest of the post is covered by a gray overlay. Text on the overlay reads This post contains filtered content. horse friend. There is a button that reads View post. The user clicks the View Post button to remove the gray overlay and reveal the post."
                                width={500}
                                height={270}
                            />
                        </p>
                        <h3>Some Things to Keep in Mind:</h3>
                        <ul>
                            <li>
                                Content filtering is not case sensitive, so
                                adding a term like "horse" will filter out
                                "HORSE" "Horse" and "hOrSe" in the same way.
                            </li>
                            <li>
                                The filter also works on terms which{' '}
                                <em>include</em> the word, like "horses" and
                                "horseman."
                            </li>
                            <li>
                                Adding a phrase like "horse friend," will filter
                                out occurrences of that entire, exact phrase.
                            </li>
                            <li>
                                The content filter includes all the text within
                                a post, including the blog name and blog names
                                within the reblog trail.
                            </li>
                            <li>
                                Text contained inside an image in a post cannot
                                be filtered.
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
