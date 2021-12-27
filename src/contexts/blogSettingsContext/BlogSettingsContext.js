import React, { createContext, Component } from 'react';
export const BlogSettingsContext = createContext();
import PropTypes from 'prop-types';
class BlogSettingsContextProvider extends Component {
    state = {
        blogId: 1,
        blogName: '',
        blogTitle: '',
        avatar: '',
        replies: 'Every can reply',
        allowAsk: false,
        askPageTitle: '',
        permitAnonymousQuestions: false,
        permitMessaging: false,
        Protected: false,
        dashboardHide: false,
        searchHide: false,
        blockedCmblrs: []
    };
    setBlogs = blogSettings => {
        this.setState({
            //TODO set blogName and blogTitle protected and blockedCmblrs explicitly
            blogId: blogSettings.blog_id,
            avatar: blogSettings.avatar,
            replies: blogSettings.replies,
            allowAsk: blogSettings.allow_ask,
            askPageTitle: blogSettings.ask_page_title,
            permitAnonymousQuestions: blogSettings.allow_anonymous_question,
            permitMessaging: blogSettings.allow_messaging,
            dashboardHide: blogSettings.dashboard_hide,
            searchHide: blogSettings.search_hide,
            likes: blogSettings.likes
            // hello: {
            //     meta: { status_code: 200, msg: 'Success' },
            //     response: {
            //         user: {
            //             id: 15,
            //             email: 'ahmedmohamedcr66@gmail.com',
            //             email_verified_at: null,
            //             age: 26,
            //             following_count: 0,
            //             likes_count: 0,
            //             default_post_format: null,
            //             login_options: null,
            //             email_activity_check: false,
            //             TFA: false,
            //             filtered_tags: null,
            //             endless_scrolling: true,
            //             show_badge: true,
            //             text_editor: 'rich',
            //             msg_sound: true,
            //             best_stuff_first: true,
            //             include_followed_tags: true,
            //             conversational_notification: true,
            //             filtered_content: null,
            //             google_id: null,
            //             theme: 'trueBlue',
            //             primary_blog_id: 15,
            //             created_at: '2021-12-21T11:16:22.000000Z',
            //             updated_at: '2021-12-21T11:16:22.000000Z'
            //         },
            //         blogs: [
            //             {
            //                 blog_id: 15,
            //                 blog_name: 'ahmed_6',
            //                 title: 'untitled',
            //                 avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            //                 avatar_shape: 'circle',
            //                 posts_count: 1,
            //                 followers_count: 3
            //             },
            //             {
            //                 blog_id: 30,
            //                 blog_name: 'ahmed124',
            //                 title: 'ahmed',
            //                 avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
            //                 avatar_shape: 'circle',
            //                 posts_count: 0,
            //                 followers_count: 0
            //             }
            //         ]
            //     }
            // }
        });
    };
    updateProperty = (property, value) => {
        console.log('updateProperty', property, value);
        this.setState({ ...this.state, [property]: value });
    };
    render() {
        console.log(this.state.allowAsk);

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
