import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function DropDownPostListFollow(props) {
    const { setOpen, setOpenBlock, setProfileNamePop, profileName } = props;

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
                            setProfileNamePop(profileName);
                            setOpen(false); //close the dropdown bar
                            setOpenBlock(true); //opens the popup
                        }}
                        className="XLZRW"
                        dataTestid="blockdrop_btn_following"
                    >
                        Block
                    </button>
                    <button
                        onClick={setOpen}
                        style={{ color: '#4C4D4E' }}
                        className="XLZRW"
                        dataTestid="closedrop_btn_following"
                    >
                        Close
                    </button>
                </div>
            </Box>
        </>
    );
}

DropDownPostListFollow.propTypes = {
    setOpen: PropTypes.func.isRequired,
    setOpenBlock: PropTypes.func.isRequired,
    setProfileNamePop: PropTypes.func,
    profileName: PropTypes.string
};
