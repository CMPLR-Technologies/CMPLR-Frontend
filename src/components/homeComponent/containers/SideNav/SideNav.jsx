import React from 'react';
import CircledNavLink from './CircledNavLink';
import PropTypes from 'prop-types';

SideNav.propTypes = {
    activeSection: PropTypes.string
};
export default function SideNav(props) {
    const { activeSection } = props;
    return (
        <nav data-testid="side-nav" className="side-nav">
            <ul className="nav-list">
                <CircledNavLink
                    dataTestid="nav-link"
                    className="nav1"
                    href="Get started"
                    activeSection={activeSection}
                    activeSectionNum={1}
                />
                <CircledNavLink
                    href="Easy to use"
                    dataTestid="nav-link"
                    className="nav2"
                    activeSection={activeSection}
                    activeSectionNum={2}
                />
                <CircledNavLink
                    dataTestid="nav-link"
                    className="nav3"
                    href="Cmplr is blogs."
                    activeSection={activeSection}
                    activeSectionNum={3}
                />
                <CircledNavLink
                    dataTestid="nav-link"
                    className="nav4"
                    href="You already know how this works."
                    activeSection={activeSection}
                    activeSectionNum={4}
                />
                <CircledNavLink
                    dataTestid="nav-link"
                    className="nav5"
                    href="Seriously, put anything you want here."
                    activeSection={activeSection}
                    activeSectionNum={5}
                />
                <CircledNavLink
                    dataTestid="nav-link"
                    className="nav6"
                    href="Okay, it’s not actually hard to explain."
                    activeSection={activeSection}
                    activeSectionNum={6}
                />
            </ul>
        </nav>
    );
}
