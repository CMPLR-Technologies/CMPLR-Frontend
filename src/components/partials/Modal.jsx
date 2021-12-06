import React from 'react';

export default function Modal(props) {
    const { messageHeading, messageDesc, setIsModalOpen, children } = props;
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="msg-heading">{messageHeading}</div>
                <div className="msg-description">{messageDesc}</div>
                <div className="buttons-box modal-btns">{children}</div>
            </div>
        </div>
    );
}
