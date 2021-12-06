import React from 'react';

const showImage = imageUrl => {
    document.getElementsByClassName('preview-img')[0].style.visibility =
        'visible';

    document.getElementsByClassName('show-image-modal')[0].style.display =
        'flex';
    document.getElementsByClassName('preview-img')[0].style.display = 'flex';
    document.getElementsByClassName('preview-img')[0].src = imageUrl;
};

const closeImagePreview = () => {
    document.getElementsByClassName('show-image-modal')[0].style.display =
        'none';
};

export default function ImageList(props) {
    const { imageUrl, caption, altText } = props;
    return (
        <>
            <div
                style={{ display: 'none' }}
                className="show-image-modal"
                role="dialog"
                aria-modal="true"
                onClick={() => {
                    closeImagePreview();
                }}
            >
                <div className="img-preview-container">
                    <span>
                        <img className="preview-img" loading="lazy" />
                    </span>
                </div>
            </div>
            <div className="images-list">
                <div className="image">
                    <button
                        onClick={() => {
                            showImage(imageUrl);
                        }}
                        className="img-link btn"
                    >
                        <figure>
                            <img
                                className="post-img"
                                src={imageUrl}
                                alt={altText}
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
