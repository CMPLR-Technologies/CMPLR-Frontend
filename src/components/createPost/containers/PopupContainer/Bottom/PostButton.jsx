import { CircularProgress, Popover } from '@mui/material';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import DropDownPostList from './DropDownPostList';

/**
 * Button to post
 * @function PostButton
 * @property {function} handlePost
 * @property {string} postType
 * @property {function} setPostType
 * @property {string} content
 * @property {string} titlePost
 * @property {bool} spinnerPost
 * @description used to handle when user presses on the post button
 * @returns {Component}
 */
export default function PostButton(props) {
    const {
        handlePost,
        postType,
        setPostType,
        content,
        titlePost,
        spinnerPost
    } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopover = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPost = Boolean(anchorEl);
    return (
        <>
            <div className="post-form-save-button">
                <div className="split-button">
                    {spinnerPost && (
                        <CircularProgress
                            style={{
                                width: '20px',
                                height: '20px',
                                color: 'white',
                                marginLeft: '2px',
                                cursor: 'wait'
                            }}
                        />
                    )}
                    <button
                        className="to-post-button"
                        data-testid="post-postBtn"
                        onClick={handlePost}
                        disabled={content === ''}
                        dataTestid="postcontent_btn_createPost"
                    >
                        {titlePost === null
                            ? 'Reblog'
                            : postType === 'Post now'
                            ? 'Post'
                            : 'Post privately'}
                    </button>
                    <div
                        aria-describedby="popover_post"
                        className="dropdown-area"
                        onClick={handlePopover}
                    >
                        <RiArrowDropDownLine />
                    </div>
                    <Popover
                        id={'popover_post'}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        open={openPost}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                    >
                        <DropDownPostList
                            postType={postType}
                            setPostType={setPostType}
                        />
                    </Popover>
                </div>
            </div>
        </>
    );
}

PostButton.propTypes = {
    handlePost: PropTypes.func.isRequired,
    postType: PropTypes.string.isRequired,
    setPostType: PropTypes.func.isRequired,
    content: PropTypes.any.isRequired,
    titlePost: PropTypes.string.isRequired,
    spinnerPost: PropTypes.bool.isRequired
};
