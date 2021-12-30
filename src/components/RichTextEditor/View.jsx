import React, { useContext } from 'react';
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
import { Popover } from '@mui/material';
import {
    handleChanges,
    handleHeading,
    handleActionWithoutArg,
    handleUploadImage,
    handleCreateLink,
    handleColor,
    handleUploadVideo
} from './Controller';
import Input from '@mui/material/Input';
import PostComponent from '../partials/postComponent/containers/PostComponent';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
const InputCam = styled('input')({
    display: 'none'
});

export default function HandMadeTextEditor(props) {
    // eslint-disable-next-line no-unused-vars
    const {
        setContent,
        reblog,
        askFetch,
        post,
        setSpinner,
        editContent,
        senderName
    } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [link, setLink] = React.useState('https://');
    const handleOpenLinkInput = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const openPost = Boolean(anchorEl);

    const handleEnterKey = e => {
        //13 is keyCode of Enter
        if (e.keyCode === 13 && link?.length > 0) {
            handleCreateLink(link, setLink, handleClose, setContent);
        }
    };

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
            {askFetch && !reblog && post?.post && (
                <PostComponent
                    radar={true}
                    askFetch={askFetch}
                    senderName={senderName}
                    ask={true}
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
                        dataTestid="selectHeading_btn_texteditor"
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
                        dataTestid="bold_btn_texteditor"
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
                        dataTestid="italic_btn_texteditor"
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
                        dataTestid="underline_btn_texteditor"
                    >
                        <AiOutlineUnderline />
                    </button>

                    <label htmlFor="to-image-words">
                        <InputCam
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
                            dataTestid="image_btn_texteditor"
                        />

                        <AiFillCamera className="fileEffect" />
                    </label>

                    <label htmlFor="to-video-words">
                        <InputCam
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
                            dataTestid="video_btn_texteditor"
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
                        dataTestid="unorder_btn_texteditor"
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
                        dataTestid="order_btn_texteditor"
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
                        dataTestid="strike_btn_texteditor"
                    >
                        <AiOutlineStrikethrough />
                    </button>

                    <button
                        onClick={handleOpenLinkInput}
                        //handleCreateLink(setContent)
                        data-element="createLink"
                        type="button"
                        id="to-link-words"
                        className="btn"
                        dataTestid="link_btn_texteditor"
                    >
                        <AiOutlineLink />
                    </button>
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
                        <Input
                            value={link}
                            onKeyDown={handleEnterKey}
                            onChange={e => {
                                setLink(e.target.value);
                            }}
                            placeholder="enter url"
                            size="small"
                            style={{ padding: '0 5px' }}
                            dataTestid="inlink_btn_texteditor"
                        />
                    </Popover>

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
                                dataTestid="backcolor_btn_texteditor"
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
                                dataTestid="forecolor_btn_texteditor"
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
    editContent: PropTypes.string,
    askFetch: PropTypes.any,
    senderName: PropTypes.any
};
