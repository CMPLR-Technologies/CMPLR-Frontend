import React, { useContext } from 'react';
import {
    themes,
    ThemeContext
} from '../../../contexts/themeContext/ThemeContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarsIcon from '@mui/icons-material/Stars';

export default function Nav() {
    const theme = useContext(ThemeContext)[0];
    const linkStyles = {
        color: `rgb(${themes[theme].whiteOnDark})`
    };
    const navStyles = {
        borderBottom: `solid 1px rgba(${themes[theme].whiteOnDark}, 0.13)`
    };

    return (
        <div className="explore-nav" style={navStyles}>
            <div className="explore-nav-links">
                <a href="/" style={linkStyles}>
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
                <button>
                    <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="white"
                    >
                        <rect width="8" height="10" x="3" y="3" rx="1"></rect>
                        <rect width="8" height="6" x="13" y="3" rx="1"></rect>
                        <rect width="8" height="10" x="13" y="11" rx="1"></rect>
                        <rect width="8" height="6" x="3" y="15" rx="1"></rect>
                    </svg>
                </button>

                <button>
                    <svg
                        viewBox="0 0 24 24"
                        width="23"
                        height="23"
                        fill="white"
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
