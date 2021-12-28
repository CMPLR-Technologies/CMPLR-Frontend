import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function DropDownPostListFollow(props) {
    const { setOpen, setOpenBlock } = props;

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
        </>
    );
}

DropDownPostListFollow.propTypes = {
    setOpen: PropTypes.func.isRequired,
    setOpenBlock: PropTypes.func.isRequired
};
