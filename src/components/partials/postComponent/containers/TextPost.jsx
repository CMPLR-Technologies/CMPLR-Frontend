import React from 'react';

export default function TextPost(props) {
    const { title, text } = props;
    return (
        <div className="post-body">
            <div className="text-title">
                <span className="text-title-content">{title}</span>
            </div>
            <div className="text-body">
                <span
                    className="body-content"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    );
}
