import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../../../config.json';
import useFetch from '../../../../hooks/useFetch';
import { LinearProgress } from '@mui/material';
import ProfileContent from './content/ProfileContent';

export default function ProfileFull(props) {
    const { postID } = useParams();
    const { blogName, blogID, content, scrollTop } = props;
    const response = useFetch(`${apiBaseUrl}/MiniProfileView/${blogID}`);
    const navArray = [
        {
            title: 'POSTS',
            link: 'posts'
        },
        {
            title: 'LIKES',
            link: 'likes'
        },
        {
            title: 'FOLLOWING',
            link: 'following'
        },
        {
            title: 'ASK ME ANYTHING',
            link: 'ask'
        },
        {
            title: 'SUBMIT A POST',
            link: 'submit'
        }
    ];
    const { error, data, isPending } = response;
    const css = `
    .post-container{
        box-shadow: 0 0 0 1px rgba(0,0,0,.07);
    }
    .profile-full-header-avatar {
        opacity: ${Math.min(Math.max((150 - scrollTop) / 150, 0), 1)};
        ${scrollTop > 108 && 'display: none'}            
    }
    .profile-full-header-div-bg{
        filter: blur(${Math.min(scrollTop, 300) / 40}px);
        object-position: 0 ${Math.min(scrollTop / 2, 150)}px;
    }
`;
    // const body = {
    //     username: 'huh',
    //     avatar: 'https://pbs.twimg.com/profile_images/1026496068555612160/Klg8BS8p_400x400.jpg',
    //     bg: 'https://i.ytimg.com/vi/6Vhp65bgKOo/maxresdefault.jpg',
    //     title: 'Heey man',
    //     description: 'wa wafbuaw uwbwakf'
    // };

    return (
        <div>
            {error && <div className="no-data-error">{"Couldn't load"}</div>}
            {isPending && <LinearProgress />}
            {data && (
                <div className="profile-full-header">
                    <NavLink
                        to={`/blog/view/${blogName}/${blogID}/posts`}
                        className="profile-full-header-div"
                    >
                        <img
                            className="profile-full-header-div-bg"
                            src={data.blog.header_image}
                            alt="couldn't load bg"
                        />
                    </NavLink>
                    <NavLink to={`/blog/view/${blogName}/${blogID}/posts`}>
                        <img
                            className="profile-full-header-avatar"
                            src={data.blog.avatar}
                            alt="couldn't load avatar"
                        />
                    </NavLink>

                    <div className="profile-full-header-text">
                        <NavLink
                            className="profile-full-header-text-link"
                            to={`/blog/view/${blogName}/${blogID}/posts`}
                        >
                            <div className="profile-full-header-text-title">
                                {data.blog.title +
                                    'wfafaffwbafbfwiawhywawa awfwawaf fwafi wal jwfwlaijf ljliwa jlfawfwfbfawbwafawbfwa waawffbfwabfw kwfwwafwbfkawbr akbkfawwafbakwabfwab wafbwawfa wfawkwbawb'}
                            </div>
                        </NavLink>
                        <div className="profile-full-header-text-desc">
                            {data.blog.desciption +
                                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!`}
                        </div>
                    </div>
                    <div className="profile-full-header-nav">
                        {navArray.map((category, index) => (
                            <NavLink
                                className={`profile-full-header-nav-link ${
                                    category.link === content && 'underline'
                                }`}
                                to={`/blog/view/${blogName}/${blogID}/${category.link}`}
                                key={index}
                            >
                                {category.title}
                            </NavLink>
                        ))}
                    </div>
                    <div className="profile-full-header-content">
                        {(content === 'posts' ||
                            content === 'ask' ||
                            content === 'subimt') && (
                            <ProfileContent
                                blogName={blogName}
                                blogID={blogID}
                                content={content}
                                postID={postID}
                            />
                        )}
                    </div>
                </div>
            )}
            <style>{css}</style>
        </div>
    );
}

ProfileFull.propTypes = {
    blogName: PropTypes.string.isRequired,
    blogID: PropTypes.string.isRequired,
    content: PropTypes.string,
    scrollTop: PropTypes.number
};
