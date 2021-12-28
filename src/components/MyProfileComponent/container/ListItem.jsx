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

export default function ListItem(props) {
    const { primary, secondary, prof, link, clicked, setClicked, index } =
        props;
    return (
        <li
            onClick={() => setClicked(index + 1)}
            className={`list-item ${clicked ? 'clicked' : ''}`}
        >
            <Link
                className={`list-item-anchor ${prof ? 'prof' : ''} `}
                to={link}
            >
                <span className="list-item-span">{primary}</span>
                <small className="list-item-anchor-small">{secondary}</small>
            </Link>
        </li>
    );
}
