import React from 'react';
import PropTypes from 'prop-types';
import PostButton from './PostButton';

/**
 * Bottom Controller for Create-post
 * @function BottomMainControllers
 * @property {function} handleCloseModal
 * @property {function} handlePost
 * @property {function} setPostType
 * @property {string} content
 * @property {string} titlePost
 * @property {string} postType
 * @property {string} spinnerPost
 * @description handle both cancel/post in the create post popup
 * @returns {Component}
 */
export default function BottomMainControllers(props) {
    const {
        handleCloseModal,
        handlePost,
        content,
        titlePost,
        postType,
        setPostType,
        spinnerPost
    } = props;

    return (
        <>
            <div className="post-form-bottom">
                <div className="post-form--controls">
                    <div className="controls-container">
                        <div className="control-left">
                            <button
                                onClick={handleCloseModal}
                                className="tx-button"
                                data-testid="cancel-postBtn"
                                dataTestid="closepop_btn_createPost"
                            >
                                Close
                            </button>
                        </div>
                        <div className="control-right">
                            <div>
                                <ul className="social-buttons">
                                    <li className="social-button">
                                        <label className="social-button--twitter"></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="control-right">
                            <PostButton
                                content={content}
                                titlePost={titlePost}
                                handlePost={handlePost}
                                postType={postType}
                                setPostType={setPostType}
                                spinnerPost={spinnerPost}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

BottomMainControllers.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    handlePost: PropTypes.func.isRequired,
    postType: PropTypes.string.isRequired,
    setPostType: PropTypes.func.isRequired,
    content: PropTypes.any.isRequired,
    titlePost: PropTypes.string.isRequired,
    spinnerPost: PropTypes.bool.isRequired
};
