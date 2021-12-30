import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function BiggestFansItem(props) {
    let { blogName, blogId, photo, shape } = props;
    return (
        <Link className="aBox" to={`/blog/view/${blogName}/${blogId}/posts`}>
            <div className="bigBox">
                <div className="header-box">
                    <img src="https://64.media.tumblr.com/68f67b7fb8a82aebb0c1413f15762001/c24939a002466818-da/s2048x3072/81a0a5a99dfac15132d02ca1ca8d539ca0b14519.png" />
                </div>
                <div className="Bigcontent">
                    <div className={`img ${shape}`}>
                        <img src={photo} />
                    </div>
                    <div className="name">{blogName}</div>
                </div>
            </div>
        </Link>
    );
}
BiggestFansItem.propTypes = {
    blogName: PropTypes.string,
    blogId: PropTypes.number,
    photo: PropTypes.string,
    shape: PropTypes.string
};
