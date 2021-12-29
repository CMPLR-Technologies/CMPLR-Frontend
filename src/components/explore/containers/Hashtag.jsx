import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { followHashtag, getIsFollowed, unfollowHashtag } from '../Service';
import { UserContext } from '../../../contexts/userContext/UserContext';

export default function Hashtag(props) {
    const { name, firstImg, secondImg, link, color, background, border } =
        props;
    const [toFollow, setToFollow] = useState(true);

    const { user } = useContext(UserContext);

    useEffect(() => {
        getIsFollowed(name, user?.token, setToFollow);
    }, []);
    return (
        <div
            className="explore-hashtag"
            style={{ background: background, borderColor: border }}
        >
            <a href={link}>
                <span style={{ color: color }}>{name}</span>
                <div className="explore-hashtag-images">
                    <img src={firstImg} />
                    <img src={secondImg} />
                </div>
            </a>
            <button
                style={{ color: background, background: color }}
                onClick={() => {
                    toFollow
                        ? followHashtag(name, user?.token, setToFollow)
                        : unfollowHashtag(name, user?.token, setToFollow);
                }}
            >
                {toFollow ? 'Follow' : 'UnFollow'}
            </button>
        </div>
    );
}
Hashtag.propTypes = {
    name: PropTypes.string,
    firstImg: PropTypes.string,
    secondImg: PropTypes.string,
    link: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    border: PropTypes.string
};
