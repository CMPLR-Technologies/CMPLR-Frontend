import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
export default function TitleField(props) {
    const { setTitlePost, editTitlePost } = props;
    const handleChangeTitle = () => {
        console.log(
            'title content ',
            document.getElementById('content-title-cpost').innerHTML
        );
        setTitlePost(document.getElementById('content-title-cpost').innerHTML);
    };
    useEffect(() => {
        if (document.getElementById('content-title-cpost')) {
            document
                .getElementById('content-title-cpost')
                .addEventListener('paste', e => e.preventDefault());
        }
    }, []);
    return (
        <>
            <div className="title-field">
                <div className="editor-wrapper">
                    <div className="editor-slot titlewrapinPost">
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
    setTitlePost: PropTypes.func.isRequired,
    editTitlePost: PropTypes.string
};
