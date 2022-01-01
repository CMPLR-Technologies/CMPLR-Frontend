import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { GrFormCheckmark } from 'react-icons/gr';
import { LinearProgress, ListItemIcon } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllBlogNames } from '../../Service';

/**
 * Dropdown blogs list
 * @function DropDownBlogList
 * @property {function} setBlogAccount
 * @property {string} postBlogName
 * @description used to view all the blogs avaliable for this user
 * @returns {Component}
 */
export default function DropDownBlogList(props) {
    const { postBlogName, setBlogAccount } = props;
    const [blogNames, setBlogNames] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const [isPendingBlogs, setIsPendingBlogs] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getAllBlogNames(user?.token, setBlogNames, setIsPendingBlogs, setError);
    }, []);
    return (
        <>
            <Box
                className="dropdown_postbox"
                sx={{
                    bgcolor: 'background.paper'
                }}
            >
                {isPendingBlogs && <LinearProgress />}
                <nav aria-label="main mailbox folders">
                    <List dense="true">
                        {error !== '' && (
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={error} />
                                </ListItemButton>
                            </ListItem>
                        )}
                        {blogNames?.map(blog => {
                            return (
                                <ListItem disablePadding key={blog}>
                                    <ListItemButton
                                        onClick={() => {
                                            setBlogAccount(blog?.blog_name);
                                        }}
                                    >
                                        <ListItemIcon
                                            style={{ minWidth: '30px' }}
                                        >
                                            {postBlogName ===
                                                blog?.blog_name && (
                                                <GrFormCheckmark />
                                            )}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={blog?.blog_name}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </nav>
            </Box>
        </>
    );
}

DropDownBlogList.propTypes = {
    postBlogName: PropTypes.string.isRequired,
    setBlogAccount: PropTypes.func.isRequired
};
