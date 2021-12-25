import React, { createContext, Component } from 'react';
export const BlogsContext = createContext();
import PropTypes from 'prop-types';
class BlogsContextProvider extends Component {
    state = {
        blogId: 1,
        blogName: 'Hello',
        blogTitle: 'Hello World',
        avatar: 'https://www.example.com/image/avatar.png',
        replies: 'Every can reply',
        permitAsk: true,
        askPageTitle: '',
        permitAnonymousQuestions: false,
        permitSubmit: true,
        submissionsPageTitle: 'submit a post',
        SubmissionsGuidelines: "Don't violate the community rules",
        isTextAllowed: true,
        isPhotoAllowed: true,
        isQuoteAllowed: true,
        isLinkAllowed: true,
        isVideoAllowed: true,
        permitMessaging: true,
        Protected: true,
        dashboardHide: false,
        searchHide: false,
        postsPerDay: 3,
        between: '12am,4pm'
    };
    setBlogs = blogSettings => {
        this.setState({
           
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
            <BlogsContext.Provider
                value={{
                    ...this.state,
                    setSettings: this.setSettings,
                    updateProperty: this.updateProperty
                }}
            >
                {/* //we pass the children of the provider to the provider component. */}
                {this.props.children}
            </BlogsContext.Provider>
        );
    }
}
BlogsContextProvider.propTypes = {
    children: PropTypes.node
};
export default BlogsContextProvider;
