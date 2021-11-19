import { render, screen } from '@testing-library/react';
import React from 'react';
import MockedComponent from '../partials/MockedComponent.jsx';
import { backgroundImages } from '../../assets/js/backgroundImages';
import Footer from './containers/Sec1/Footer.jsx';
import HomeSec1 from './containers/Sec1/HomeSec1.jsx';
import HomeSec2 from './containers/Sec2/HomeSec2.jsx';
import HomeSec3 from './containers/Sec3/HomeSec3.jsx';
import HomeSec4 from './containers/Sec4/HomeSec4.jsx';
import HomeSec5 from './containers/Sec5/HomeSec5.jsx';
import SideNav from './containers/SideNav/SideNav.jsx';
import HomePage from './View.jsx';

describe('Home Component in browser size', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(() => ({
            matches: true
        }))
    });
    it('should render 6 sections without crashing in browser size', () => {
        render(<MockedComponent component={<HomePage />} />);
        const sections = screen.getAllByTestId(/home-sec[1-6]/);
        expect(sections.length).toBe(6);
    });

    it('should render the side nav', () => {
        render(<MockedComponent component={<HomePage />} />);
        const sideNav = screen.queryByTestId('side-nav');
        expect(sideNav).toBeInTheDocument();
    });
});

describe('Home Section 1', () => {
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={<HomeSec1 last={false} heading="" paragraph="" />}
            />
        );
        const sectionElement = screen.queryByTestId('home-sec1');
        expect(sectionElement).toBeInTheDocument();
    });

    it('should render the heading as passed in props', () => {
        render(
            <MockedComponent
                component={
                    <HomeSec1 paragraph="" last={false} heading="head1" />
                }
            />
        );
        const headingElement = screen.queryByText('head1');
        expect(headingElement).toBeInTheDocument();
    });

    it('should render the description paragraph as passed in props', () => {
        render(
            <MockedComponent
                component={
                    <HomeSec1 heading="" last={false} paragraph="para1" />
                }
            />
        );
        const paragraphElement = screen.queryByText('para1');
        expect(paragraphElement).toBeInTheDocument();
    });

    it('should render login button with right name and className', () => {
        render(
            <MockedComponent
                component={<HomeSec1 heading="" paragraph="" last={false} />}
            />
        );
        const loginButton = screen.queryByTestId('login-btn');
        expect(loginButton).toBeInTheDocument();
        expect(loginButton.classList.contains('login-btn')).toBe(true);
    });

    it('should render signup button with right name and className', () => {
        render(
            <MockedComponent
                component={<HomeSec1 heading="" paragraph="" last={false} />}
            />
        );
        const signupButton = screen.queryByTestId('signup-btn');
        expect(signupButton).toBeInTheDocument();
        expect(signupButton.classList.contains('sign-btn')).toBe(true);
    });

    it('should display author of background image', () => {
        render(<MockedComponent component={<Footer imageNum={0} />} />);
        const bgAuthor = screen.queryByTestId('bg-author');
        expect(bgAuthor.firstChild.textContent).toBe(
            backgroundImages[0].author
        );
    });
});

describe('Home Section 2', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<HomeSec2 />} />);
        const sectionElement = screen.queryByTestId('home-sec2');
        expect(sectionElement).toBeInTheDocument();
    });
    it('should have one heading element', () => {
        render(<MockedComponent component={<HomeSec2 />} />);
        const headingElement = screen.queryByTestId('sec2-heading');
        expect(headingElement).toBeInTheDocument();
    });

    it('should have one paragraph element', () => {
        render(<MockedComponent component={<HomeSec2 />} />);
        const paragraphElement = screen.queryByTestId('sec2-paragraph');
        expect(paragraphElement).toBeInTheDocument();
    });
    it('should load background properly', () => {
        render(<MockedComponent component={<HomeSec2 />} />);
        const sec2Background = screen.queryByTestId('sec2-bg');
        expect(sec2Background).toBeInTheDocument();
    });
});

describe('Home Section 3', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<HomeSec3 />} />);
        const sectionElement = screen.queryByTestId('home-sec3');
        expect(sectionElement).toBeInTheDocument();
    });
    it('should have one heading element', () => {
        render(<MockedComponent component={<HomeSec3 />} />);
        const headingElement = screen.queryByTestId('sec3-heading');
        expect(headingElement).toBeInTheDocument();
    });

    it('should have one paragraph element', () => {
        render(<MockedComponent component={<HomeSec3 />} />);
        const paragraphElement = screen.queryByTestId('sec3-paragraph');
        expect(paragraphElement).toBeInTheDocument();
    });
});

describe('Home Section 4', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<HomeSec4 />} />);
        const sectionElement = screen.queryByTestId('home-sec4');
        expect(sectionElement).toBeInTheDocument();
    });
    it('should have one heading element', () => {
        render(<MockedComponent component={<HomeSec4 />} />);
        const headingElement = screen.queryByTestId('sec4-heading');
        expect(headingElement).toBeInTheDocument();
    });

    it('should have one paragraph element', () => {
        render(<MockedComponent component={<HomeSec4 />} />);
        const paragraphElement = screen.queryByTestId('sec4-paragraph');
        expect(paragraphElement).toBeInTheDocument();
    });
});

describe('Home Section 5', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<HomeSec5 />} />);
        const sectionElement = screen.queryByTestId('home-sec5');
        expect(sectionElement).toBeInTheDocument();
    });

    it('should have one heading element', () => {
        render(<MockedComponent component={<HomeSec5 />} />);
        const headingElement = screen.queryByTestId('sec5-heading');
        expect(headingElement).toBeInTheDocument();
    });

    it('should have one paragraph element', () => {
        render(<MockedComponent component={<HomeSec5 />} />);
        const paragraphElement = screen.queryByTestId('sec5-paragraph');
        expect(paragraphElement).toBeInTheDocument();
    });

    it('should have seven circled post types', () => {
        render(<MockedComponent component={<HomeSec5 />} />);
        const postTypes = screen.queryAllByTestId(/svg-.*/);
        expect(postTypes.length).toBe(7);
    });
});

describe('Home Section 6', () => {
    it('should render without crashes', () => {
        render(
            <MockedComponent
                component={<HomeSec1 heading="" paragraph="" last={true} />}
            />
        );
        const sectionElement = screen.queryByTestId('home-sec6');
        expect(sectionElement).toBeInTheDocument();
    });
});

describe('Side Navbar', () => {
    it('should render without crashes', () => {
        render(<MockedComponent component={<SideNav activeSection={1} />} />);
        const sideNav = screen.queryByTestId('side-nav');
        expect(sideNav).toBeInTheDocument();
    });
    it('should have six nav links', () => {
        render(<MockedComponent component={<SideNav activeSection={1} />} />);
        const navLinks = screen.queryAllByTestId('nav-link');
        expect(navLinks.length).toBe(6);
    });

    it("should have active class name if it's active section", () => {
        render(<MockedComponent component={<SideNav activeSection={1} />} />);
        const navLink = screen.queryByTestId('div1');
        expect(navLink.classList.contains('active')).toBe(true);
    });

    it('should have active class name if active section is changed', () => {
        render(<MockedComponent component={<SideNav activeSection={2} />} />);
        const navLink1 = screen.queryByTestId('div1');
        const navLink2 = screen.queryByTestId('div2');

        expect(navLink1.classList.contains('active')).toBe(false);
        expect(navLink2.classList.contains('active')).toBe(true);
    });
});
