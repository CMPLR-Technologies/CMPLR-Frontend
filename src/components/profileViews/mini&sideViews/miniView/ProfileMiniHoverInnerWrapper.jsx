import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover } from '@mui/material';
import ProfileMini from './ProfileMini';
import PropTypes from 'prop-types';

export default function ProfileMiniHoverInnerWrapper(props) {
    const { blogID, blogName, children, setShowSideBlog, setSidePostID } =
        props;

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

    const popoverLeave = () => {
        setOpenedPopover(false);
    };

    const classes = useStyles();

    return (
        <span>
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
                {openedPopover && (
                    <ProfileMini
                        blogID={blogID}
                        blogName={blogName}
                        setShowSideBlog={setShowSideBlog}
                        setSidePostID={setSidePostID}
                    />
                )}
            </Popover>
        </span>
    );
}

ProfileMiniHoverInnerWrapper.propTypes = {
    children: PropTypes.object.isRequired,
    blogID: PropTypes.string.isRequired,
    blogName: PropTypes.string.isRequired,
    setShowSideBlog: PropTypes.func.isRequired,
    setSidePostID: PropTypes.func.isRequired
};
