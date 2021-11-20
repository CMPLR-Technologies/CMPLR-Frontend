import './styles/styles.css';
import { ThemeContextProvider } from './contexts/themeContext/ThemeContext';
import ThemeToggle from './components/ThemeToggle.jsx';
import ShortcutsPageOverlay from './components/shortcuts/View.jsx';
import { shortcutController } from './components/shortcuts/shortcutController';
import React from 'react';

export default function App() {
    shortcutController();

    return (
        <ThemeContextProvider>
            <div>
                <ThemeToggle />
                <ShortcutsPageOverlay />
            </div>
        </ThemeContextProvider>
    );
}
