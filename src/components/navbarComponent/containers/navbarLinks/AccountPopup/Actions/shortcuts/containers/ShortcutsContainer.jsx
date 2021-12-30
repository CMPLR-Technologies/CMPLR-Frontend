import ShortcutGroup from './ShortcutGroup';
import React from 'react';

/**
 * Shortcuts Container: an outer container of shortcuts
 * @function ShortcutsContainer
 * @property {object} shortcuts - constant object storing shortcuts as {name, keys} for each shortcut group
 * @returns {Component} container
 */

export default function ShortcutsContainer() {
    const shortcuts = {
        general: {
            name: 'General',
            list: [
                {
                    name: 'Change Palette',
                    keys: ['alt', 'P']
                }
            ]
        },
        composing: {
            name: 'Composing',
            list: [
                {
                    name: 'Bold',
                    keys: ['alt', 'B']
                },
                {
                    name: 'Italic',
                    keys: ['alt', 'I']
                },
                {
                    name: 'Underline',
                    keys: ['alt', 'U']
                },
                {
                    name: 'Strike',
                    keys: ['alt', 'S']
                }
            ]
        }
    };

    return (
        <div className="shortcut-container" data-testid="ShortcutsContainer">
            <h1>Keyboard shortcuts</h1>
            <ShortcutGroup data={shortcuts.general} />
            <ShortcutGroup data={shortcuts.composing} />
        </div>
    );
}
