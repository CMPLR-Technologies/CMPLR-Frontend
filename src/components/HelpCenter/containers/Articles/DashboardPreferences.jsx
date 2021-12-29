/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function DashboardPreferences() {
    return (
        <div>
            <section className="article-info">
                <h1 title="Dashboard Preferences" className="article-title">
                    Dashboard Preferences
                </h1>
                <div className="article-content">
                    <div className="article-body">
                        <h2>Best Stuff First</h2>
                        <p>
                            The "Best Stuff First" setting gives you an
                            algorithmic dashboard. Your dashboard will show you
                            the stuff Tumblr thinks you'll like, rather than
                            just the newest content.
                        </p>
                        <p>
                            If you’d prefer a chronological dashboard, you can
                            turn off "Best Stuff First" from your dashboard
                            preferences. In the mobile app:
                        </p>
                        <ul>
                            <li>Tap the account icon (the little human).</li>
                            <li>Tap the gear wheel icon.</li>
                            <li>Tap “General settings."</li>
                            <li>Tap “Dashboard preferences.”</li>
                            <li>Turn off “Best Stuff First.”</li>
                        </ul>
                        <p>
                            On web, head to your{' '}
                            <a
                                href="https://www.tumblr.com/settings/dashboard"
                                target="_self"
                            >
                                dashboard settings
                            </a>
                            .
                        </p>
                        <p>
                            Turning off "Best Stuff First" will also remove
                            "Since you've been gone" posts from your dashboard.
                        </p>
                        <h2>In Your Orbit</h2>
                        <p>
                            If you see a post or blog with the indicator "In
                            your orbit," that means that some blogs you follow
                            also follow the recommended Tumblr. You can turn
                            these recommendations off from your{' '}
                            <a
                                href="https://www.tumblr.com/settings/dashboard"
                                target="_self"
                            >
                                dashboard settings on web
                            </a>{' '}
                            or in the app.
                        </p>
                        <h2>Include Posts From Your Followed Tags</h2>
                        <p>
                            With the "Include posts from your followed tags"
                            setting enabled, you will see results from your{' '}
                            <a
                                href="https://tumblr.zendesk.com/hc/en-us/articles/226259728"
                                target="_self"
                            >
                                followed tags
                            </a>{' '}
                            in the dashboard. Disabling it won't affect the tags
                            you're following, but you won't see popular results
                            from those tags injected in your dashboard.
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
