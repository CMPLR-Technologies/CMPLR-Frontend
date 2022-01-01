import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';

export default function BlockSectionVersion1({ setBlocksVersion1 }) {
    const { blocks } = useContext(BlogSettingsContext);
    const [numOfBlocks, setNumOfBlocks] = useState(0);
    const theme = useContext(ThemeContext)[0];
    useEffect(() => {
        if (blocks?.length === 0) {
            setNumOfBlocks(0);
        } else {
            setNumOfBlocks(blocks?.length);
        }
    }, [blocks]);

    return (
        <>
            {numOfBlocks === 0 && <p className="email">Not a soul</p>}
            {numOfBlocks > 0 && (
                <ul className="filtering-list-one">
                    {blocks
                        ?.slice(0, numOfBlocks > 4 ? 4 : numOfBlocks)
                        ?.map((block, index) => (
                            <li
                                className="filtering-item-one-img"
                                key={index}
                                data-testid="filtering-item-one-img"
                            >
                                <button
                                    type="button"
                                    onClick={() => setBlocksVersion1(false)}
                                    className="filtering-item-one-img-button"
                                    data-testid="filtering-item-one-img-button"
                                >
                                    <img
                                        src={block?.avatar}
                                        alt="can't load image"
                                        className="avatarOfABlockedAcc123"
                                    />
                                </button>
                            </li>
                        ))}
                </ul>
            )}

            <button className="edit"
        data-testid="edit4"
            onClick={() => setBlocksVersion1(false)}>
                <svg
                    viewBox="0 0 17.6 17.6"
                    width="16"
                    height="16"
                    fill={`rgb(${themes[theme].accent})`}
                >
                    <path d="M5.3 13.8l-2.1.7.7-2.1L10.3 6l1.4 1.4-6.4 6.4zm6.4-9.3l-1.4-1.4-1.4 1.4-6.7 6.7-.2.5-2 5.9 3.8-1.3 2.1-.7.4-.1.3-.3 7.8-7.8c.1 0-2.7-2.9-2.7-2.9zm5.6-1.4L14.5.3c-.4-.4-1-.4-1.4 0l-1.4 1.4L15.9 6l1.4-1.4c.4-.5.4-1.1 0-1.5"></path>
                </svg>
            </button>
        </>
    );
}
BlockSectionVersion1.propTypes = {
    setBlocksVersion1: PropTypes.func.isRequired
};
