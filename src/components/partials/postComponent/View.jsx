import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostComponent from './containers/PostComponent';
import Controller from './Controller';

export default function View(props) {
    const { userBlogName, posts, isFollowed } = props;

    return (
        <Controller>
            {posts &&
                posts.map((item, index) => (
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
