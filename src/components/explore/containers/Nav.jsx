import React, { useContext } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarsIcon from '@mui/icons-material/Stars';
import PropTypes from 'prop-types';
import { changeView } from '../Controller';

export default function Nav(props) {
    const { grid, setGrid } = props;
    const theme = useContext(ThemeContext)[0];
    const linkStyles = {
        color: `rgb(${themes[theme].whiteOnDark})`
    };
    const navStyles = {
        borderBottom: `solid 1px rgba(${themes[theme].whiteOnDark}, 0.13)`
    };
    const active = `rgb(${themes[theme].whiteOnDark})`;
    const deActive = `rgba(${themes[theme].whiteOnDark}, 0.65)`;

    return (
        <div className="explore-nav" style={navStyles}>
            <div className="explore-nav-links">
                <a
                    href="/"
                    style={{
                        color: `rgb(${themes[theme].accent})`,
                        boxShadow: `inset 0 -0.5px 0 rgb(${themes[theme].accent})`
                    }}
                >
                    For You <FavoriteIcon className="emoji" />
                </a>
                <a href="/" style={linkStyles}>
                    Trending <WhatshotIcon className="emoji" />
                </a>
                <a href="/" style={linkStyles}>
                    Staff Picks <StarsIcon className="emoji" />
                </a>
            </div>

            <div className="explore-nav-icons">
                <button
                    onClick={() => {
                        changeView(setGrid, true);
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill={grid ? active : deActive}
                    >
                        <rect width="8" height="10" x="3" y="3" rx="1"></rect>
                        <rect width="8" height="6" x="13" y="3" rx="1"></rect>
                        <rect width="8" height="10" x="13" y="11" rx="1"></rect>
                        <rect width="8" height="6" x="3" y="15" rx="1"></rect>
                    </svg>
                </button>

                <button
                    onClick={() => {
                        changeView(setGrid, false);
                    }}
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="23"
                        height="23"
                        fill={grid ? deActive : active}
                    >
                        <rect width="16" height="4" x="4" y="2" rx="1"></rect>
                        <rect width="16" height="4" x="4" y="18" rx="1"></rect>
                        <rect width="16" height="8" x="4" y="8" rx="1"></rect>
                    </svg>
                </button>
            </div>
        </div>
    );
}

Nav.propTypes = {
    grid: PropTypes.bool,
    setGrid: PropTypes.func
};
