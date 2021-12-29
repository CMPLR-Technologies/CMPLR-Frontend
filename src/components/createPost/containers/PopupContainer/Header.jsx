import React, { useContext } from 'react';
import { Popover } from '@mui/material';
import { IoIosSettings } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ReblogSIgn from '../../../partials/postComponent/containers/Notes/ReblogSign.svg';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from '../../../../contexts/userContext/UserContext';
import DropDownBlogList from './DropDownBlogList';

export default function HeaderCreatePost(props) {
    const { user } = useContext(UserContext);
    const { reblog, parentBlogAuthor, postBlogName, setPostBlogName } = props;
    const { spinner } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleBlogsPopover = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const openPost = Boolean(anchorEl);

    return (
        <>
            <div className="post-form--header">
                <div className="controls-container">
                    <div className="control-left">
                        <div>
                            <button
                                className="btn-control"
                                onClick={handleBlogsPopover}
                            >
                                <span className="caption">
                                    {postBlogName
                                        ? postBlogName
                                        : user?.blogName}
                                </span>
                                <span className="icon_arrow_carrot_down">
                                    <RiArrowDropDownLine
                                        style={{
                                            fill: 'black'
                                        }}
                                    />
                                </span>
                            </button>
                            <Popover
                                id={'popover_post'}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center'
                                }}
                                open={openPost}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                            >
                                <DropDownBlogList
                                    postBlogName={postBlogName}
                                    setBlogAccount={setPostBlogName}
                                />
                            </Popover>
                            {reblog && (
                                <span className="caption">
                                    <ReblogSIgn />
                                    <span>{parentBlogAuthor}</span>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="control-right">
                        {spinner && (
                            <CircularProgress
                                style={{ width: '20px', height: '20px' }}
                            />
                        )}
                        <div className="post-form--post-settings-button">
                            <div className="post-settings">
                                <span className="settings-icon">
                                    <IoIosSettings
                                        style={{
                                            fill: 'black'
                                        }}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

HeaderCreatePost.propTypes = {
    reblog: PropTypes.bool,
    parentBlogAuthor: PropTypes.string,
    spinner: PropTypes.bool,
    setPostBlogName: PropTypes.func,
    postBlogName: PropTypes.string
};
