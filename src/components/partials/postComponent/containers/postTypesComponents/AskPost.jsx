import React from 'react';

export default function AskPost(props) {
    const { title, content } = props;
    return (
        <div className="ask-body">
            <div className="ask-body-cont">
                <div className="ask-content-sender">hazemabdo22 asked:</div>
                <div className="ask-content">{content}</div>
            </div>
        </div>
    );
}
