import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostComponent from './containers/PostComponent';
import { apiBaseUrl } from '../../../config.json';

export default function View(props) {
    const { userBlogName, posts, isFollowed, radar } = props;
    const [response, setResponse] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${apiBaseUrl}/post`
        }).then(res => {
            setResponse(res.data);
        });
    }, []);
    return (
        <>
            {response &&
                response.map((item, index) => (
                    <PostComponent
                        key={index}
                        userBlogName={userBlogName}
                        post={item}
                        isFollowed={isFollowed}
                        radar={radar}
                    />
                ))}
        </>
    );
}
