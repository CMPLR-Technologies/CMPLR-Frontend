import React from 'react';
import propTypes from 'prop-types';
AskPost.propTypes = {
    senderName: propTypes.string,
    content: propTypes.string
};

export default function AskPost(props) {
    const { senderName, content } = props;
    return (
        <div className="ask-body">
            <div className="ask-body-cont">
                <div className="ask-content-sender">{senderName} asked:</div>
                <div className="ask-content">{content}</div>
            </div>
        </div>
    );
}
