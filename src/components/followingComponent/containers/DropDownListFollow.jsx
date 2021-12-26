import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import PopupBlock from './PopupBlock';

export default function DropDownPostListFollow(props) {
    const {
        setOpen,
        setOpenBlock,
        openPopup,
        handleBlock,
        profileName,
        myBlogName
    } = props;

    return (
        <>
            <Box
                className="dropdown_postbox"
                sx={{
                    bgcolor: 'background.paper'
                }}
            >
                <div className="iaJAj">
                    <button
                        onClick={() => {
                            setOpen(); //close the dropdown bar
                            setOpenBlock(true); //opens the popup
                        }}
                        className="XLZRW"
                    >
                        Block
                    </button>
                    <button
                        onClick={setOpen}
                        style={{ color: '#4C4D4E' }}
                        className="XLZRW"
                    >
                        Close
                    </button>
                </div>
            </Box>
            <PopupBlock
                open={openPopup}
                setOpen={setOpenBlock}
                handleBlock={handleBlock}
                profileName={profileName}
                myBlogName={myBlogName}
            />
        </>
    );
}

DropDownPostListFollow.propTypes = {
    setOpen: PropTypes.func.isRequired,
    setOpenBlock: PropTypes.func.isRequired,
    openPopup: PropTypes.bool,
    handleBlock: PropTypes.func,
    myBlogName: PropTypes.string,
    profileName: PropTypes.string
};
