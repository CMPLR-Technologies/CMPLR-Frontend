import React from 'react';
import PropTypes from 'prop-types';
export default function TitleField(props) {
    const { setTitlePost, editTitlePost } = props;
    const handleChangeTitle = () => {
        setTitlePost(document.getElementById('content-title-cpost').innerHTML);
    };
    return (
        <>
            <div className="title-field">
                <div className="editor-wrapper">
                    <div className="editor-slot">
                        <div
                            className="editor-plain-text"
                            contentEditable="true"
                            data-testid="title-postInput"
                            id="content-title-cpost"
                            onInput={handleChangeTitle}
                            data-placeholder="Title"
                        >
                            {editTitlePost}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

TitleField.propTypes = {
    // titlePost: PropTypes.string.isRequired,
    setTitlePost: PropTypes.func.isRequired
};
