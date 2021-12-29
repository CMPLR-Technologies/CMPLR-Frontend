import React from 'react';

export default function AskPost(props) {
    const { senderName, content } = props;
    console.log(senderName);
    return (
        <div className="ask-body">
            <div className="ask-body-cont">
                <div className="ask-content-sender">{senderName} asked:</div>
                <div className="ask-content">{content}</div>
            </div>
        </div>
    );
}
