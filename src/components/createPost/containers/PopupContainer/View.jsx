import React from 'react';
import Modal from '@mui/material/Modal';
import { ProfilePic } from './ProfilePicturePopup';
import { useState } from 'react';
import TitleField from './TitleField';
import HeaderCreatePost from './Header';
import BottomMainControllers from './Bottom/BottomContainer';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import { useContext } from 'react';
import HandMadeTextEditor from '../../../RichTextEditor/View';
import { handlePosting } from '../../Service';
import { useNavigate } from 'react-router-dom';

export default function CreateModal() {
    const [titlePost, setTitlePost] = useState('');
    const [content, setContent] = useState('');
    const [postType, setPostType] = useState('Post now');
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const handleClose = () => {
        navigate('/dashboard');
    };

    const handlePost = () => {
        const dataBody = {
            title: titlePost,
            content: content,
            user: user
        };

        handlePosting(dataBody, navigate);
    };

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/');
    //     }
    // }, []);

    return (
        <>
            <Modal
                open={true}
                onClose={handleClose}
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
                                                        setTitlePost={
                                                            setTitlePost
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <div className="editor-wrapper">
                                                        <div className="editor-slot">
                                                            <HandMadeTextEditor
                                                                setContent={
                                                                    setContent
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <BottomMainControllers
                                                handleCloseModal={handleClose}
                                                handlePost={handlePost}
                                                postType={postType}
                                                content={content}
                                                titlePost={titlePost}
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
