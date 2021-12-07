import React, { useEffect, useState } from 'react';

export default function ImageList(props) {
    const { imageUrl, caption, postId } = props;
    const [imgSrcUrl, setImgSrcUrl] = useState('');
    const [imgAlt, setImgAlt] = useState('');

    useEffect(() => {
        let cont = document.createElement('div');
        cont.innerHTML = imageUrl;
        setImgSrcUrl(cont.children[0].src);
        setImgAlt(cont.children[0].alt);
    }, [imageUrl]);

    const showImage = () => {
        document.getElementById(
            `preview-img${imgSrcUrl}-${postId}`
        ).style.visibility = 'visible';

        document.getElementById(
            `show-image-modal${imgSrcUrl}-${postId}`
        ).style.display = 'flex';
        document.getElementById(
            `preview-img${imgSrcUrl}-${postId}`
        ).style.display = 'flex';
        document.getElementById(`preview-img${imgSrcUrl}-${postId}`).src =
            imgSrcUrl;
    };

    const closeImagePreview = () => {
        document.getElementById(
            `show-image-modal${imgSrcUrl}-${postId}`
        ).style.display = 'none';
    };

    return (
        <>
            <div
                style={{ display: 'none' }}
                className="show-image-modal"
                id={`show-image-modal${imgSrcUrl}-${postId}`}
                role="dialog"
                aria-modal="true"
                onClick={() => {
                    closeImagePreview();
                }}
            >
                <div className="img-preview-container">
                    <span>
                        <img
                            className="preview-img"
                            id={`preview-img${imgSrcUrl}-${postId}`}
                            loading="lazy"
                        />
                    </span>
                </div>
            </div>
            <div className="images-list">
                <div className="image">
                    <button
                        onClick={() => {
                            showImage(imgSrcUrl);
                        }}
                        className="img-link btn"
                    >
                        <figure>
                            <img
                                className="post-img"
                                src={imgSrcUrl}
                                alt={imgAlt}
                            />
                        </figure>
                    </button>
                </div>
            </div>
            <div className="post-body">
                <span className="body-content">{caption}</span>
            </div>
        </>
    );
}
