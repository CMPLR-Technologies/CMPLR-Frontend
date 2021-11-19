import './styles/styles.css';
import { ThemeContextProvider } from './contexts/themeContext/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ShortcutsPageOverlay from './components/shortcuts/ShortcutsPageOverlay.jsx';
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
