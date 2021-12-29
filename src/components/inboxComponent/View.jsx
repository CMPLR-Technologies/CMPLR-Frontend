import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../../config.json';
import PostComponent from '../partials/postComponent/containers/PostComponent';

export default function Inbox() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: `${apiBaseUrl}/user/inbox/${user?.blogName}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${user?.token}`
            }
        })
            .then(res => {
                if (res?.data?.meta?.status_code === 200)
                    setMessages(res?.data?.response?.messages);
            })
            .catch(() => {});
    }, []);
    const css = `
    .ask-container-inbox-page{
        display:flex;
        flex-direction:column;
        margin-top:80px;
    }
    `;
    return (
        <div className="ask-container-inbox-page">
            {messages.map(({ message, sender, reciever }, index) => (
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
    );
}
