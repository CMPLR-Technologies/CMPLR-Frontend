import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostComponent from './containers/PostComponent';
import Controller from './Controller';
import { apiBaseUrl } from '../../../config.json';

export default function View(props) {
    const { userBlogName, isFollowed } = props;
    const [response, setResponse] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${apiBaseUrl}/post`
        }).then(res => {
            setResponse(res.data);
        });
    }, []);

    //end of comment

    return (
        <Controller>
            {response &&
                response.map((item, index) => (
                    <PostComponent
                        key={index}
                        userBlogName={userBlogName}
                        post={item}
                        isFollowed={isFollowed}
                    />
                ))}
        </Controller>
    );
}
