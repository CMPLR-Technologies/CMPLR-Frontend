import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { GrFormCheckmark } from 'react-icons/gr';
import { ListItemIcon } from '@mui/material';

/**
 * Post-type Dropdown
 * @function DropDownPostList
 * @property {string} postType
 * @property {function} setPostType
 * @description used show the posting type and change it
 * @returns {Component}
 */
export default function DropDownPostList(props) {
    const { postType, setPostType } = props;
    return (
        <>
            <Box
                className="dropdown_postbox"
                sx={{
                    bgcolor: 'background.paper'
                }}
            >
                <nav aria-label="main mailbox folders">
                    <List dense="true">
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setPostType('Post now');
                                }}
                                dataTestid="option0_btn_createPost"
                            >
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    {postType === 'Post now' && (
                                        <GrFormCheckmark />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Post now" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setPostType('Post privately');
                                }}
                                dataTestid="option1_btn_createPost"
                            >
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    {postType === 'Post privately' && (
                                        <GrFormCheckmark />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Post privately" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </>
    );
}

DropDownPostList.propTypes = {
    postType: PropTypes.string.isRequired,
    setPostType: PropTypes.func.isRequired
};
