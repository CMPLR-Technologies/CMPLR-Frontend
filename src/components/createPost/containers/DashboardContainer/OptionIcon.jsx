import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { ProfilePic } from '../PopupContainer/ProfilePicturePopup';
import { useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import TitleField from '../PopupContainer/TitleField';
import HeaderCreatePost from '../PopupContainer/Header';
import BottomMainControllers from '../PopupContainer/Bottom/BottomContainer';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import { useContext } from 'react';
import HandMadeTextEditor from '../../../RichTextEditor/View';

export default function OptionIcon(props) {
    const { typeName, draw, fill } = props;
    const [open, setOpen] = React.useState(false);
    const [titlePost, setTitlePost] = useState('Title');
    const [postType, setPostType] = useState('Post now');

    const { user } = useContext(UserContext);

    const handleOpen = () => {
        console.log(user);
        setOpen(true);
    };
    const handleCloseModal = () => setOpen(false);

    const handlePost = () => {
        console.log('You want to post a post');
    };

    return (
        <>
            <li>
                <button
                    onClick={handleOpen}
                    className="btncreateoption"
                    aria-label="Text"
                >
                    <span className="spanStyle">
                        <svg
                            viewBox="0 0 20.8 13"
                            height="35"
                            width="40"
                            fill={fill}
                        >
                            <path d={draw}></path>
                        </svg>
                    </span>
                    {typeName}
                </button>
            </li>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ overflowY: 'auto' }}
            >
                <div className="v-center-outer">
                    <div className="v-center-inner">
                        <div className="v-center-content">
                            <div
                                className="post-form-modal-content"
                                aria-details="this is the content box"
                            >
                                <div className="post-form">
                                    <ProfilePic />
                                    <div className="post-container">
                                        <div className="post-container-inner">
                                            {/**---------------------First hazemkak */}
                                            <HeaderCreatePost />
                                            <div className="post-form--form">
                                                <div>
                                                    <TitleField
                                                        titlePost={titlePost}
                                                        setTitlePost={
                                                            setTitlePost
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <div className="editor-wrapper">
                                                        <div className="editor-slot">
                                                            <HandMadeTextEditor />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <BottomMainControllers
                                                handleCloseModal={
                                                    handleCloseModal
                                                }
                                                handlePost={handlePost}
                                                postType={postType}
                                                setPostType={setPostType}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

OptionIcon.propTypes = {
    draw: PropTypes.string.isRequired,
    typeName: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired
};
