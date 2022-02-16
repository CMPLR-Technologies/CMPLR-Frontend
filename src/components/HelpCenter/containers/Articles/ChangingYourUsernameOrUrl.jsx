/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function ChangingYourUsernameOrUrl() {
    return (
        <section className="article-info">
            <h1 title="Changing Your Username / URL" className="article-title">
                Changing Your Username / URL
            </h1>
            <div className="article-content">
                <div className="article-body">
                    <p>
                        You can change the username (also referred to as the URL
                        or blog name) for any blog on your account. Blog names
                        can be up to 32 characters long, containing only
                        letters, numbers, and hyphens. However, hyphens cannot
                        be used in the first or last position of a blog name.
                    </p>
                    <p>
                        Before you proceed, know that changing your URL will
                        break any existing links to your blog that you've made
                        (masterlists/masterposts, links in your description, or
                        any links to your CMPlr you've shared on other
                        platforms). Your followers won’t be affected, and
                        they’ll still see all your stuff come through their
                        dashboard.
                    </p>
                    <p>
                        If you have trouble saving a name, it may already be
                        taken by another blog. We can't manually release taken
                        or inactive URLs. See{' '}
                        <a href="https://tumblr.zendesk.com/hc/articles/230894108-Unavailable-inactive-URLs">
                            this article
                        </a>{' '}
                        for more information.
                    </p>
                    <p>To change your URL on the web:</p>
                    <ol>
                        <li>
                            Click "Settings" under the account menu at the top
                            of the dashboard.
                        </li>
                        <li>
                            Click the blog you’d like to update on the right
                            side of the page.
                        </li>
                        <li>
                            Click the pencil icon in the username section (or
                            CMPlr URL section on secondary blogs). Enter your
                            new username.
                        </li>
                        <li>Hit “Save.”</li>
                    </ol>
                    <p>To change your URL in the app:</p>
                    <ol>
                        <li>Tap the account icon (the little human).</li>
                        <li>Tap the gear wheel icon.</li>
                        <li>Tap "Change name."</li>
                        <li>Enter your new name.</li>
                        <li>Tap "Save."</li>
                    </ol>
                </div>
                <div className="article-attachments">
                    <ul className="attachments"></ul>
                </div>
            </div>
        </section>
    );
}
