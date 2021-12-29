import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { ProfilePic } from './ProfilePicturePopup';
import { useState } from 'react';
import TitleField from './TitleField';
import HeaderCreatePost from './Header';
import BottomMainControllers from './Bottom/BottomContainer';
import HandMadeTextEditor from '../../../RichTextEditor/View';
import { handlePosting, reblogPost, editPost } from '../../Service';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost } from '../../Service';
import PropTypes from 'prop-types';
import TagsInput from './Bottom/TagsInput';
import { AnswerQuestion } from '../../../askComponent/Service';

export default function CreateModal(props) {
    const [spinner, setSpinner] = useState(false);
    const [spinnerPost, setSpinnerPost] = useState(false);
    const [titlePost, setTitlePost] = useState('');
    const [content, setContent] = useState('');

    const [titleEditPost, setEditTitlePost] = useState('');
    const [editContent, setEditContent] = useState(null);
    const [post, setPost] = useState({});
    const [tags, setTags] = useState([]);
    const [postType, setPostType] = useState('Post now');
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const { postId, senderName } = useParams();
    const { reblog, edit, askFetch } = props;
    const blogName = JSON.parse(localStorage.getItem('user'))?.blogName;
    //for the blogNames dropdown
    const [postBlogName, setPostBlogName] = useState(user?.blogName);

    const handleClose = () => {
        navigate('/dashboard');
    };
    const handlePost = () => {
        setSpinnerPost(true);
        //draft private publish
        const dataBody = {
            title: titlePost,
            content: content,
            state: postType === 'Post privately' ? 'private' : 'publish',
            type: 'text',
            // eslint-disable-next-line camelcase
            blog_name: postBlogName,
            tags: tags
        };

        handlePosting(dataBody, handleClose, user?.token, setSpinnerPost);
    };

    const handleReblog = post => {
        reblogPost(post, content, navigate);
    };

    const handleAnswerQues = () => {
        AnswerQuestion(
            postId,
            `Question: ${post?.post?.content}\n Answer:${content}`,
            user?.token,
            'publish'
        )
            .then(res => {
                if (res === 1) navigate('/dashboard');
            })
            .catch(() => {});
    };

    const handleEdit = () => {
        const dataBody = {
            title: titlePost,
            content: content,
            state:
                postType === 'Post privately'
                    ? 'private'
                    : postType === 'Save as draft'
                    ? 'draft'
                    : 'publish',
            type: 'text',
            // eslint-disable-next-line camelcase
            blog_name: user?.blogName,
            tags: tags,
            user: user
        };
        editPost(postId, blogName, dataBody, navigate, user?.token);
    };

    useEffect(() => {
        if (postId !== undefined) {
            fetchPost(
                postId,
                blogName,
                setPost,
                edit,
                setEditTitlePost,
                setEditContent,
                user?.token
            );
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
                                            <HeaderCreatePost
                                                reblog={reblog}
                                                parentBlogAuthor={
                                                    post?.blog &&
                                                    post.blog['blog_name']
                                                }
                                                spinner={spinner}
                                                postBlogName={postBlogName}
                                                setPostBlogName={
                                                    setPostBlogName
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
                                                                setSpinner={
                                                                    setSpinner
                                                                }
                                                                content={
                                                                    content
                                                                }
                                                                editContent={
                                                                    editContent &&
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
                                                                askFetch={
                                                                    askFetch
                                                                }
                                                                senderName={
                                                                    senderName
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*----------------TAGS---------------*/}
                                                <TagsInput
                                                    tags={tags}
                                                    setTags={setTags}
                                                />
                                            </div>
                                            <BottomMainControllers
                                                handleCloseModal={handleClose}
                                                handlePost={
                                                    askFetch
                                                        ? () =>
                                                              handleAnswerQues()
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
                                                spinnerPost={spinnerPost}
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
