import React from 'react';
import PropTypes from 'prop-types';
import ProfileSideAllPosts from '../../../mini&sideViews/sideView/ProfileSideAllPosts';
import ProfileSideOnePost from '../../../mini&sideViews/sideView/ProfileSideOnePost';
export default function ProfileContent(props) {
    const { blogName, blogID, content, postID } = props;

    return (
        <div>
            {postID ? (
                <ProfileSideOnePost
                    blogName={blogName}
                    blogID={blogID}
                    sidePostID={postID}
                    noTheme={true}
                />
            ) : (
                <ProfileSideAllPosts blogName={blogName} noTheme={true} />
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
