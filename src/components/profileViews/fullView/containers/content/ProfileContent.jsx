import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../../config.json';
import useFetch from '../../../../../hooks/useFetch';
import ProfileSideAllPosts from '../../../mini&sideViews/sideView/ProfileSideAllPosts';
import ProfileSideOnePost from '../../../mini&sideViews/sideView/ProfileSideOnePost';
import PostComponent from '../../../../partials/postComponent/containers/PostComponent';
import { changeMobileView } from '../../Controller';
import { LinearProgress } from '@mui/material';

export default function ProfileContent(props) {
    const { blogName, blogID, content, postID } = props;
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        changeMobileView(setMobile);
    }, []);
    const {
        error,
        data: posts,
        isPending
    } = useFetch(`${apiBaseUrl}/profile/likes/${blogName}`);

    window.addEventListener('resize', () => changeMobileView(setMobile));
    return (
        <div className="profile-full-header-content">
            {content === 'posts' &&
                (postID ? (
                    <div className="posts-region">
                        <section className="normal-layout">
                            <ProfileSideOnePost
                                blogName={blogName}
                                blogID={blogID}
                                sidePostID={postID}
                                noTheme={true}
                            />
                        </section>
                    </div>
                ) : (
                    <ProfileSideAllPosts blogName={blogName} noTheme={true} />
                ))}
            {!mobile && (
                <div className="profile-full-header-content-side">
                    RECENTLY LIKED
                    {error ? (
                        <div className="no-data-error">{"Couldn't load"}</div>
                    ) : isPending ? (
                        <LinearProgress />
                    ) : posts && posts.post.length > 0 ? (
                        <PostComponent
                            post={{
                                blog: posts.post[0].blog,
                                post: posts.post[0].post
                            }}
                            blogPage={true}
                            userBlogName={blogName}
                            themeDeactivate={true}
                        />
                    ) : (
                        <div className="no-data-error">No Liked Posts</div>
                    )}
                </div>
            )}
        </div>
    );
}

ProfileContent.propTypes = {
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string.isRequired,
    content: PropTypes.string,
    postID: PropTypes.string
};
