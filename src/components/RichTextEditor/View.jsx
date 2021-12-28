import React from 'react';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
    AiFillCamera,
    AiOutlineUnorderedList,
    AiOutlineOrderedList,
    AiOutlineStrikethrough,
    AiOutlineLink,
    AiFillVideoCamera
} from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import { RiPaintFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
    handleChanges,
    handleHeading,
    handleActionWithoutArg,
    handleUploadImage,
    handleCreateLink,
    handleColor,
    handleUploadVideo
} from './Controller';
import PostComponent from '../partials/postComponent/containers/PostComponent';
const Input = styled('input')({
    display: 'none'
});
export default function HandMadeTextEditor(props) {
    // eslint-disable-next-line no-unused-vars
    const { setContent, reblog, post, setSpinner, editContent } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {reblog && post?.post && (
                <PostComponent
                    radar={true}
                    reblog={true}
                    padding="20px"
                    left="-20px"
                    post={post}
                />
            )}
            <div className="main-richeditor">
                <div
                    className="content"
                    contentEditable="true"
                    id="editable-content"
                    data-testid="content-postInput"
                    onInput={() => handleChanges(setContent)}
                    data-placeholder="Your text here"
                    dangerouslySetInnerHTML={{ __html: editContent }}
                ></div>
                <div className="text-editor-header">
                    <select
                        onChange={() => {
                            handleHeading('formatBlock', setContent);
                        }}
                        id="headSelector"
                    >
                        <option value="none">Heading</option>
                        <option value="H1">H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="H5">H5</option>
                        <option value="H6">H6</option>
                    </select>

                    <button
                        onClick={() =>
                            handleActionWithoutArg('to-bold-words', setContent)
                        }
                        data-element="bold"
                        type="button"
                        id="to-bold-words"
                        className="btn"
                    >
                        <AiOutlineBold />
                    </button>

                    <button
                        onClick={() =>
                            handleActionWithoutArg(
                                'to-italic-words',
                                setContent
                            )
                        }
                        data-element="italic"
                        type="button"
                        id="to-italic-words"
                        className="btn"
                    >
                        <AiOutlineItalic />
                    </button>

                    <button
                        onClick={() =>
                            handleActionWithoutArg(
                                'to-underline-words',
                                setContent
                            )
                        }
                        data-element="underline"
                        type="button"
                        id="to-underline-words"
                        className="btn"
                    >
                        <AiOutlineUnderline />
                    </button>

                    <label htmlFor="to-image-words">
                        <Input
                            onChange={e =>
                                handleUploadImage(
                                    e.target.files[0],
                                    setContent,
                                    setSpinner,
                                    user?.token
                                )
                            }
                            accept="image/*"
                            data-element="insertImage"
                            id="to-image-words"
                            type="file"
                        />

                        <AiFillCamera className="fileEffect" />
                    </label>

                    <label htmlFor="to-video-words">
                        <Input
                            onChange={e =>
                                handleUploadVideo(
                                    e.target.files[0],
                                    setContent,
                                    setSpinner,
                                    user?.token
                                )
                            }
                            id="to-video-words"
                            type="file"
                        />

                        <AiFillVideoCamera className="fileEffect" />
                    </label>

                    <button
                        onClick={() =>
                            handleActionWithoutArg(
                                'to-unorder-words',
                                setContent
                            )
                        }
                        data-element="insertUnorderedList"
                        type="button"
                        id="to-unorder-words"
                        className="btn"
                    >
                        <AiOutlineUnorderedList />
                    </button>
                    <button
                        onClick={() =>
                            handleActionWithoutArg('to-order-words', setContent)
                        }
                        data-element="insertOrderedList"
                        type="button"
                        id="to-order-words"
                        className="btn"
                    >
                        <AiOutlineOrderedList />
                    </button>
                    <button
                        onClick={() =>
                            handleActionWithoutArg(
                                'to-strike-words',
                                setContent
                            )
                        }
                        data-element="strikeThrough"
                        type="button"
                        id="to-strike-words"
                        className="btn"
                    >
                        <AiOutlineStrikethrough />
                    </button>

                    <button
                        onClick={() => handleCreateLink(setContent)}
                        data-element="createLink"
                        type="button"
                        id="to-link-words"
                        className="btn"
                    >
                        <AiOutlineLink />
                    </button>

                    <span style={{ float: 'right' }}>
                        <span>
                            <RiPaintFill className="printable_btn" />
                            <input
                                type="color"
                                data-element="hiliteColor"
                                onChange={() =>
                                    handleColor(
                                        'to-hilitecolor-words',
                                        setContent
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                                id="to-hilitecolor-words"
                                className="colorStyle"
                            />
                        </span>
                        <span style={{ marginLeft: '10px' }}>
                            <FaPencilAlt className="foreColor_btn" />
                            <input
                                type="color"
                                data-element="foreColor"
                                onChange={() =>
                                    handleColor(
                                        'to-forecolor-words',
                                        setContent
                                    )
                                }
                                style={{ cursor: 'pointer' }}
                                id="to-forecolor-words"
                                className="colorStyle"
                            />
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}

HandMadeTextEditor.propTypes = {
    setContent: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired,
    reblog: PropTypes.bool,
    post: PropTypes.object,
    editContent: PropTypes.string
};
