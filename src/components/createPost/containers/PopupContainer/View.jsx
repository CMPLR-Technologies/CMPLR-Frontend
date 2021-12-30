import React, { useContext, useEffect } from 'react';
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
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';

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
    // eslint-disable-next-line react/prop-types
    const { reblog, edit, askFetch } = props;
    const blogName = JSON.parse(localStorage.getItem('user'))?.blogName;
    //for the blogNames dropdown
    const [postBlogName, setPostBlogName] = useState(user?.blogName);

    const theme = useContext(ThemeContext)[0];
    const css = `
        .post-container {
            background-color: rgb(${themes[theme]?.white});
            color: rgb(${themes[theme]?.black});
        }
        .post-container-inner{
            color: rgb(${themes[theme]?.black});
        }
        .post-form--header{
            color: rgba(${themes[theme]?.black});
        }
        .caption{
            color:rgba(${themes[theme]?.black});
        }
        .icon_arrow_carrot_down{
            color:rgba(${themes[theme]?.black});
        }
        .editor-plain-text{
            color:rgba(${themes[theme]?.black});
        }
        .editor-plain-text:empty::before{
            color:rgba(${themes[theme]?.black},0.8);
        }
        .editor-placeholder{
            color:rgba(${themes[theme]?.black},0.65);
        }
        .editor-slot{
            background:rgba(${themes[theme]?.white});
        }
        .editorDiv{
            color:rgba(${themes[theme]?.black});
            background:rgba(${themes[theme]?.black},0.01);
        }
        .editorDiv:empty::before{
            color:rgba(${themes[theme]?.black},0.8);
        }
        .tx-button{
            color:rgba(${themes[theme]?.white});
            background-color:rgba(${themes[theme]?.black},0.5);
        }
        .split-button{
            color:rgba(${themes[theme]?.white});
            background-color:rgba(${themes[theme]?.accent});
        }
        .to-post-button{
            color:rgba(${themes[theme]?.white});
            background-color:rgba(${themes[theme]?.accent});
        }
        .to-post-button:disabled{
            background-color:rgba(${themes[theme]?.accent},0.4);
        }
        .dropdown-area{
            color:rgba(${themes[theme]?.white});
            background-color:rgba(${themes[theme]?.accent});
            border-color:rgba(${themes[theme]?.accent});
        }
        .chipStyled{
            color:rgba(${themes[theme]?.black});
            background-color:rgba(${themes[theme]?.white});
        }
        .chipStyled:hover{
            color:rgba(${themes[theme]?.accent});
            background-color:rgba(${themes[theme]?.white});
        }
    `;

    const handleClose = () => {
        navigate('/dashboard');
    };
    const handlePost = () => {
        setSpinnerPost(true);
        const trimmedTitle = titlePost.trim();
        const dataBody = {
            title: trimmedTitle,
            content: content,
            state: postType === 'Post privately' ? 'private' : 'publish',
            type: 'text',
            // eslint-disable-next-line camelcase
            blog_name: postBlogName,
            tags: tags
        };
        console.log('handle body ', dataBody);

        handlePosting(dataBody, handleClose, user?.token, setSpinnerPost);
    };

    // eslint-disable-next-line no-unused-vars
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
        const trimmedTitle = titlePost?.trim();
        const dataBody = {
            title: trimmedTitle,
            content: content,
            state: postType === 'Post privately' ? 'private' : 'publish',
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
            <style>{css}</style>
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
                                    <ProfilePic user={user} />
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
