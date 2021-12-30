import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

export const SettingsContext = createContext();
class SettingsContextProvider extends Component {
    state = {
        id: JSON.parse(localStorage.getItem('user')).userData.id,
        email: '',
        loginOptions: null,
        emailActivityCheck: false,
        TFA: false,
        filteredTags: null,
        filteredContent: null,
        tumblrNews: null,
        conversationalNotification: false,
        endlessScrolling: false,
        showBadge: false,
        textEditor: 'rich',
        msgSound: false,
        bestStuffFirst: false,
        includeFollowedTags: false
    };
    setSettings = settings => {
        this.setState({
            id: settings.id,
            email: settings.email,
            loginOptions: settings.account.login_options,
            emailActivityCheck: settings.account.email_activity_check,
            TFA: settings.account.TFA,
            filteredTags: settings.account.filtered_tags,
            filteredContent: settings.account.filtering_content,
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
