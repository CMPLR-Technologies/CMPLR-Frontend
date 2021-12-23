import React from 'react';
import PropTypes from 'prop-types';
import PostButton from './PostButton';

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
