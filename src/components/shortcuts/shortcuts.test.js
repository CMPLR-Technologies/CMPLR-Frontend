/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ShortcutsPageOverlay from './ShortcutsPageOverlay';

describe('test Shortcut Overlay', () => {
    it('Should cancel only on click outside of shortcut container', () => {
        render(<ShortcutsPageOverlay />);
        const overlayArea = screen.getByTestId('overlayDiv');
        const overlayContainer = screen.getByTestId('overlayContainer');
        fireEvent.click(overlayArea);
        expect(overlayContainer.style.display).toBe('none');
    });

    it('Should not cancel on click inside shortcut container', () => {
        render(<ShortcutsPageOverlay />);
        const shortcutsContainer = screen.getByTestId('shortcutsContainer');
        const overlayContainer = screen.getByTestId('overlayContainer');
        fireEvent.click(shortcutsContainer);
        expect(overlayContainer).toBeVisible();
    });
});

describe('test Shortcut keypresses', () => {
    it('console {action} when {key/s} is/are pressed', () => {
        render(<ShortcutsPageOverlay />);
        const overlayArea = screen.getByTestId('overlayDiv');
        const overlayContainer = screen.getByTestId('overlayContainer');
        fireEvent.click(overlayArea);
        expect(overlayContainer.style.display).toBe('none');
    });

    it('Should not cancel on click inside shortcut container', () => {
        render(<ShortcutsPageOverlay />);
        const shortcutsContainer = screen.getByTestId('shortcutsContainer');
        const overlayContainer = screen.getByTestId('overlayContainer');
        fireEvent.click(shortcutsContainer);
        expect(overlayContainer).toBeVisible();
    });
});
