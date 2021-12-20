import React from 'react';
import p0 from '../../../assets/images/profile_pic0.png';
import PropTypes from 'prop-types';
import DropDownPostListFollow from './DropDownListFollow';
import { Popover } from '@mui/material';

export default function ItemList(props) {
    const { handleUnfollow, profileName, lastUpdated, setOpenBlock } = props;

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
                        <div className="qgKw0">
                            <div className="nZ9l5">
                                <span className="BPf9u">
                                    <span className="BPf9u">
                                        <div className="ppcontainer">
                                            <div className="ntiBu">
                                                <div className="_0MuRn">
                                                    <img
                                                        src={p0}
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
                            onClick={() => handleUnfollow()}
                        >
                            <span className="f68ED">Unfollow</span>
                        </button>
                        <span className="BPf9u">
                            <span className="BPf9u">
                                <button className="TRX6J" onClick={handleClick}>
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
                                    // eslint-disable-next-line react/jsx-no-duplicate-props
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center'
                                    }}
                                    open={openPost}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                >
                                    <DropDownPostListFollow
                                        setOpen={handleClose}
                                        setOpenBlock={setOpenBlock}
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
    setOpenBlock: PropTypes.string.isRequired
};
