import ShortcutsContainer from './ShortcutsContainer';
import React from 'react';
import '../../styles/styles.css';

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
