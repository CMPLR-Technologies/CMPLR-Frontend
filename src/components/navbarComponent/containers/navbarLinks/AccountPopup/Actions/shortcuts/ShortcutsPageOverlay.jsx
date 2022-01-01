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

    return (
        <div className="overlay-container" data-testid="OverlayContainer">
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
