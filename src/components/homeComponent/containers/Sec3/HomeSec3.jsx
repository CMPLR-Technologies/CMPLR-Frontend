import React from 'react';

/**
 * @function HomeSectionThree
 * @description [Static page ]Section Three Component of HomePage
 * @returns {Component} the Component of the Section Three
 */

export default function HomeSec3() {
    return (
        <>
            <section
                data-testid="home-sec3"
                id="Cmplr is blogs."
                className="third-page section"
            >
                <div className="third-page-content">
                    <div className="third-page-info">
                        <h1
                            data-testid="sec3-heading"
                            className="sec-page-heading"
                        >
                            Cmplr is blogs
                        </h1>
                        <p
                            data-testid="sec3-paragraph"
                            className="sec-page-para"
                        >
                            Turns out that when you make it easy to create
                            interesting things, that’s exactly what people do.
                            All those great, random blogs your friends send you,
                            those are Tumblr blogs. We’ll help you find and
                            follow blogs like that, and we’ll help other people
                            find and follow yours.
                        </p>
                    </div>
                </div>
                <div className="post">
                    <img src="" alt="" />
                </div>
            </section>
        </>
    );
}
