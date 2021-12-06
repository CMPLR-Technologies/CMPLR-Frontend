import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@mui/base/ClickAwayListener';

export default function ChatOption(props) {
    let name = props.name;
    let close = props.close;
    return (
        <ClickAwayListener onClickAway={() => close()}>
            <ul className="chat-popup-header-option">
                <li>
                    <span>Sound setting</span>
                    <i className="fas fa-angle-right"></i>
                </li>
                <li>Delete conversation</li>
                <li>Block {name}</li>
            </ul>
        </ClickAwayListener>
    );
}
ChatOption.propTypes = {
    name: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
};
