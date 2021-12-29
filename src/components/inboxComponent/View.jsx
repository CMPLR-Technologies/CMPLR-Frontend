import { LinearProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/containers/PostComponent';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Inbox() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [InboxMsgs, setInboxMsgs] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const getInboxMsgs = () => {
        axios({
            method: 'get',
            url: `${apiBaseUrl}/user/inbox/${user?.blogName}?page=${page}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${user?.token}`
            }
        })
            .then(res => {
                let newArr = [];
                if (res?.data?.response?.messages?.length !== 0) {
                    newArr = res?.data?.response?.messages;
                }
                if (res?.data?.response?.messages?.length < 15) {
                    setHasMore(false);
                }
                setInboxMsgs([...InboxMsgs, ...newArr]);
                const newPage = page + 1;
                setPage(newPage);
            })
            .catch(() => {
                setError(true);
            });
    };

    const handleScroll = () => {
        if (hasMore) {
            getInboxMsgs();
        }
    };

    useEffect(() => {
        handleScroll();
        // axios({
        //     method: 'get',
        //     url: `${apiBaseUrl}/user/inbox/${user?.blogName}`,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //         Authorization: `Bearer ${user?.token}`
        //     }
        // })
        //     .then(res => {
        //         if (res?.data?.meta?.status_code === 200)
        //             setMessages(res?.data?.response?.messages);
        //     })
        //     .catch(() => {});
    }, []);
    const css = `
    .ask-container-inbox-page{
        display:flex;
        flex-direction:column;
        margin-top:80px;
    }
    `;
    console.log(InboxMsgs);
    return (
        <InfiniteScroll
            dataLength={InboxMsgs?.length} //This is important field to render the next data
            next={handleScroll}
            hasMore={hasMore}
            loader={<LinearProgress />}
            endMessage={<></>}
        >
            <div className="ask-container-inbox-page">
                {InboxMsgs &&
                    InboxMsgs.map(({ message, sender, reciever }, index) => (
                        <PostComponent
                            key={index}
                            post={{
                                blog: { avatar: sender?.avatar },
                                post: {
                                    content: message?.content,
                                    post_id: message?.id
                                }
                            }}
                            userBlogName={user?.blogName}
                            ask={true}
                            senderName={sender?.primaryBlogName}
                            radar={true}
                        />
                    ))}
                <style>{css}</style>
            </div>
        </InfiniteScroll>
    );
}
