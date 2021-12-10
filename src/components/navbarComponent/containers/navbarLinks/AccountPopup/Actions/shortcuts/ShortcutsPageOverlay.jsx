import ShortcutsContainer from './containers/ShortcutsContainer';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Shortcuts Page Overlay: an Overlay Containter that is viewed over the page with opacity
 * @function ShortcutsPageOverlay
 * @property {function} setShortcutOverlay - a state setter passed from parent to hide shortcuts when clicked out
 * @property {function} unOverlay - Event handling func to call setShortcutOverlay when clicked out
 * @returns {Component} containter
 */

export default function ShortcutsPageOverlay(props) {
    const { setShortcutOverlay } = { ...props };
    const unOverlay = () => {
        setShortcutOverlay(false);
    };

    // document.addEventListener('keydown', e => {
    //     if (e.altKey && e.code === 'KeyC') {
    //         //console.log('lol');
    //         //history.push('/new');
    //     } else if (e.shiftKey && e.code === 'Slash') {
    //         //console.log('Go to SearchBar?');
    //         //document.querySelector("search-bar").focus();
    //     } else if (e.code === 'Period') {
    //         //console.log('Back to the top ^^');
    //     } else if (e.code === 'KeyL') {
    //         //console.log('Like This one <3');
    //         // } else if (e.code === "KeyJ") {
    //         //   console.log("Scroll to next post ->");
    //         // } else if (e.code === "KeyK") {
    //         //   console.log("Scroll to prev post <-");
    //         // }
    //     } else if (e.altKey && e.code === 'KeyQ') {
    //         //console.log('Queue this post ~');
    //     } else if (e.altKey && e.code === 'KeyP') {
    //         changeTheme(theme);
    //     }
    //     e.stopImmediatePropagation();
    // });

    return (
        <div
            className="overlay-container"
            data-testid="OverlayContainer"
            Style="color: black !important;"
        >
            <div
                className="overlay-div"
                onClick={unOverlay}
                data-testid="OverlayDiv"
            >
                {' '}
            </div>
            <ShortcutsContainer />
        </div>
    );
}
ShortcutsPageOverlay.propTypes = {
    setShortcutOverlay: PropTypes.func.isRequired
};
