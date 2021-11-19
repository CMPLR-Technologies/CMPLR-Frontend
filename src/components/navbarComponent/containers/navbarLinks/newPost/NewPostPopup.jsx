import React, { useEffect } from 'react';
import NewPostPopupItem from './NewPostPopupItem';
import { useNavigate } from 'react-router-dom';

export default function NewPostPopup() {
    const navigate = useNavigate();
    let items = [
        {
            id: 1,
            type: 'Text',
            icon: 'fas fa-font'
        },
        {
            id: 2,
            type: 'Photo',
            icon: 'fas fa-font'
        },
        {
            id: 3,
            type: 'Quote',
            icon: 'fas fa-font'
        },
        {
            id: 4,
            type: 'Link',
            icon: 'fas fa-font'
        },
        {
            id: 5,
            type: 'Chat',
            icon: 'fas fa-font'
        },
        {
            id: 6,
            type: 'Audio',
            icon: 'fas fa-font'
        },
        {
            id: 7,
            type: 'Video',
            icon: 'fas fa-font'
        }
    ];
    useEffect(() => {});
    const close = () => {
        navigate(-1);
    };
    let darkTheme = false;
    return (
        <div className={`new-post-popup ${darkTheme ? 'dark' : ''}`}>
            <button
                aria-label="Close"
                className="new-post-popup-close"
                onClick={close}
            >
                <span></span>
            </button>
            <div className="new-post-popup-items">
                {items.map((item, index) => (
                    <NewPostPopupItem
                        key={index}
                        type={item.type}
                        id={item.id}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}
