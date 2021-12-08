import ShortcutsContainer from './containers/ShortcutsContainer';
import React, { useContext } from 'react';
import '../../styles/styles.css';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';

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
    const [theme, changeTheme] = useContext(ThemeContext);

    document.addEventListener('keydown', e => {
        if (e.altKey && e.code === 'KeyC') {
            console.log('New Post!');
        } else if (e.shiftKey && e.code === 'Slash') {
            console.log('Go to SearchBar?');
            //document.querySelector("search-bar").focus();
        } else if (e.code === 'Period') {
            console.log('Back to the top ^^');
        } else if (e.code === 'KeyL') {
            console.log('Like This one <3');
            // } else if (e.code === "KeyJ") {
            //   console.log("Scroll to next post ->");
            // } else if (e.code === "KeyK") {
            //   console.log("Scroll to prev post <-");
            // }
        } else if (e.altKey && e.code === 'KeyQ') {
            console.log('Queue this post ~');
        } else if (e.altKey && e.code === 'KeyP') {
            changeTheme(theme);
        }
        e.stopImmediatePropagation();
    });

    const css = `
        .overlay-div {
            background-color: rgb(${themes[theme].navy});
        }
        .shortcut-container {
            background-color: rgb(${themes[theme].white});
        }
        .shortcut-container h2{
            border-bottom: 2px solid rgba(${themes[theme].black}, 0.13);
        }
        .overlay-container span,
        .overlay-container h1,
        .overlay-container h2,
        .overlay-container div {
            color: rgb(${themes[theme].black});
        }
        .shortcut:hover {
            background-color: rgba(${themes[theme].black}, .07);
        }
        .shortcut-key{
            background: rgba(${themes[theme].black}, .13);
        }

    `;

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
            <style>{css}</style>
        </div>
    );
}
