import React, { useContext } from 'react';
import SettingsAccount from './containers/account/SettingsAccount';
import SettingsDashboard from './containers/dashboard/SettingsDashboard';
import SettingsNotifications from './containers/notfications/SettingsNotifications';
import SettingsApps from './containers/settingsApps/SettingsApps';
import SettingsContextProvider from '../../contexts/settingsContext/SettingsContext';
import { ThemeContext, themes } from '../../contexts/themeContext/ThemeContext';
export default function Settings(page) {
    const theme = useContext(ThemeContext)[0];
    const currentPage = page.page;
    const css = `
        body .settings .container1
            {
                background-color:rgb(${themes[theme].white});
            }
            body .settings .container1 .subcontainer .title
            {
                border-bottom: 2px solid rgb(${themes[theme].black}) ;
                color: rgb(${themes[theme].black});
            }
            body .settings .container1 .subcontainer .delete #delete-account
            {
                background: rgb(${themes[theme].white});
                border: 1px solid rgba(${themes[theme].black}, 0.4);
                color: rgba(${themes[theme].black}, 0.4);
            }
            body .settings .container1 .subcontainer #section
            {
                border-bottom: 1px solid rgba(${themes[theme].black}, 0.12);
            }
            body .settings .container1 .subcontainer #section .sub-section-left h3
            {
                color: rgb(${themes[theme].black});
            }
            body .settings .container1 .subcontainer #section .sub-section-left conversational-notifications
            {
                color: ${themes[theme].black};
            }
            body .settings .container1 .subcontainer #section .sub-section-right #update-email-email
            {
                border: 1.25px solid rgba(${themes[theme].black}, 0.13) !important;
            }
            body .settings .container1 .subcontainer #section .sub-section-right #update-email-password
            {
                border: 1.25px solid rgba(${themes[theme].black}, 0.13) !important;
            }
            body .settings .container1 .subcontainer #section .sub-section-right #update-email-error
            {
                background-color: rgb(${themes[theme].red});
            }
            body .settings .container1 .subcontainer #section .sub-section-right .email
            {
                color:  rgb(${themes[theme].black});
            }
            body .settings .container1 .subcontainer #section .sub-section-right .password-dots
            {
                color:  rgb(${themes[theme].black});
            }
            body .settings .container1 .subcontainer #section .sub-section-right .sub-section-right-up .text .bold-text 
            {
            
                color:rgb(${themes[theme].black});
            }
            body .settings .container1 .subcontainer #section .sub-section-right .sub-section-right-up .text .un-bold-text
            {
                color:rgb(${themes[theme].black});

            }

            body .settings .container1 .subcontainer #section .filtering-list-two .filtering-item-two span
            {
              color:rgba(${themes[theme].black},0.4);
            }

            body .container2 .wrapper .list .list-item .list-item-anchor 
            {
              color:rgb(${themes[theme].navy});
            }

            body .settings .container1 .subcontainer #section .sub-section-right .filtering-item-one 
            {
                background-color: rgb(${themes[theme].navy});
            }   
            body .settings .container1 .subcontainer #section .sub-section-right #enter-tag 
            {
                border: 1.25px solid rgba(${themes[theme].black}, 0.13) !important;
            }
            body .settings .container1 .subcontainer #section .filtering-list-two .filtering-item-two 
            {
                border-top: 1px solid rgba(${themes[theme].black}, 0.13);
            }
            body .container2 .wrapper .list .list-item .list-item-anchor-small 
            {
                color: rgba(${themes[theme].whiteOnDark}, 0.4);
            }
            body .container2 .wrapper .list 
            {
                background-color: rgb(${themes[theme].navy});
            }
            body .container2 .wrapper .list .list-item 
            {
                border-top: 1px solid rgba(${themes[theme].white}, 0.07);
            }
            
            body .container2 .wrapper .list .list-item .list-item-anchor .list-item-span
            {
                color:rgba(${themes[theme].whiteOnDark});
            }
        
            body .container2 .blog .blog-h1 
            {
                color: rgba(${themes[theme].whiteOnDark});
                border-bottom: 1.5px solid rgba(  ${themes[theme].whiteOnDark}, 0.1);
            }
            body .settings .container1 .subcontainer #section .filtering-list-two .filtering-item-two #delete-tag 
            {
            background: rgb(${themes[theme].white});
            }
            .post-header{
                background-color:rgb(${themes[theme].white});
                color:rgb(${themes[theme].black});
            }
            body .container2 .blog .list-item .temp .blog-item-anchor .icon-text .text .text-up
            {
                color:rgb(${themes[theme].whiteOnDark});
            }
            body .container2 .blog .list-item .temp .blog-item-anchor .icon-text .text .text-down
            {
                color:rgba(${themes[theme].whiteOnDark} , .65);
            }

           body .container2 .wrapper .list .list-item .temp .blog-item-anchor-create-new-blog
           {
            color:rgb(${themes[theme].whiteOnDark});
           }
           body .settings .container1 .subcontainer .delete #delete-account
           {
            background: rgb(${themes[theme].white});
            border: 1px solid rgba(${themes[theme].black},.4);
           }
           body .settings .container1 .subcontainer #section .sub-section-right .add-tag-buttons #add-tag
           {
            background-color: rgb(${themes[theme].accent}) !important;
            color: rgb(${themes[theme].white}) !important;
           }
           body .settings .container1 .subcontainer #section .sub-section-right .add-tag-buttons #back-tag
           {
            background-color: rgba${themes[theme].black},.4) !important;
            color: rgb(${themes[theme].white}) !important;
           }
           body .settings .container1 .subcontainer #section .filtering-list-two .filtering-item-two #delete-tag
           {
            background-color: rgba${themes[theme].black},.4) !important;
            color: rgb(${themes[theme].white}) !important;
           }
           #update-email-btn-save,#update-email-btn-cancel,#update-password-btn-save,#update-password-btn-cancel {
            color: rgb(${themes[theme].white});
        }

    `;
    return (
        <SettingsContextProvider>
            <div className="settings" test-id="settings-container">
                {currentPage === 'account' && <SettingsAccount />}
                {currentPage === 'dashboard' && <SettingsDashboard />}
                {currentPage === 'notifications' && <SettingsNotifications />}
                {currentPage === 'apps' && <SettingsApps />}
            </div>
            <style>{css}</style>
        </SettingsContextProvider>
    );
}
