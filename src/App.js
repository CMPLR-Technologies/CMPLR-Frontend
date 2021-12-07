import './styles/styles.css';
import { ThemeContextProvider } from './contexts/themeContext/ThemeContext';
import ShortcutsPageOverlay from './components/shortcuts/View.jsx';
import { shortcutController } from './components/shortcuts/shortcutController';
import React from 'react';
import UserContextProvider from './contexts/userContext/UserContext';
import MainRoutes from './components/routes/Routes';

export default function App() {
    shortcutController();

    return (
        <UserContextProvider>
            <ThemeContextProvider>
                <div>
                    <MainRoutes />
                    <ShortcutsPageOverlay />
                </div>
            </ThemeContextProvider>
        </UserContextProvider>
    );
}
