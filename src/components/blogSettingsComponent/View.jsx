import React from 'react';
import CreateBlog from './containers/createBlog/CreateBlog';
export default function blogSettings(page) {
    const currentPage = page.page;
    return (
        <div className="settings">
            {currentPage === 'create' && <CreateBlog />}
        </div>
    );
}
