import React from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar2SideViewMoreOptions(props) {
    const openBlockModel = () => {};
    const report = () => {};
    const closeOption = () => {
        props.close();
    };
    return (
        <div className="sideViewProfileOption">
            <ClickAwayListener onClickAway={closeOption}>
                <ul className="chat-popup-header-option">
                    <Link to="/following">
                        <li>
                            <span>Following</span>
                        </li>
                    </Link>
                    <li>
                        <span>Get notifications</span>
                    </li>
                    <li className="red" onClick={report}>
                        Report
                    </li>
                    <li className="red" onClick={openBlockModel}>
                        Block
                    </li>
                    <li onClick={closeOption}>Close</li>
                </ul>
            </ClickAwayListener>
        </div>
    );
}
Navbar2SideViewMoreOptions.propTypes = {
    close: PropTypes.func.isRequired
};
