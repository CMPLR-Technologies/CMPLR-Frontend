/* eslint-disable camelcase */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent';
import Sidebar from './container/SideBar';

describe('MyProfile Component Test', () => {
    it('render page without any crashes', () => {
        render(
            <MockedComponent
                component={
                    <Sidebar
                        activeSide={0}
                        postLength={3}
                        followersLength={2}
                    />
                }
            />
        );
        const sideBar = screen.queryByTestId('settings-sidebar');
        expect(sideBar).toBeInTheDocument();
    });
    it('render 4 items in sideBar', () => {
        render(
            <MockedComponent
                component={
                    <Sidebar
                        activeSide={0}
                        postLength={3}
                        followersLength={2}
                    />
                }
            />
        );
        const sideBar = screen.queryAllByTestId('list-item-myprofile');
        expect(sideBar).toHaveLength(4);
    });
});
