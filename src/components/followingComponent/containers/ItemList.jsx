import React from 'react';
//import p0 from '../../../assets/images/profile_pic0.png';
import PropTypes from 'prop-types';
import DropDownPostListFollow from './DropDownListFollow';
import { Popover } from '@mui/material';
import ProfileMiniHoverWrapper from '../../profileViews/mini&sideViews/View';

/**
 * List of following view
 * @function ItemList
 * @property {function} handleUnfollow
 * @property {string} avatar
 * @property {string} profileName
 * @property {string} lastUpdated
 * @property {string} myBlogName
 * @property {function} handleBlock
 * @property {bool} openPopup
 * @property {function} setOpenBlock
 * @property {number} blogId
 * @property {function} setProfileNamePop
 * @description this is the view where all following user's are displayed
 * @returns {Component}
 */
export default function ItemList(props) {
    const {
        handleUnfollow,
        profileName,
        avatar,
        lastUpdated,
        setOpenBlock,
        openPopup,
        handleBlock,
        myBlogName,
        blogId,
        setProfileNamePop
    } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const openPost = Boolean(anchorEl);

    return (
        <>
            <div className="eXQ6G">
                <a href="#" className="Ro4PU"></a>
                <div className="wmRou">
                    <div className="yElCb">
                        <ProfileMiniHoverWrapper
                            blogID={blogId?.toString()}
                            blogName={profileName}
                        >
                            <div className="qgKw0">
                                <div className="nZ9l5">
                                    <span className="BPf9u">
                                        <span className="BPf9u">
                                            <div className="ppcontainer">
                                                <div className="ntiBu">
                                                    <div className="_0MuRn">
                                                        <img
                                                            src={avatar}
                                                            alt="profile_pic"
                                                            loading="eager"
                                                            className="ppimg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </ProfileMiniHoverWrapper>
                        <a href="#" className="BSUG4">
                            <div className="gLEkw">
                                <span className="UulOO">{profileName}</span>
                            </div>
                            <div className="fTJAC">{lastUpdated}</div>
                        </a>
                    </div>
                </div>
                <div className="SbeG8">
                    <div className="xWjHY">
                        <button
                            className="TRX6J"
                            onClick={() => handleUnfollow(profileName)}
                            dataTestid="unfollowprofile_btn_following"
                        >
                            <span className="f68ED">Unfollow</span>
                        </button>
                        <span className="BPf9u">
                            <span className="BPf9u">
                                <button
                                    className="TRX6J"
                                    onClick={handleClick}
                                    dataTestid="popupblockdrop_btn_following"
                                >
                                    <span className="EvhBA">
                                        <span className="JS4zW">
                                            <svg
                                                fill="black"
                                                width="14"
                                                height="8"
                                                style={{
                                                    transform: 'rotate(90deg)'
                                                }}
                                                viewBox="0 0 17.5 3.9"
                                            >
                                                <path d="M17.5 1.9c0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9S14.5 0 15.6 0c1 0 1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 1.9-1.9 1.9-1.1.1-2-.8-2-1.9 0-1 .9-1.9 2-1.9s1.9.9 1.9 1.9m-6.8 0c0 1.1-.9 2-2 2-1 0-1.9-.9-1.9-2S.9 0 1.9 0c1.1 0 2 .9 2 1.9"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                                <Popover
                                    id={'popover_follow'}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    key={profileName}
                                    open={openPost}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                >
                                    <DropDownPostListFollow
                                        key={profileName}
                                        setProfileNamePop={setProfileNamePop}
                                        setOpen={handleClose}
                                        setOpenBlock={setOpenBlock}
                                        openPopup={openPopup}
                                        handleBlock={handleBlock}
                                        profileName={profileName}
                                        myBlogName={myBlogName}
                                    />
                                </Popover>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

ItemList.propTypes = {
    lastUpdated: PropTypes.any.isRequired,
    handleUnfollow: PropTypes.func.isRequired,
    profileName: PropTypes.string.isRequired,
    setOpen: PropTypes.string.isRequired,
    setOpenBlock: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    handleBlock: PropTypes.func,
    openPopup: PropTypes.bool,
    myBlogName: PropTypes.string,
    blogId: PropTypes.any,
    setProfileNamePop: PropTypes.func
};
