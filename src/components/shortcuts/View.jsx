import ShortcutsContainer from './containers/ShortcutsContainer';
import React from 'react';
import '../../styles/styles.css';

/**
 * Shortcuts Page Overlay: an Overlay Containter that is viewed over the page with opacity
 * @function ShortcutsPageOverlay
 * @property {function} unOverlay - Event handling func to make the overlay invisible when clicked outside of shorcut container
 * @returns {Component} containter
 */

export default function ShortcutsPageOverlay() {
    const unOverlay = () => {
        document.querySelector('.overlay-container').style.display = 'none';
    };

    return (
        <div
            className="overlay-container"
            data-testid="overlayContainer"
            Style="color: black !important;"
        >
            <div
                className="overlay-div"
                onClick={unOverlay}
                data-testid="overlayDiv"
            >
                {' '}
            </div>
            <ShortcutsContainer />
        </div>
    );
}
