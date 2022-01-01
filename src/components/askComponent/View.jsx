import React, { useContext } from 'react';
import BlogsContextProvider from '../../contexts/blogSettingsContext/BlogSettingsContext';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
import Ask from './containers/Ask';
/**
 * @function Ask
 * @description This function is used to render the ask page
 * @returns {React.Component} Ask page component
 */
export default function AskComponent() {
    const theme = useContext(ThemeContext)[0];
    const css = `
    `;
    return (
        <div className="settings" data-testid="settings">
            <BlogsContextProvider>
                <Ask />
            </BlogsContextProvider>
            <style>{css}</style>
        </div>
    );
}
