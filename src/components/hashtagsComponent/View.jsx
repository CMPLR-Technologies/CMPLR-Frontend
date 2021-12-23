import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComponent from '../partials/postComponent/containers/PostComponent';
import SidebarTag from './containers/SidebarTag';
import { getHashtagData, getHashtagInformation } from './Service';
import MobileHashtagBar from './containers/MobileTopBar';

export default function Hashtag() {
    const { tag } = useParams();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);
    const [hashtag, setHashtag] = useState();
    const [loadingHashtag, setLoadingHashtag] = useState(true);

    useEffect(() => {
        getHashtagData(tag, setPosts, setIsPending, setError);
        getHashtagInformation(tag, setHashtag, setIsPending, setError);
    }, []);

    return (
        <>
            <MobileHashtagBar loading={loadingHashtag} />
            <div className="dashboard">
                {posts &&
                    posts.map((post, index) => {
                        if (posts.length === index + 1) {
                            return (
                                <div>
                                    <PostComponent key={index} post={post} />
                                </div>
                            );
                        } else {
                            return <PostComponent key={index} post={post} />;
                        }
                    })}

                {error && (
                    <div className="no-data-error">{"Couldn't load"}</div>
                )}
                {isPending && <LinearProgress />}

                <SidebarTag />
            </div>
        </>
    );
}
