import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Radar from '../../partials/Radar';
import ListItem from './ListItem';
export default function Sidebar(props) {
    const { activeSide, postLength, followersLength, draftsLength } = props;
    const { blogUrlIdf } = useParams();
    const [clicked, setClicked] = useState(activeSide);
    useEffect(() => {
        setClicked(activeSide);
    }, [activeSide]);
    //TODO change hardCoded here
    const listItems = [
        {
            primary: blogUrlIdf,
            secondary: 'khaldon',
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
            secondary: postLength ? postLength : '0',
            prof: true,
            link: `/blog/${blogUrlIdf}/activity`
        },
        {
            primary: 'Followers',
            secondary: followersLength ? followersLength : '0',
            prof: true,
            link: `/blog/${blogUrlIdf}/followers`
        },
        {
            primary: 'Drafts',
            secondary: draftsLength ? draftsLength : '0',
            prof: true,
            link: `/blog/${blogUrlIdf}/drafts`
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
