import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';
export const BlogSettingsContext = createContext();
class BlogSettingsContextProvider extends Component {
    state = {
        blogId: JSON.parse(localStorage.getItem('user'))?.userData
            ?.primary_blog_id,
        blogName: JSON.parse(localStorage.getItem('user'))?.userData?.blog_name,
        blogTitle: '',
        avatar: JSON.parse(localStorage.getItem('user'))?.userData?.avatar,
        replies: 'Every can reply',
        allowAsk: false,
        askPageTitle: '',
        allowAnonymousQuestion: false,
        allowMessaging: false,
        Protected: false,
        dashboardHide: false,
        searchHide: false,
        blocks: null
    };
    setBlogs = blogSettings => {
        this.setState({
            //TODO set blogName and blogTitle protected and blocks explicitly
            blogId: blogSettings.blog_id,
            avatar: blogSettings.avatar,
            replies: blogSettings.replies,
            allowAsk: blogSettings.allow_ask,
            askPageTitle: blogSettings.ask_page_title,
            allowAnonymousQuestion: blogSettings.allow_anonymous_question,
            allowMessaging: blogSettings.allow_messaging,
            dashboardHide: blogSettings.dashboard_hide,
            searchHide: blogSettings.search_hide,
            likes: blogSettings.likes
        });
    };
    updateProperty = (property, value) => {
        this.setState({ ...this.state, [property]: value });
    };
    render() {
        return (
            //We pass the state object to the provider component.
            //provider is the component that will be used to wrap the app.
            //we use spread operator to pass all the properties of the state object to the provider.
            <BlogSettingsContext.Provider
                value={{
                    ...this.state,
                    setBlogs: this.setBlogs,
                    updateProperty: this.updateProperty
                }}
            >
                {/* //we pass the children of the provider to the provider component. */}
                {this.props.children}
            </BlogSettingsContext.Provider>
        );
    }
}
BlogSettingsContextProvider.propTypes = {
    children: PropTypes.node
};
export default BlogSettingsContextProvider;
