import React from 'react';
import PropTypes from 'prop-types';

export default function TitleField(props) {
    const { titlePost, setTitlePost } = props;
    return (
        <>
            <div className="title-field">
                <div className="editor-wrapper">
                    <div className="editor-slot">
                        <div
                            className="editor-plain-text"
                            contentEditable="true"
                            onFocus={() => setTitlePost('')}
                        >
                            <div className="editor-placeholder">
                                {titlePost}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

TitleField.propTypes = {
    titlePost: PropTypes.string.isRequired,
    setTitlePost: PropTypes.func.isRequired
};
