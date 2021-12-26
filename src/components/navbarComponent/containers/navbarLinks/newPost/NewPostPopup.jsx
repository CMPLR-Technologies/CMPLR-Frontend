import React, { useEffect, useState } from 'react';
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
            icon: 'fas fa-camera'
        },
        {
            id: 3,
            type: 'Quote',
            icon: 'fas fa-quote-right'
        },
        {
            id: 4,
            type: 'Link',
            icon: 'fas fa-link'
        },
        {
            id: 5,
            type: 'Chat',
            icon: 'fas fa-comment-alt'
        },
        {
            id: 6,
            type: 'Audio',
            icon: 'fas fa-headphones'
        },
        {
            id: 7,
            type: 'Video',
            icon: 'fas fa-video'
        }
    ];
    const [mobileView, setMobileView] = useState(false);

    const chaneMobileView = () => {
        if (window.innerWidth > 960) {
            setMobileView(false);
        } else {
            setMobileView(true);
        }
    };
    useEffect(() => {
        console.log(mobileView);
        chaneMobileView();
        if (mobileView) {
            console.log('gaser1');
            navigate('../new/post');
        }
    }, [mobileView]);
    window.addEventListener('resize', chaneMobileView);
    const close = () => {
        navigate(-1);
    };
    let darkTheme = false;
    if (!mobileView)
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
                            link={'/new/post'}
                        />
                    ))}
                </div>
            </div>
        );
    else return null;
}
