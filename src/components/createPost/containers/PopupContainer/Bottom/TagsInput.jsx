import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

/**
 * Hashtag input
 * @function TagsInput
 * @property {function} setTags
 * @property {array} tags
 * @description used to input hashtags to the post and handle any changes in hashtags
 * @returns {Component}
 */
export default function TagsInput(props) {
    const { setTags, tags } = props;
    const [content, setContent] = useState('');

    const handleEnterKey = e => {
        //13 is keyCode of Enter
        if (e.keyCode === 13 && content?.length > 0) {
            let newTags = tags;
            newTags.push(content);
            setTags(newTags);
            setContent('');
        }
    };

    return (
        <div className="post-form--footer">
            <div className="post-form--tag-editor">
                <div className="tag-input-wrapper">
                    <div className="elementInside">
                        <div className="editor-slot">
                            <input
                                tabIndex="0"
                                id="tagsEditor"
                                value={content}
                                className="editorDiv"
                                contentEditable="true"
                                onKeyDown={handleEnterKey}
                                onChange={e => setContent(e?.target?.value)}
                                placeholder="#tags"
                                data-testid="addhash_btn_createPost"
                            />
                            <div className="containerofchip">
                                <Stack direction="row" spacing={0}>
                                    {tags?.map((tag, i) => {
                                        return (
                                            <Chip
                                                variant="outlined"
                                                className="chipStyled"
                                                key={i}
                                                label={'#' + tag}
                                                size="small"
                                            />
                                        );
                                    })}
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

TagsInput.propTypes = {
    tags: PropTypes.array.isRequired,
    setTags: PropTypes.func.isRequired
};
