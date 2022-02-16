import React from 'react';
import Background from './Background.svg';

/**
 * @function HomeSectionTwo
 * @description [Static page ]Section Two Component of HomePage
 * @returns {Component} the Component of the Section Two
 */

export default function HomeSec2() {
    return (
        <>
            <section
                data-testid="home-sec2"
                id="Easy to use"
                className="second-page  section"
            >
                <div className="second-page-content">
                    <Background dataTestid="sec2-bg" />
                    <div className="second-page-info">
                        <h1
                            data-testid="sec2-heading"
                            className="sec-page-heading"
                        >
                            Cmplr is so easy to use that it’s hard to explain.
                        </h1>
                        <p
                            data-testid="sec2-paragraph"
                            className="sec-page-para"
                        >
                            We made it really, really simple for people to make
                            a blog and put whatever they want on it. Stories,
                            photos, GIFs, TV shows, links, quips, dumb jokes,
                            smart jokes, Spotify tracks, mp3s, videos, fashion,
                            art, deep stuff. CMPlr is 536 million different
                            blogs, filled with literally whatever.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
