import React, { useState, useEffect } from 'react';
import SearchBar from '../../navbarComponent/containers/searchBar/SearchBar';
import { LinearProgress } from '@mui/material';
import OptionsList from '../../partials/postComponent/containers/OptionsList';
import Modal from '../../partials/Modal';
import { block } from '../../partials/postComponent/Services';
import AuthBtn from '../../partials/AuthBtn';
import NoXAvailable from './NoXAvailable';
import InfiniteScroll from 'react-infinite-scroll-component';
import Axios from 'axios';
import { apiBaseUrl } from '../../../config.json';

export default function FollowersPage(props) {
    const { error, followers, isPending } = props.response;
    const { hasMore, handleScroll } = props;
    const [isOptionListOpen, setIsOptionListOpen] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMsgModalOpen, setIsMsgModalOpen] = useState(false);
    const [followResultMessage, setFollowResultMessage] = useState(null);
    const userBlogName = 'kak';
    const blogName = 'kaak';

    const searchFollower = input => {
        //send axios request
        Axios({
            method: 'get',
            url: `${apiBaseUrl}/blog/${input}/followed_by`
        }).then(res => {
            if (res.data.meta.status_code === 200) {
                if (res.data.response.followed_by) {
                    setFollowResultMessage(`${input} followed you!`);
                } else if (res.data.response.followed_by === false) {
                    setFollowResultMessage(`${input} doesn't followe you!`);
                }
            }
        });
    };

    return (
        <>
            {!followers?.length && !isPending && <NoXAvailable x="followers" />}

            {isMsgModalOpen && (
                <Modal messageHeading={`${blogName} has been blocked`}>
                    <AuthBtn
                        id="nevermind-btn"
                        text="close"
                        color="rgb(0,184,255)"
                        handleClick={() => {
                            setIsMsgModalOpen(false);
                            setIsOptionListOpen(false);
                        }}
                    />
                </Modal>
            )}
            {isModalOpen && (
                <Modal
                    messageHeading={` Are you sure you want to block ${blogName} from 
                ${userBlogName}?`}
                    messageDesc={`They won't be able to follow ${blogName}, send
                        ${blogName} messages, see ${blogName} in search
                        results, or interact with any of ${blogName}'s
                        posts.`}
                >
                    <AuthBtn
                        id="nevermind-btn"
                        text="Nevermind"
                        color="rgba(255,255,255,.65)"
                        handleClick={() => {
                            setIsModalOpen(false);
                            setIsOptionListOpen(false);
                        }}
                    />
                    <AuthBtn
                        id="block-btn"
                        text="Block"
                        color="rgb(255, 73, 47)"
                        handleClick={() => {
                            block(
                                'blogIdentifier',
                                setIsOptionListOpen,
                                setIsModalOpen,
                                setIsMsgModalOpen
                            );
                        }}
                    />
                </Modal>
            )}
            {followers?.length !== 0 && (
                <InfiniteScroll
                    dataLength={followers?.length} //This is important field to render the next data
                    next={handleScroll}
                    hasMore={hasMore}
                    loader={<LinearProgress />}
                    endMessage={<></>}
                >
                    <div className="search-area">
                        <span className="followers-num">
                            {`${followers?.length ? followers?.length : '0'} `}
                            Followers
                        </span>
                        <SearchBar
                            searchFollower={searchFollower}
                            placeHolder="Search your followers"
                        />
                    </div>
                    <div className="follow-search-result">
                        {followResultMessage}
                    </div>
                    <div className="followers-list">
                        {followers?.map((follower, index) => (
                            <div key={index} className="follower">
                                <div className="avatar">
                                    <img
                                        className="avatar-img"
                                        src={follower?.avatar}
                                        alt="Avatar"
                                        loading="eager"
                                    />
                                </div>
                                <div className="name">
                                    <span className="primary">
                                        {follower?.followerName}
                                    </span>
                                    <span className="secondary">
                                        {follower?.blogName}
                                    </span>
                                </div>
                                <div className="left-control-group">
                                    {!follower?.isFollowed && (
                                        <button className="follow-btn btn">
                                            Follow
                                        </button>
                                    )}
                                    <div className="options-btn">
                                        <button
                                            onClick={() => {
                                                setIsOptionListOpen(prev =>
                                                    prev === -1 ? index : -1
                                                );
                                            }}
                                            className="btn"
                                            data-testid="opt-btn-header-ts"
                                        >
                                            <svg
                                                viewBox="0 0 17.5 3.9"
                                                style={{
                                                    transform: 'rotate(90deg)'
                                                }}
                                                width="14"
                                                height="8"
                                                fill="rgba(var(--black), 0.65)"
                                            >
                                                <path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"></path>
                                            </svg>
                                        </button>

                                        {isOptionListOpen === index && (
                                            <OptionsList
                                                userBlogName=""
                                                blogName="a"
                                                followersPage={true}
                                                setIsOptionListOpen={
                                                    setIsOptionListOpen
                                                }
                                                setIsModalOpen={setIsModalOpen}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            )}
        </>
    );
}
