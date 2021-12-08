import React from 'react';
import AccountPopupBlog from './AccountPopupBlog';

export default function AccountPopupBlogsContainer() {
    const blogs = [
        {
            avatar: 'https://wallpaperaccess.com/full/5389873.jpg',
            url: 'Xasm',
            title: 'hmmmm lol man',
            posts: 9,
            followers: 1,
            drafts: 0,
            queue: 0,
            expandedInital: true
        },
        {
            avatar: 'https://i.stack.imgur.com/9j9hj.jpg?s=64&g=1',
            url: 'Xashwfafhawhfaifhafalhaihflwahlfm',
            title: 'hmmgagahgiwalhawfwalfanm lol man',
            posts: 0,
            followers: 0,
            drafts: 0,
            queue: 0,
            expandedInital: false
        },
        {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutoiZclWjivCs1VLSdaeDh67ITMbP0XUVFA&usqp=CAU',
            url: 'awawuhawo',
            title: '',
            posts: 400,
            followers: 300,
            drafts: 10,
            queue: 5,
            expandedInital: false
        }
    ];
    return (
        <div className="account-popup-blogs-container">
            {blogs.map((blog, index) => (
                <AccountPopupBlog blog={blog} key={index} />
            ))}
        </div>
    );
}
