import React from 'react';
export default function AppsSection() {
    return (
        <div className="security" id="section">
            <div className="one-section">
                <img
                    className="full_promo_image"
                    src="https://assets.tumblr.com/images/corp_pages/apps_mobile_ios_android_winphone_2x.png?_v=e36a7fca88a0906b39280d01bae36e15"
                    width="396"
                    height="398"
                />
                <div className="text-and-btns">
                    <h2 className="text">
                        No one should have to go through life without a Tumblr
                        app.
                    </h2>
                    <a
                        className="anchor1"
                        href="https://apps.apple.com/app/apple-store/id305343404?pt=212308&ct=settings&mt=8"
                        Target="_blank"
                    >
                        <button id="app_iphone">iPhone&iPad</button>
                    </a>
                    <a
                        className="anchor2"
                        href="https://play.google.com/store/apps/details?id=com.tumblr&referrer=utm_source%3Dtumblr%26utm_medium%3Diframe%26utm_campaign%3Dsettings"
                        Target="_blank"
                    >
                        <button id="app_android">Android</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
