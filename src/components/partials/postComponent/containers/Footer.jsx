import Axios from 'axios';
import React, { useState } from 'react';
import CopyLink from './CopyLink.svg';
import DeleteBtn from './DeleteBtn.svg';
import EditBtn from './EditBtn.svg';
import LoveBtn from './LoveBtn.svg';
import Note from './Note.svg';
import ReblogBtn from './ReblogBtn.svg';
import ShareBtn from './ShareBtn.svg';
import { apiBaseUrl } from '../../../../config.json';
import Modal from '../../Modal';
import AuthBtn from '../../AuthBtn';

export default function Footer(props) {
    const { numberNotes, isAuthor, postLink, reblogKey, postId } = props;
    const [isShareListOpen, setIsShareListOpen] = useState(false);
    const [loveFillColor, setLoveFillColor] = useState('gray');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleShareList = () => {
        setIsShareListOpen(!isShareListOpen);
    };
    const copyLink = () => {
        navigator.clipboard.writeText(postLink);
        document.getElementById(`copy-btn${postId}`).textContent =
            'Link Copied!';
        setTimeout(() => {
            document.getElementById(`copy-btn${postId}`).textContent =
                'Copy link';
        }, 2000);
    };

    const handleLikePost = () => {
        const url =
            loveFillColor === 'gray'
                ? `${apiBaseUrl}/user/like`
                : `${apiBaseUrl}/user/unlike`;
        Axios({
            method: 'POST',
            url: url,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                id: postId,
                reblogKey: reblogKey
            }
        }).then(res => {
            if (res.status === 200) {
                setLoveFillColor(
                    loveFillColor === 'gray' ? 'rgb(255,73,47)' : 'gray'
                );
            }
        });
    };

    const deletePost = () => {
        Axios({
            method: 'DELETE',
            url: `${apiBaseUrl}/post/delete`,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                id: postId
            }
        }).then(res => {
            if (res.status === 200) {
                setIsModalOpen(false);
            }
        });
    };

    return (
        <footer className="post-footer-icons">
            {isModalOpen && (
                <Modal
                    messageHeading={` Are you sure you want to delete this post?`}
                >
                    <AuthBtn
                        id="nevermind-btn"
                        text="Cancel"
                        color="rgba(255,255,255,.65)"
                        handleClick={() => {
                            setIsModalOpen(false);
                        }}
                    />
                    <AuthBtn
                        id="block-btn"
                        text="Ok"
                        color="rgb(0, 184, 255)"
                        handleClick={() => {
                            deletePost();
                        }}
                    />
                </Modal>
            )}
            <div className="notes-count">
                {numberNotes > 1
                    ? `${numberNotes} notes`
                    : numberNotes === undefined || numberNotes === 0
                    ? ''
                    : `${numberNotes} note`}
            </div>
            {isShareListOpen && (
                <div className="share-options">
                    <div className="options">
                        <div onClick={() => copyLink()} className="list ">
                            <div className="circled-border">
                                <CopyLink />
                            </div>
                            <div
                                className="opt-btn copy-btn btn"
                                id={`copy-btn${postId}`}
                            >
                                Copy Link
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="footer-icons">
                <button onClick={() => toggleShareList()} className="icon">
                    <ShareBtn />
                </button>
                <button className="icon">
                    <Note />
                </button>
                <button className="icon">
                    <ReblogBtn />
                </button>
                <button onClick={() => handleLikePost()} className="icon ">
                    <LoveBtn fillColor={loveFillColor} />
                </button>
                {isAuthor && (
                    <>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="icon"
                        >
                            <DeleteBtn />
                        </button>
                        <button className="icon">
                            <EditBtn />
                        </button>
                    </>
                )}
            </div>
        </footer>
    );
}
