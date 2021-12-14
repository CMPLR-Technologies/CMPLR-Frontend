import React, { createContext, Component } from 'react';
export const SettingsContext = createContext();

class SettingsContextProvider extends Component {
    state = {
        email: '',
        password: '',
        googleLogin: false,
        accountActivity: false,
        twoFactorAuthentication: false,
        filteringTags: []
    };
    setSettings = settings => {
        this.setState({
            email: settings.email,
            password: settings.password,
            googleLogin: settings.googleLogin,
            accountActivity: settings.accountActivity,
            twoFactorAuthentication: settings.twoFactorAuthentication,
            filteringTags: settings.filteringTags.split(',')
        });
    };
    updateEmail = email => {
        this.setState({ email: email, ...this.state });
    };
    updatePassword = password => {
        this.setState({ password: password, ...this.state });
    };
    updateGoogleLogin = googleLogin => {
        this.setState({ googleLogin: googleLogin, ...this.state });
    };
    updateAccountActivity = accountActivity => {
        this.setState({
            accountActivity: accountActivity,
            ...this.state
        });
    };
    updateTwoFactorAuthentication = twoFactorAuthentication => {
        this.setState({
            twoFactorAuthentication: twoFactorAuthentication,
            ...this.state
        });
    };
    // setFilteringTags = filtering_tags => {
    //     this.setState({ filtering_tags: filtering_tags, ...this.state });
    // };
    addFilteringTag = newTag => {
        console.log('HHHHHHHHHHHHHI');
        this.setState({
            filteringTags: [...this.state.filteringTags, newTag],
            ...this.state
        });
        console.log(this.state);
    };
    deleteFilteringTag = tag => {
        this.setState({
            filteringTags: this.state.filteringTags.filter(
                filteringTag => filteringTag !== tag
            ),
            ...this.state
        });
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
                    updateEmail: this.updateEmail,
                    updatePassword: this.updatePassword,
                    updateGoogleLogin: this.updateGoogleLogin,
                    updateAccountActivity: this.updateAccountActivity,
                    updateTwoFactorAuthentication:
                        this.updateTwoFactorAuthentication,
                    addFilteringTag: this.addFilteringTag,
                    deleteFilteringTag: this.deleteFilteringTag
                }}
            >
                {/* //we pass the children of the provider to the provider component. */}
                {this.props.children}
            </SettingsContext.Provider>
        );
    }
}

export default SettingsContextProvider;
