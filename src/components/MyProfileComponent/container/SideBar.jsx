import React, { useState } from 'react';
import { useEffect } from 'react';
import Radar from '../../partials/Radar';
import ListItem from './ListItem';
export default function Sidebar(props) {
    const { activeSide } = props;
    const [clicked, setClicked] = useState(activeSide);
    useEffect(() => {
        setClicked(activeSide);
    }, [activeSide]);
    const listItems = [
        {
            primary: 'kholdbold',
            secondary: 'khaldon',
            prof: false,
            link: '/blog/kholdbold'
        },
        {
            primary: 'Posts',
            secondary: '8',
            prof: true,
            link: '/blog/kholdbold'
        },
        {
            primary: 'Followers',
            secondary: '8',
            prof: true,
            link: '/blog/kholdbold/followers'
        },
        {
            primary: 'Drafts',
            secondary: '8',
            prof: true,
            link: '/blog/kholdbold'
        },
        {
            primary: 'Queue',
            secondary: '8',
            prof: true,
            link: '/blog/kholdbold'
        }
    ];
    return (
        <div className="settings">
            <div className="container2">
                <div className="wrapper">
                    <ul className="list">
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
