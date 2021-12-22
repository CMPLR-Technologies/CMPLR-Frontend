import React, { createContext, Component } from 'react';
export const SettingsContext = createContext();
import PropTypes from 'prop-types';
class SettingsContextProvider extends Component {
    state = {
        id: 15,
        email: 'ahmedmohamedcr62@gmail.com',
        loginOptions: null,
        emailActivityCheck: false,
        TFA: false,
        filteredTags: null,
        filteringContent: null,
        tumblrNews: null,
        conversationalNotification: true,
        endlessScrolling: true,
        showBadge: true,
        textEditor: 'rich',
        msgSound: true,
        bestStuffFirst: true,
        includeFollowedTags: true
    };
    setSettings = settings => {
        this.setState({
            id: settings.id,
            email: settings.email,
            loginOptions: settings.account.login_options,
            emailActivityCheck: settings.account.email_activity_check,
            TFA: settings.account.TFA,
            filteredTags: settings.account.filtered_tags,
            filteringContent: settings.account.filtering_content,
            tumblrNews: settings.notification.tumblr_news,
            conversationalNotification:
                settings.notification.conversational_notification,
                
            endlessScrolling: settings.dashboard.endless_scrolling,
            showBadge: settings.dashboard.show_badge,
            textEditor: settings.dashboard.text_editor,
            msgSound: settings.dashboard.msg_sound,
            bestStuffFirst: settings.dashboard.best_stuff_first,
            includeFollowedTags: settings.dashboard.include_followed_tags
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
            <SettingsContext.Provider
                value={{
                    ...this.state,
                    setSettings: this.setSettings,
                    updateProperty: this.updateProperty
                }}
            >
                {/* //we pass the children of the provider to the provider component. */}
                {this.props.children}
            </SettingsContext.Provider>
        );
    }
}
SettingsContextProvider.propTypes = {
    children: PropTypes.node
};
export default SettingsContextProvider;
