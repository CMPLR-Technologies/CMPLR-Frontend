import './styles/styles.css';
import { ThemeContextProvider } from './contexts/themeContext/ThemeContext';
import React, { useState } from 'react';
import UserContextProvider from './contexts/userContext/UserContext';
import ChatContextProvider from './contexts/chatContext/chatContext';
import MainRoutes from './components/routes/Routes';
import StyledDesktopNotification from './components/desktopNotifications/StyledDesktopNotification';
import DesktopNotification from './components/desktopNotifications/View';
import { onMessageListener } from './fiberbaseInit';

export default function App() {
    const [show,setShow]=useState(false);
    const [notification,setNotification]=useState({title:'',body:''});

    onMessageListener()
    .then((payload)=>{
        setShow(true);
        setNotification({
            title:payload.notification.title,
            body:payload.notification.body
        });
        console.log("recieved paylod message: ",payload);
      })
    // eslint-disable-next-line no-console
    .catch((err)=>console.log("we catch error of desktop notify ", err));

    return (
        <UserContextProvider>
            <ThemeContextProvider>
                <ChatContextProvider>
                    {show && notification?.title!=='' && notification?.body!=='' && <StyledDesktopNotification  title={notification.title} body={notification.body}/>}
                    <DesktopNotification/>
                    <div>
                        <MainRoutes />
                    </div>
                </ChatContextProvider>
            </ThemeContextProvider>
        </UserContextProvider>
    );
}
