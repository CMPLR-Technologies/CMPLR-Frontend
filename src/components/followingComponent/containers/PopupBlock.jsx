import React from 'react';
import PropTypes from 'prop-types';

export default function PopupBlock(props) {
    const handleClose = () => setOpen(false);
    const { profileName, myBlogName, handleBlock, open, setOpen } = props;

    return (
        <>
            {open && (
                <div
                    data-testid={`modal-ts`}
                    className="modal"
                    style={{ backgroundColor: 'rgb(0,25,53,0.5)' }}
                >
                    <div
                        data-testid={`modal-container-ts`}
                        className="modal-container"
                    >
                        <div>
                            <div className="QiSmE">
                                <h3 className="B3EfW">
                                    Are you sure you want to block {profileName}{' '}
                                    from {myBlogName}?
                                </h3>
                                <div className="rDKIp">
                                    They {"won't"} be able to follow{' '}
                                    {myBlogName}, send {myBlogName} messages,
                                    see {myBlogName} in search results, or
                                    interact with any of {myBlogName + ' '}{' '}
                                    posts.
                                </div>
                            </div>
                            <div className="Qluee">
                                <button
                                    onClick={handleClose}
                                    style={{ backgroundColor: '#ABB3BC' }}
                                    className="B5hil"
                                >
                                    <span
                                        style={{ color: '#001935' }}
                                        className="IMvK3"
                                    >
                                        Nevermind
                                    </span>
                                </button>
                                <button
                                    onClick={() => handleBlock(profileName)}
                                    style={{ backgroundColor: '#FF4930' }}
                                    className="B5hil"
                                >
                                    <span
                                        style={{ color: '#001935' }}
                                        className="IMvK3"
                                    >
                                        Block
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

PopupBlock.propTypes = {
    handleBlock: PropTypes.func.isRequired,
    myBlogName: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    open: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired
};
