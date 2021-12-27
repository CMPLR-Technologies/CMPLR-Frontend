import React from 'react';
import AccountPopupBlog from './AccountPopupBlog';
import PropTypes from 'prop-types';

/**
 * @function AccountPopupBlogsContainer
 * @description in between seperator in the Account Popup Container
 * @property {array} blogs - a state array storing all blogs data of current user
 * @property {function} setBlogs - blog state setter initialized to empty array
 * @returns {Component}
 */

export default function AccountPopupBlogsContainer(props) {
    //const [blogs, setBlogs] = useState([]);

    const { blogs, closeMenu } = props;
    return (
        <div>
            {blogs && (
                <div
                    data-testid="AccountPopupBlogsContainer"
                    className="account-popup-blogs-container"
                >
                    {blogs.map((blog, index) => (
                        <AccountPopupBlog blog={blog} key={index} closeMenu={closeMenu} />
                    ))}
                </div>
            )}
        </div>
    );
}
AccountPopupBlogsContainer.propTypes = {
    blogs: PropTypes.array,
    closeMenu: PropTypes.func
};
