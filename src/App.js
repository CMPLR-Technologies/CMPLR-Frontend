import './styles/styles.css';
import { ThemeContextProvider } from './contexts/themeContext/ThemeContext';
import React from 'react';
import UserContextProvider from './contexts/userContext/UserContext';
import ChatContextProvider from './contexts/chatContext/ChatContext';
import MainRoutes from './components/routes/Routes';

export default function App() {
    return (
        <UserContextProvider>
            <ThemeContextProvider>
                <ChatContextProvider>
                    <div>
                        <MainRoutes />
                    </div>
                </ChatContextProvider>
            </ThemeContextProvider>
        </UserContextProvider>
    );
}
