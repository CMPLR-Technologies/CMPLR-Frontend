import React from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { block } from '../Controller';

export default function Navbar2SideViewMoreOptions(props) {
    const {
        blogID,
        blogName,
        isBlocked,
        isSelf,
        setShowSideBlog,
        setIsFollowed,
        setBlocked
    } = props;
    //isBlocked = true
    //isFollowed = false

    const closeOption = () => {
        props.close();
    };
    return (
        <div className="sideViewProfileOption">
            <ClickAwayListener onClickAway={closeOption}>
                <ul className="chat-popup-header-option">
                    <Link
                        onClick={() => setShowSideBlog(false)}
                        to={`/blog/view/${blogName}/${blogID}/following`}
                    >
                        <li>
                            <span>Following</span>
                        </li>
                    </Link>
                    <Link
                        onClick={() => setShowSideBlog(false)}
                        to={`/blog/view/${blogName}/${blogID}/likes`}
                    >
                        <li>
                            <span>Likes</span>
                        </li>
                    </Link>
                    {!isBlocked && !isSelf && (
                        <li
                            className="red"
                            onClick={() =>
                                block(blogName, setBlocked, setIsFollowed)
                            }
                        >
                            Block
                        </li>
                    )}
                    <li onClick={closeOption}>Close</li>
                </ul>
            </ClickAwayListener>
        </div>
    );
}
Navbar2SideViewMoreOptions.propTypes = {
    close: PropTypes.func.isRequired,
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setIsFollowed: PropTypes.func.isRequired,
    setBlocked: PropTypes.func.isRequired,
    isBlocked: PropTypes.bool,
    isSelf: PropTypes.bool
};
