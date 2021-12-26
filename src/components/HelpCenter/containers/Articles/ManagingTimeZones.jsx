/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function ManagingTimeZones() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Time zones" className="article-title">
                    Time zones
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <p>To set or change your blog's time zone:</p>
                        <ol>
                            <li>
                                Click the account menu (the human icon) at the
                                top of the dashboard.
                            </li>
                            <li>Choose "Settings."</li>
                            <li>
                                Pick&nbsp;the blog you'd like to update from the
                                list along the right side of the screen.
                            </li>
                            <li>
                                Next to "Timezone,"&nbsp;make your update in the
                                dropdown menu.
                            </li>
                        </ol>
                        <p>
                            Note that you can only do this on the web, rather
                            than in the app, at this time.
                        </p>
                        <p>
                            Time zone changes will not affect published posts,
                            only posts published or edited after the change.
                            Careful: the very fabric of space-time is at stake.
                            🕓
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
