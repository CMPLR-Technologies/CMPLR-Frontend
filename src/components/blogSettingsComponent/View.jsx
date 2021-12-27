import React from 'react';
import CreateBlog from './containers/createBlog/CreateBlog';
export default function blogSettings({ page, setWithNav }) {
    const currentPage = page;
    return (
        <div className="settings">
            {currentPage === 'create' && <CreateBlog setWithNav={setWithNav} />}
        </div>
    );
}
