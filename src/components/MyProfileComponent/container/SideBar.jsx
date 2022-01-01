import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Radar from '../../partials/Radar';
import ListItem from './ListItem';
import propTypes from 'prop-types';

/**
 * @function SideBar
 * @description This component is responsible for rendering the sidebar.
 * @param {number} activeSide - The active side of the sidebar.
 * @param {number} postLength - The length of the posts.
 * @param {number} followersLength - The length of the followers.
 * @returns {React.Component} - Returns a component.
 */

Sidebar.propTypes = {
    activeSide: propTypes.number,
    postLength: propTypes.number,
    followersLength: propTypes.number
};

export default function Sidebar(props) {
    const { activeSide, postLength, followersLength } = props;
    const { blogUrlIdf } = useParams();
    const [clicked, setClicked] = useState(activeSide);
    useEffect(() => {
        setClicked(activeSide);
    }, [activeSide]);
    //TODO change hardCoded here
    const listItems = [
        {
            primary: blogUrlIdf,
            prof: false,
            link: `/blog/${blogUrlIdf}`
        },
        {
            primary: 'Posts',
            secondary: postLength ? postLength : '0',
            prof: true,
            link: `/blog/${blogUrlIdf}`
        },
        {
            primary: 'Activity',
            prof: true,
            link: `/blog/${blogUrlIdf}/activity`
        },
        {
            primary: 'Followers',
            secondary: followersLength ? followersLength : '0',
            prof: true,
            link: `/blog/${blogUrlIdf}/followers`
        }
    ];
    return (
        <div className="settings" data-testid="settings-sidebar">
            <div
                className="container2"
                data-testid="settings-sidebar-container2"
            >
                <div className="wrapper" data-testid="settings-sidebar-wrapper">
                    <ul className="list" data-testid="settings-sidebar-list">
                        {listItems.map((item, index) => (
                            <ListItem
                                key={index}
                                index={index}
                                primary={item.primary}
                                secondary={item.secondary}
                                prof={item.prof}
                                link={item.link}
                                clicked={clicked === index + 1}
                                setClicked={setClicked}
                            />
                        ))}
                    </ul>
                </div>
                <Radar />
            </div>
        </div>
    );
}
