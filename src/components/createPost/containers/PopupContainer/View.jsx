import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { ProfilePic } from './ProfilePicturePopup';
import { useState } from 'react';
import TitleField from './TitleField';
import HeaderCreatePost from './Header';
import BottomMainControllers from './Bottom/BottomContainer';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import { useContext } from 'react';
import HandMadeTextEditor from '../../../RichTextEditor/View';
import useAuth from '../../../../hooks/useAuth';
import { handlePosting, reblogPost, editPost } from '../../Service';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost } from '../../Service';
import PropTypes from 'prop-types';

export default function CreateModal(props) {
    useAuth();
    const [titlePost, setTitlePost] = useState('');
    const [content, setContent] = useState('');

    const [titleEditPost, setEditTitlePost] = useState('');
    const [editContent, setEditContent] = useState('');
    const [post, setPost] = useState({});
    const [postType, setPostType] = useState('Post now');
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { postId } = useParams();
    const { reblog, edit } = props;

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

    const handleReblog = post => {
        reblogPost(post, content, navigate);
    };

    const handleEdit = () => {
        const dataBody = {
            title: titlePost,
            content: content,
            user: user
        };
        editPost(postId, dataBody, navigate);
    };

    useEffect(() => {
        if (postId !== undefined) {
            fetchPost(postId, setPost, edit, setEditTitlePost, setEditContent);
        }
    }, [postId]);
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
                                            <HeaderCreatePost
                                                reblog={reblog}
                                                parentBlogAuthor={
                                                    post?.blog &&
                                                    post.blog['blog_name']
                                                }
                                            />
                                            <div className="post-form--form">
                                                {!reblog && (
                                                    <div>
                                                        <TitleField
                                                            titlePost={
                                                                titlePost
                                                            }
                                                            editTitlePost={
                                                                titleEditPost
                                                            }
                                                            cantedit={true}
                                                            setTitlePost={
                                                                setTitlePost
                                                            }
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="editor-wrapper">
                                                        <div className="editor-slot">
                                                            <HandMadeTextEditor
                                                                content={
                                                                    content
                                                                }
                                                                editContent={
                                                                    editContent
                                                                }
                                                                cantedit={true}
                                                                setContent={
                                                                    setContent
                                                                }
                                                                reblog={reblog}
                                                                post={
                                                                    post?.post &&
                                                                    post
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <BottomMainControllers
                                                handleCloseModal={handleClose}
                                                handlePost={
                                                    reblog
                                                        ? () =>
                                                              handleReblog(post)
                                                        : edit
                                                        ? handleEdit
                                                        : handlePost
                                                }
                                                postType={postType}
                                                content={content}
                                                titlePost={
                                                    reblog ? null : titlePost
                                                }
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

CreateModal.propTypes = {
    reblog: PropTypes.bool,
    edit: PropTypes.bool
};
