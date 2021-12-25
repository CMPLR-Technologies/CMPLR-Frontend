import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover } from '@mui/material';
import ProfileMini from './miniView/ProfileMini';
import PropTypes from 'prop-types';
import ProfilsSideContainer from './sideView/ProfilsSideContainer';
import { apiBaseUrl } from '../../../config.json';
import useFetch from '../../../hooks/useFetch';

export default function ProfileMiniHoverWrapper(props) {
    const { blogID, children } = props;
    const [showSideBlog, setShowSideBlog] = useState(false);
    const [sidePostID, setSidePostID] = useState('');

    const useStyles = makeStyles(() => ({
        popover: {
            pointerEvents: 'none'
        },
        popoverContent: {
            pointerEvents: 'auto'
        }
    }));
    const [openedPopover, setOpenedPopover] = useState(false);
    const popoverAnchor = useRef(null);
    const popoverEnter = () => {
        setOpenedPopover(true);
    };

    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const popoverLeave = () => {
        setOpenedPopover(false);
    };

    const classes = useStyles();

    return (
        <div>
            <span
                className="anchor"
                ref={popoverAnchor}
                aria-owns="mouse-over-popover"
                aria-haspopup="true"
                onMouseEnter={popoverEnter}
                onMouseLeave={popoverLeave}
                onClick={() => {
                    setSidePostID('');
                    setShowSideBlog(true);
                }}
            >
                {children}
            </span>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.popoverContent
                }}
                open={openedPopover}
                anchorEl={popoverAnchor.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                PaperProps={{
                    onMouseEnter: popoverEnter,
                    onMouseLeave: popoverLeave
                }}
            >
                <ProfileMini
                    blogID={blogID}
                    response={response}
                    setShowSideBlog={setShowSideBlog}
                    setSidePostID={setSidePostID}
                />
            </Popover>
            {showSideBlog && (
                <ProfilsSideContainer
                    blogID={blogID}
                    setShowSideBlog={setShowSideBlog}
                    sidePostID={sidePostID}
                    response={response}
                    setSidePostID={setSidePostID}
                />
            )}
        </div>
    );
}

ProfileMiniHoverWrapper.propTypes = {
    children: PropTypes.object.isRequired,
    blogID: PropTypes.string.isRequired
};
