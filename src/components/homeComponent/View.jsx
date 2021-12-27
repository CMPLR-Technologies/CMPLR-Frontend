import React, { useEffect, useState } from 'react';
import HomeSec1 from './containers/Sec1/HomeSec1';
import HomeSec2 from './containers/Sec2/HomeSec2';
import HomeSec3 from './containers/Sec3/HomeSec3';
import HomeSec4 from './containers/Sec4/HomeSec4';
import HomeSec5 from './containers/Sec5/HomeSec5';
import SideNav from './containers/SideNav/SideNav';

export default function HomePage() {
    const [activeSection, setActiveSection] = useState(1);
    const [isBrowserSize, setIsBrowserSize] = useState(
        window.matchMedia('(min-width: 990px)').matches
    );

    const handleScroll = e => {
        const scrollTop = e.target.scrollTop;
        const section1 = document.getElementById('Get started');
        const section2 = document.getElementById('Easy to use');
        const section3 = document.getElementById('Cmplr is blogs.');
        const section4 = document.getElementById(
            'You already know how this works.'
        );
        const section5 = document.getElementById(
            'Seriously, put anything you want here.'
        );
        const section6 = document.getElementById(
            'Okay, it’s not actually hard to explain.'
        );

        if (section1 && scrollTop >= section1.offsetTop) {
            setActiveSection(1);
        }
        if (section2 && scrollTop >= section2.offsetTop) {
            setActiveSection(2);
        }
        if (section3 && scrollTop >= section3.offsetTop) {
            setActiveSection(3);
        }
        if (section4 && scrollTop >= section4.offsetTop) {
            setActiveSection(4);
        }
        if (section5 && scrollTop >= section5.offsetTop) {
            setActiveSection(5);
        }
        if (section6 && scrollTop >= section6.offsetTop) {
            setActiveSection(6);
        }
    };

    const scrollToTop = () => {
        window.location.href = '#Get started';
    };

    const handleResizeView = () => {
        setIsBrowserSize(window.matchMedia('(min-width: 990px)').matches);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('load', scrollToTop, true);
        window.addEventListener('resize', handleResizeView, true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', scrollToTop);
            window.removeEventListener('resize', handleResizeView);
        };
    }, []);

    return (
        <div className="home-container">
            {/* Navbar_1 */}
            <HomeSec1
                heading="cmplr"
                paragraph="Make stuff, look at stuff, talk about stuff, find your people."
                last={!isBrowserSize}
            />

            {isBrowserSize && (
                <>
                    <HomeSec2 activeSection={activeSection} />
                    <HomeSec3 />
                    <HomeSec4 />
                    <HomeSec5 />
                    <HomeSec1
                        heading="Okay, it’s not actually hard to explain."
                        paragraph="We lied. But now you understand this thing. So come on in."
                        last={true}
                    />
                    <SideNav activeSection={activeSection} />
                </>
            )}
        </div>
    );
}
