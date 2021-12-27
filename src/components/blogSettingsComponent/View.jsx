import React from 'react';
import BlogSettingsCard from './containers/blogSettings/BlogSettingsCard';
import BlogsContextProvider from '../../contexts/blogSettingsContext/BlogSettingsContext';
export default function BlogSettings() {
    return (
        <div className="settings">
            <BlogsContextProvider>
                <BlogSettingsCard />
            </BlogsContextProvider>
        </div>
    );
}
