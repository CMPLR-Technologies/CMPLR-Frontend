import React from 'react';
import BlogSettings from './containers/blogSettings/BlogSettings';
import BlogsContextProvider from '../../contexts/blogSettingsContext/BlogSettingsContext';
export default function BlogSettingsCard() {
  
    return (
        <BlogsContextProvider>
            <div className="settings">
                <BlogSettings />
            </div>
        </BlogsContextProvider>
    );
}
