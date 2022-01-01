/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react';
import React from 'react';
import Navbar2SideView from './navbar2SideView/Navbar2SideView';
import Navbar2MainViewUnAuthLinks from './navbar2MainView/Navbar2MainViewContainers/Navbar2MainViewUnAuthLinks';

import Navbar2SideViewMoreOptions from './navbar2SideView/Navbar2SideViewMoreOptions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

describe('test navbar side view', () => {
    it('test follow btn', () => {
        render(
            <Navbar2SideView
                setShowSideBlog={() => {}}
                blogName={'gaser'}
                blogID={'1'}
                isFollowed={false}
                isBlocked={false}
                setIsFollowed={() => {}}
                setBlocked={() => {}}
            />
        );
        const divElement = screen.getByText('Follow');
        expect(divElement).toBeInTheDocument();
    });
    it('test Following btn', () => {
        render(
            <>
                <Router>
                    <Navbar2SideViewMoreOptions
                        setBlocked={() => {}}
                        setIsFollowed={() => {}}
                        blogID={'1'}
                        blogName={'gaser'}
                        close={() => {}}
                        setShowSideBlog={() => {}}
                        isFollowed={false}
                        isBlocked={false}
                        isSelf={false}
                    />
                    <Routes>
                        <Route path="/" element={<></>} />
                    </Routes>
                </Router>
            </>
        );
        const divElement = screen.getByText('Following');
        expect(divElement).toBeInTheDocument();
    });
    it('test Likes btn', () => {
        render(
            <>
                <Router>
                    <Navbar2SideViewMoreOptions
                        setBlocked={() => {}}
                        setIsFollowed={() => {}}
                        blogID={'1'}
                        blogName={'gaser'}
                        close={() => {}}
                        setShowSideBlog={() => {}}
                        isFollowed={false}
                        isBlocked={false}
                        isSelf={false}
                    />
                    <Routes>
                        <Route path="/" element={<></>} />
                    </Routes>
                </Router>
            </>
        );
        const divElement = screen.getByText('Likes');
        expect(divElement).toBeInTheDocument();
    });
    it('test Block btn', () => {
        render(
            <>
                <Router>
                    <Navbar2SideViewMoreOptions
                        setBlocked={() => {}}
                        setIsFollowed={() => {}}
                        blogID={'1'}
                        blogName={'gaser'}
                        close={() => {}}
                        setShowSideBlog={() => {}}
                        isFollowed={false}
                        isBlocked={false}
                        isSelf={false}
                    />
                    <Routes>
                        <Route path="/" element={<></>} />
                    </Routes>
                </Router>
            </>
        );
        const divElement = screen.getByText('Following');
        expect(divElement).toBeInTheDocument();
    });
    it('test Close btn', () => {
        render(
            <>
                <Router>
                    <Navbar2SideViewMoreOptions
                        setBlocked={() => {}}
                        setIsFollowed={() => {}}
                        blogID={'1'}
                        blogName={'gaser'}
                        close={() => {}}
                        setShowSideBlog={() => {}}
                        isFollowed={false}
                        isBlocked={false}
                        isSelf={false}
                    />
                    <Routes>
                        <Route path="/" element={<></>} />
                    </Routes>
                </Router>
            </>
        );
        const divElement = screen.getByText('Close');
        expect(divElement).toBeInTheDocument();
    });
});

describe('test navbar main view', () => {
    it('test follow btn', () => {
        render(
            <>
                <Router>
                    <Navbar2MainViewUnAuthLinks />
                    <Routes>
                        <Route path="/" element={<></>} />
                    </Routes>
                </Router>
            </>
        );
        const divElement = screen.getByText('Log in');
        expect(divElement).toBeInTheDocument();
    });
});
