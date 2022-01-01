import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

ListItem.propTypes = {
    notf: propTypes.object,
    userBlogName: propTypes.string,
    userAvatar: propTypes.string,
    index: propTypes.number,
    primary: propTypes.string,
    secondary: propTypes.string,
    prof: propTypes.bool,
    link: propTypes.string,
    clicked: propTypes.bool,
    setClicked: propTypes.func
};

/**
 * @function ListItem 
 * @description This component is responsible for rendering the sidebar list item in myProfile page.
 * @param {string} primary - The primary text of the list item.
 * @param {string} secondary - The secondary text of the list item.
 * @param {string} link - The href link of the list item.
 * @param {bool} prof - boolean to check if the list item is in myProfile or not.
 * @param {bool} clicked - boolean to check if the list item is clicked or not.
 * @param {function} setClicked - function to set the clicked boolean.
 * @returns {React.Component} - Returns a component.
 */

export default function ListItem(props) {
    const { primary, secondary, prof, link, clicked, setClicked, index } =
        props;
    return (
        <li
            onClick={() => setClicked(index + 1)}
            className={`list-item ${clicked ? 'clicked' : ''}`}
            data-testid="list-item-myprofile"
        >
            <Link
                className={`list-item-anchor ${prof ? 'prof' : ''} `}
                data-testid="list-item-anchor"
                to={link}
            >
                <span className="list-item-span" data-testid="list-item-span">
                    {primary}
                </span>
                <small
                    className="list-item-anchor-small"
                    data-testid="list-item-anchor-small"
                >
                    {secondary}
                </small>
            </Link>
        </li>
    );
}
