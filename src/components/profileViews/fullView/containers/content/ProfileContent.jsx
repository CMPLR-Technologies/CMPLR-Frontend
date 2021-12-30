import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiBaseUrl } from '../../../../../config.json';
import useFetch from '../../../../../hooks/useFetch';
import ProfileSideAllPosts from '../../../mini&sideViews/sideView/ProfileSideAllPosts';
import ProfileSideOnePost from '../../../mini&sideViews/sideView/ProfileSideOnePost';
import PostComponent from '../../../../partials/postComponent/containers/PostComponent';
import { changeMobileView } from '../../Controller';
import { LinearProgress } from '@mui/material';
import AskComponent from '../../../../askComponent/View';

/**
 * @function ProfileContent
 * @description
 * @property {string} blogID
 * @property {string} blogName
 * @property {string} postID - is '' when showing all posts (default behavior), else on click on image in mini hover view: is set to postID of the post of image
 * @property {string} content - a string gotten from url params, used to specify the type of content in Blog view (likes, following, posts ..etc)
 * @returns {Component}
 */

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
            {/* //TODO Add ask component */}
            {content === 'ask' && (
                <div className="posts-region">
                    <section className="normal-layout">
                        <AskComponent />
                    </section>
                </div>
            )}

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
                    <p>RECENTLY LIKED</p>
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
