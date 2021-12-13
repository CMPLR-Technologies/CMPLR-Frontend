import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { GrFormCheckmark } from 'react-icons/gr';
import { ListItemIcon } from '@mui/material';

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
                                    setPostType('Add to queue');
                                }}
                            >
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    {postType === 'Add to queue' && (
                                        <GrFormCheckmark />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Add to queue" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setPostType('Save as draft');
                                }}
                            >
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    {postType === 'Save as draft' && (
                                        <GrFormCheckmark />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Save as draft" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setPostType('Post privately');
                                }}
                            >
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    {postType === 'Post privately' && (
                                        <GrFormCheckmark />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Post privately" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    setPostType('Schedule');
                                }}
                            >
                                <ListItemIcon style={{ minWidth: '30px' }}>
                                    {postType === 'Schedule' && (
                                        <GrFormCheckmark />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary="Schedule" />
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
