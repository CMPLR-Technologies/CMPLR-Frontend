import React from 'react';
import PropTypes from 'prop-types';

export default function SearchResultItemBlog(props) {
    //to do get the real img
    let { blogName, name } = props;
    return (
        <li className="search-result-blog">
            <div className="search-result-blog-section1">
                <div className="search-result-blog-section1-img">
                    <img src="https://64.media.tumblr.com/9e07830d7ed05eb280b08079edd78e8c/ee7e6ae318b625e3-d6/s96x96u_c1/40cb8d3f150bfff507762783fb4c2ec36c6cd256.jpg"></img>
                </div>
                <div className="search-result-blog-section1-text">
                    <h3>{blogName}</h3>
                    <h4>{name}</h4>
                </div>
            </div>
            <div className="search-result-blog-button">
                <button>Follow</button>
            </div>
        </li>
    );
}

SearchResultItemBlog.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired
};
