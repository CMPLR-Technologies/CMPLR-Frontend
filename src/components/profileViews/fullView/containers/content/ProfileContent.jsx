import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileSideAllPosts from '../../../mini&sideViews/sideView/ProfileSideAllPosts';
import ProfileSideOnePost from '../../../mini&sideViews/sideView/ProfileSideOnePost';
import Radar from '../../../../partials/Radar';
import { changeMobileView } from '../../Controller';
export default function ProfileContent(props) {
    const { blogName, blogID, content, postID } = props;
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        changeMobileView(setMobile);
    }, []);

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
                    <Radar noTheme={true} />
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
