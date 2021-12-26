import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NewPostPopupItem(props) {
    return (
        <Link to={props.link}>
            <div className="new-post-popup-box">
                <div
                    className={`new-post-popup-box-icon new-post-popup-box-icon${props.id}`}
                >
                    <i className={props.icon}></i>
                </div>
                <div className="new-post-popup-box-text">{props.type}</div>
            </div>
        </Link>
    );
}
NewPostPopupItem.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    link:PropTypes.string,
};
