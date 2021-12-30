import React, { useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
export default function FilteringSectionVersion1({
    setFilteringTagsVersion1,
    setFilteringContentVersion1,
    filteringType
}) {
    const { filteredTags } = useContext(SettingsContext);
    const { filteredContent } = useContext(SettingsContext);
    let functionTouse;
    let property;
    if (filteringType === 'filteredTags') {
        property = filteredTags;
        functionTouse = setFilteringTagsVersion1;
    } else if (filteringType === 'filteredContent') {
        property = filteredContent;
        functionTouse = setFilteringContentVersion1;
    }
    let numOfFilteringTags = property === null ? 0 : property.length;
    const theme = useContext(ThemeContext)[0];
    return (
        <>
            {numOfFilteringTags === 0 && (
                <p className="email">
                    You are not filtering any {`${filteringType}`}
                </p>
            )}
            {numOfFilteringTags > 0 && (
                <ul className="filtering-list-one">
                    {property
                        .slice(
                            0,
                            numOfFilteringTags > 4 ? 4 : numOfFilteringTags
                        )
                        .map((tag, index) => (
                            <li className="filtering-item-one" key={index}>
                                <button
                                    type="button"
                                    onClick={() => functionTouse(false)}
                                >
                                    {tag.slice(0, 7)}
                                </button>
                            </li>
                        ))}
                </ul>
            )}

            <button className="edit" onClick={() => functionTouse(false)}>
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
FilteringSectionVersion1.propTypes = {
    setFilteringTagsVersion1: PropTypes.func.isRequired,
    setFilteringContentVersion1: PropTypes.func.isRequired,
    filteringType: PropTypes.string.isRequired
};
