import React, { useState } from 'react';
import PostComponent from './containers/PostComponent';
import Controller from './Controller';

export default function View(props) {
    const { userBlogName, postResponse, isFollowed } = props;

    //comment from here
    const textPost = {
        postType: 'text',
        postTitle: 'd7ko',
        postText: 'd7kawya'
    };

    const imagePost = {
        postType: 'image',
        imageUrl:
            'https://64.media.tumblr.com/2b6e72c559394259976170140737732a/a722176fd8a580bd-7a/s540x810/7599caa6eceab157e9a643c609b174d8413fabf1.png',
        caption: 'my image in cmp',
        altText: 'photo about friend taking a photo in university'
    };

    const audioPost = {
        postType: 'audio',
        url: 'https://a.tumblr.com/tumblr_r3kr7rlBly1ztmy6mo1.mp3?play_key=e6ba8f023e92bbb5aaf06052cd0c6551',
        track: 'gold',
        artist: 'alaa',
        description:
            'Senate leaders are writing legislation to repeal and replace the Affordable Care Act without a single hearing on the bill and without an open drafting session.'
    };

    const videoPost = {
        postType: 'video',
        url: 'https://va.media.tumblr.com/tumblr_r3kt8jhh6v1ztmy6m.mp4'
    };
    const [resposne, setResponse] = useState({});
    setTimeout(() => {
        setResponse({
            blogName: 'kholdbold',
            blogUrl: 'ddd',
            blogEmail: 'dsada',
            postTime: 'December 4th, 7:44 AM',
            content: [textPost, audioPost, videoPost, imagePost],
            tagsArray: ['pain', 'kaaaak', 'joker'],
            postLink:
                'https://kholdbold.tumblr.com/post/669549196154634240/aaaaaaaaaa'
        });
    }, 2000);

    //end of comment

    return (
        <Controller>
            <PostComponent
                userBlogName="kholdbold" //change to {userBlogName}
                post={resposne} //change to postResponse
                isFollowed={false} //change to isFollowed
            />
        </Controller>
    );
}
