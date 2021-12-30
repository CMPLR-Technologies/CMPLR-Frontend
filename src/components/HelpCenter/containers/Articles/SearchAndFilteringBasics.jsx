/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function SearchAndFilteringBasics() {
    return (
        <div>
            <section className="article-info">
                <h1
                    title="Search and Filtering Basics"
                    className="article-title"
                >
                    Search and Filtering Basics
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        {/*article title: Search and Filtering Basics*/}
                        <p>
                            <strong>Search</strong> and{' '}
                            <strong>tag pages</strong> can help you find new
                            blogs to follow, new posts you'll want to see, and
                            connect with folks who share your interests.
                        </p>
                        <p>
                            <strong>Search pages</strong> will include posts,
                            blogs, and related searches.
                        </p>
                        <p>
                            <strong>Tag pages</strong> will show you only posts
                            that have been <em>tagged</em> with the specific
                            term or phrase you're using. If you're on web,
                            you'll also see top blogs in that tag, as well as
                            related tags to check out.
                        </p>
                        <div
                            style={{
                                backgroundColor: '#ff492f',
                                color: '#ffffff',
                                padding: '5px',
                                borderRadius: '5px',
                                overflow: 'auto'
                            }}
                        >
                            <div style={{ float: 'left', display: 'block' }}>
                                <img
                                    style={{ width: '65px' }}
                                    src="https://tumblr.zendesk.com/hc/article_attachments/4409387257623/tumblrBot.png"
                                    alt="Tumblrbot. They're smiling."
                                />
                            </div>
                            <p style={{ padding: '10px 0' }}>
                                <strong>
                                    Can't find your own post in search or tag
                                    results?
                                </strong>{' '}
                                Give it a few minutes. It can take some time for
                                posts to get indexed. Still not seeing it? Check
                                out{' '}
                                <a
                                    style={{ color: '#ffffff' }}
                                    href="https://tumblr.zendesk.com/hc/articles/223857628-Appearing-In-Search-Results"
                                >
                                    this article
                                </a>
                                .
                            </p>
                        </div>
                        <h2 id="web">Search &amp; Tag Pages on Web</h2>
                        <p>
                            From the dashboard, put your cursor in the search
                            field:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387319959/searchFieldWeb.gif"
                                alt="A looping GIF showing the search field on web. The mouse clicks the search field and a dropdown is revealed showing the following: Tags you follow, 2020, cats, iceland, net neutrality, vegan."
                            />
                        </p>
                        <p>
                            Doing so will reveal a dropdown with your followed
                            tags. Check out our article about following tags{' '}
                            <a href="https://tumblr.zendesk.com/hc/articles/226259728-Followed-Tags">
                                here
                            </a>
                            .
                        </p>
                        <p>
                            Type the word or phrase you'd like to browse and
                            you'll see the options in the dropdown change:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409392527255/webSearchDropdownResults.png"
                                alt="The search field on web. The user has typed star trek into the search bar and the dropdown options have changed to reflect the query. The top two options shown are go to #star trek, followed by the magnifying glass icon next to the words star trek. The next section of the dropdown is labeled Tumblrs. Five Tumblrs are shown, each with a follow button."
                            />
                        </p>
                        <p>
                            The first option in the dropdown ("Go to #star
                            trek") will take you to the tag page
                            (https://www.tumblr.com/tagged/star+trek). The
                            second option in the dropdown ("
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387412759/searchIcon.png"
                                alt="magnifying glass icon"
                            />{' '}
                            star trek") will take you to the search page
                            (https://www.tumblr.com/search/star+trek). Below
                            these two options is a list of blogs related to your
                            term or phrase.
                        </p>
                        <h3 id="web-search">Search Pages on Web</h3>
                        <p>
                            Here's an example of what you can expect to see on a
                            search page:
                        </p>
                        <div
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                background: '#001935'
                            }}
                        >
                            <img
                                style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: '85%'
                                }}
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387461527/webSearchGuide.png"
                                alt="Search results page for Star Trek on web. Six options are labeled numerically. Consult the image description link below the image for a detailed description of the screenshot. Consult text below the image for corresponding label explainations."
                            />
                            <div style={{ textAlign: 'center' }}>
                                <a
                                    style={{ color: '#00b8ff' }}
                                    href="https://tumblr.zendesk.com/hc/articles/4409392091927"
                                    rel="noopener"
                                >
                                    Image description
                                </a>
                            </div>
                            <p>
                                <span style={{ color: '#fcf01d' }}>
                                    <strong>
                                        1. Follow this search term.{' '}
                                    </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Click "Follow" to add this search term to
                                    your followed tags. You can learn more about
                                    followed tags{' '}
                                    <a
                                        style={{ color: '#00b8ff' }}
                                        href="https://tumblr.zendesk.com/hc/articles/226259728-Followed-Tags"
                                    >
                                        here
                                    </a>
                                    .
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff62ce' }}>
                                    <strong>2. Related searches.</strong>{' '}
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Other search terms that will show you
                                    similar content. Check 'em out!
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff8a00' }}>
                                    <strong>
                                        3. Top blogs in this search.{' '}
                                    </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Blogs that post a lot in this search. Hit
                                    the "Follow" button to see their content in
                                    your dashboard.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff492f' }}>
                                    <strong>
                                        4. Sort and filter options.{' '}
                                    </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Search results are sorted by "Most popular"
                                    by default. Click the arrow next to "Most
                                    popular" to view recent search results
                                    instead. Click the arrow next to "Post type"
                                    to filter the results by post type.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00cf35' }}>
                                    <strong>5. Change the layout. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Search pages use a grid layout by default.
                                    To switch to a single-column layout, click
                                    the icon on the right showing three stacked
                                    rectangles.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00b8ff' }}>
                                    <strong>6. Search results. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    This is what you're probably looking for:
                                    Posts that are related to your search term.
                                </span>
                            </p>
                        </div>
                        <h3 id="web-tags">Tag Pages on Web</h3>
                        <p>
                            Here's an example of what you can expect to see on a
                            tag page:
                        </p>
                        <div
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                background: '#001935'
                            }}
                        >
                            <img
                                style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: '85%'
                                }}
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409392642327/webTagGuide.png"
                                alt="Tag page for #Star Trek on web. Seven options are labeled numerically. Consult the image description link below the image for a detailed description of the screenshot. Consult text below the image for corresponding label explainations."
                            />
                            <div style={{ textAlign: 'center' }}>
                                <a
                                    style={{ color: '#00b8ff' }}
                                    href="https://tumblr.zendesk.com/hc/articles/4409392077719"
                                    rel="noopener"
                                >
                                    Image description
                                </a>
                            </div>
                            <p>
                                <span style={{ color: '#fcf01d' }}>
                                    <strong>1. Follow this tag.</strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Click "Follow" to add this tag to your
                                    followed tags. You can learn more about
                                    followed tags{' '}
                                    <a
                                        style={{ color: '#00b8ff' }}
                                        href="https://tumblr.zendesk.com/hc/articles/226259728-Followed-Tags"
                                    >
                                        here
                                    </a>
                                    .
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff62ce' }}>
                                    <strong>2. Tag stats.</strong>{' '}
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    See how many other folks follow this tag and
                                    how many posts have been made with this tag
                                    in the past day.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff8a00' }}>
                                    <strong>
                                        3. This tag's header image.{' '}
                                    </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    An image from a recent popular post made in
                                    this tag. Click it to view the post.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff492f' }}>
                                    <strong>4. Change layout. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tag pages use a grid layout by default. To
                                    switch to a single-column layout, click the
                                    icon on the right showing three stacked
                                    rectangles.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00cf35' }}>
                                    <strong>5. Top blogs in this tag. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    These blogs post in this tag often.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00b8ff' }}>
                                    <strong>6. Sorting options. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Recent tag results are shown by default if
                                    you're following the tag. Top results are
                                    shown by default if you're not following the
                                    tag.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#6641dd' }}>
                                    <strong>7. Tag results. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    {' '}
                                    Probably the main reason why you're here!
                                    These are the posts that have been tagged
                                    with the tag you searched.
                                </span>
                            </p>
                        </div>
                        <h3 id="timestamps-permalinks-web">
                            Timestamps and Permalinks on Web
                        </h3>
                        <p>
                            Want to check out when a certain post was published?
                            Click the meatballs (●●●) to reveal the timestamp,
                            along with options to report the post, block the
                            blog, and copy the post permalink.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387515031/searchMeatballsWeb.gif"
                                alt="A looping GIF showing the search results for Star Trek on web. The mouse clicks the meatballs icon on the second post in the results. A popover appears showing the timetamp (Posted-Monday 6:41 PM), Copy link, Report, Block, and Close."
                            />
                        </p>
                        <h2 id="app">Search and Tag Pages in the App</h2>
                        <p>
                            In the app, tap the magnifying glass icon to open
                            the Explore page. Here you can find your followed
                            tags, along with a mix of recommended and trending
                            content.
                        </p>
                        <p>
                            Tap the search bar at the top of the Explore page.
                            You'll see several recommended search terms, along
                            with any recent searches you've conducted.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409392677399/iosSearchRecommendations.jpeg"
                                alt="The search interface in the iOS app. At the top is the search field with a magnifying glass icon and the placeholder text: Search Tumblr. To the right of the search field is a Cancel button. Below is a section labeled Recent. There's one entry: star trek. There's a magnifying glass icon next to this entry. The next section is labeled Recommended, and there are many entries. Each entry has a magnifying glass icon to the left of it. The entries are: obey me, amphibia, dc comics, gaming, stray kids, daredevil, moon, loki, and black lives matter. The rest of the entries are covered by the iPhone keyboard."
                                width={337}
                                height={700}
                            />
                        </p>
                        <p>
                            Tip: To clear out your search history, tap the X to
                            the right of "Recent."
                        </p>
                        <p>
                            Type the word or phrase you'd like to browse and
                            you'll see the options in the dropdown change:
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409392691735/iosSearch.gif"
                                alt="A looping GIF showing the search interface in the iOS app. The user types star trek in the search field at the top. Suggested searches, tags, and Tumblrs in the sections below the search field change as they type."
                                width={338}
                                height={700}
                            />
                        </p>
                        <p>
                            The first option in the dropdown ("Go to #star
                            trek") will take you to the tag page. The second
                            option in the dropdown ("
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387412759/searchIcon.png"
                                alt="magnifying glass icon"
                            />{' '}
                            star trek") will take you to the search page. Below
                            these two options is a list of blogs related to your
                            term or phrase.
                        </p>
                        <h3 id="app-search">Search Pages in the App</h3>
                        <p>
                            Tapping "
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387412759/searchIcon.png"
                                alt="magnifying glass icon"
                            />{' '}
                            star trek" will take you here:
                        </p>
                        <div
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                background: '#001935'
                            }}
                        >
                            <img
                                style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: '30%'
                                }}
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409392463639/iosSearchResults.jpg"
                                alt="Search page for Star Trek in the app. Seven options are labeled numerically. Consult the image description link below the image for a detailed description of the screenshot. Consult text below the image for corresponding label explainations."
                            />
                            <div style={{ textAlign: 'center' }}>
                                <a
                                    style={{ color: '#00b8ff' }}
                                    href="https://tumblr.zendesk.com/hc/articles/4409392102935"
                                    rel="noopener"
                                >
                                    Image description
                                </a>
                            </div>
                            <p>
                                <span style={{ color: '#fcf01d' }}>
                                    <strong>1. Follow this search.</strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tap "Follow" to add this search term to your
                                    followed tags. You can learn more about
                                    followed tags{' '}
                                    <a
                                        style={{ color: '#00b8ff' }}
                                        href="https://tumblr.zendesk.com/hc/articles/226259728-Followed-Tags"
                                    >
                                        here
                                    </a>
                                    .
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff62ce' }}>
                                    <strong>2. Sorting options.</strong>{' '}
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Search pages sort by top results by default.
                                    Tap "Recent" to view recent posts in this
                                    search.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff8a00' }}>
                                    <strong>3. #Tagged. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tap #Tagged to view recent posts tagged with
                                    what you've searched.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff492f' }}>
                                    <strong>4. Filtering options. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Filter results by GIFs, Tumblrs, or post
                                    type. Scroll the options to the left to view
                                    the full list.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00cf35' }}>
                                    <strong>5. Related tags. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tags with content similar to what you're
                                    searching.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00b8ff' }}>
                                    <strong>
                                        6. Top blogs in this search.{' '}
                                    </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    These blogs post a lot in this search. Check
                                    them out!
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#6641dd' }}>
                                    <strong>7. Search results. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    This is what you're probably looking for:
                                    Posts that are related to your search term.
                                </span>
                            </p>
                        </div>
                        <p>Scroll down to see more results:</p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409392464023/iosSearchResults.gif"
                                alt="A looping GIF of the search page for star trek in the iOS app. The user scrolls down the page to reveal a single column of post results."
                                width={339}
                                height={701}
                            />
                        </p>
                        <h3 id="app-tags">Tag Pages in the App</h3>
                        <p>
                            Tapping "Go to #star trek" from the search bar will
                            take you here:
                        </p>
                        <div
                            style={{
                                padding: '10px',
                                borderRadius: '5px',
                                background: '#001935'
                            }}
                        >
                            <img
                                style={{
                                    margin: 'auto',
                                    display: 'block',
                                    width: '30%'
                                }}
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409387621783/mobileTagGuide.jpeg"
                                alt="Tag page for #Star Trek in the app. Six options are labeled numerically. Consult the image description link below the image for a detailed description of the screenshot. Consult text below the image for corresponding label explainations."
                            />
                            <div style={{ textAlign: 'center' }}>
                                <a
                                    style={{ color: '#00b8ff' }}
                                    href="https://tumblr.zendesk.com/hc/articles/4409391998487"
                                    rel="noopener"
                                >
                                    Image description
                                </a>
                            </div>
                            <p>
                                <span style={{ color: '#fcf01d' }}>
                                    <strong>1. The share icon. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tap the share icon to bring up your sharing
                                    options. From the share sheet, you can copy
                                    the tag page URL, share to a Tumblr via
                                    direct messaging, or share to another app on
                                    your device.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff62ce' }}>
                                    <strong>2. Tag stats.</strong>{' '}
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    See how many other folks follow this tag and
                                    how many posts have been made with this tag
                                    in the past day.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff8a00' }}>
                                    <strong>3. Follow this tag. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tap "Follow" to add this tag to your
                                    followed tags. You can learn more about
                                    followed tags{' '}
                                    <a
                                        style={{ color: '#00b8ff' }}
                                        href="https://tumblr.zendesk.com/hc/articles/226259728-Followed-Tags"
                                    >
                                        here
                                    </a>
                                    .
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#ff492f' }}>
                                    <strong>4. New Post. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Tap "New Post" to open a new post with this
                                    tag already added.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#00cf35' }}>
                                    <strong>5. Sorting options. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    Recent tag results are shown by default if
                                    you're following the tag. Top results are
                                    shown by default if you're not following the
                                    tag.
                                </span>
                            </p>
                            <p>
                                <span style={{ color: '#6641dd' }}>
                                    <strong>6. Tag results. </strong>
                                </span>
                                <span style={{ color: '#ffffff' }}>
                                    {' '}
                                    Probably the main reason why you're here!
                                    These are the posts that have been tagged
                                    with the tag you searched. Scroll down to
                                    see more.
                                </span>
                            </p>
                        </div>
                        <h3 id="timestamps-permalinks-app">
                            Timestamps and Permalinks in the App
                        </h3>
                        <p>
                            Want to check out when a certain post was published?
                            Tap the meatballs (●●●) to reveal the timestamp,
                            along with options to report the post and copy the
                            post permalink.
                        </p>
                        <p>
                            <img
                                src="https://tumblr.zendesk.com/hc/article_attachments/4409393002007/timestampsIos.gif"
                                alt="A looping GIF showing the tag page for #star trek in the iOS app. The user taps the meatballs icon on the first post and a menu pops up from the bottom of the screen. At the top of the menu is small text that reads: Today at 16:31. Three options follow: Copy link, Report, and Cancel."
                                width={337}
                                height={700}
                            />
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
