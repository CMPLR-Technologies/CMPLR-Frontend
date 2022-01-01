import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import PropTypes from 'prop-types';
import { addFilteredTag } from '../../Service';
import { deleteFilteredTag } from '../../Service';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';

export default function FilteringSectionVersion2({
    setFilteringTagsVersion1,
    setFilteringContentVersion1,
    filteringType
}) {
    const theme = useContext(ThemeContext)[0];

    const { filteredTags } = useContext(SettingsContext);
    const { filteredContent } = useContext(SettingsContext);
    let functionTouse;
    let property;
    let url;
    if (filteringType === 'filteredTags') {
        property = filteredTags;
        functionTouse = setFilteringTagsVersion1;
        url = 'filtered_tags';
    } else if (filteringType === 'filteredContent') {
        property = filteredContent;
        functionTouse = setFilteringContentVersion1;
        url = 'filtered_content';
    }
    const { updateProperty } = useContext(SettingsContext);
    const [errMsg, setErrMsg] = useState('');
    const [tag, setTag] = useState('');
    return (
        <>
            <AuthInput
                name="tag"
                type="text"
                placeholder="Add a filter"
                className="AuthInput"
                value={tag}
                setValue={setTag}
                id="enter-tag"
            ></AuthInput>
            {errMsg.length !== 0 && (
                <div id="update-email-error">
                    <p>{errMsg}</p>
                </div>
            )}
            <div className="add-tag-buttons">
                <AuthBtn
                    text="Add"
                    color={`rgb(${themes[theme].accent})`}
                    handleClick={() => {
                        addFilteredTag(
                            //TODO check this attribute
                            property === null ? [tag] : [...property, tag],
                            updateProperty,
                            tag,
                            setErrMsg,
                            url,
                            filteringType
                        );
                    }}
                    id="add-tag"
                ></AuthBtn>
                <AuthBtn
                    color={`rgb(${themes[theme].black})`}
                    text="Back"
                    id="back-tag"
                    handleClick={() => functionTouse(true)}
                ></AuthBtn>
            </div>
            <ul className="filtering-list-two">
                {property &&
                    property.map((tag, index) => (
                        <li className="filtering-item-two" key={index}>
                            <span>{tag}</span>
                            <AuthBtn
                                text="Remove"
                                id="delete-tag"
                                className="delete-tag"
                                handleClick={() => {
                                    deleteFilteredTag(
                                        property.filter(
                                            filteredTag => filteredTag !== tag
                                        ),
                                        updateProperty,
                                        tag,
                                        setErrMsg,
                                        url,
                                        filteringType
                                    );
                                }}
                                color={`rgb(${themes[theme].accent})`}
                            ></AuthBtn>
                        </li>
                    ))}
            </ul>
        </>
    );
}
FilteringSectionVersion2.propTypes = {
    setFilteringTagsVersion1: PropTypes.func.isRequired,
    setFilteringContentVersion1: PropTypes.func.isRequired,
    filteringType: PropTypes.string.isRequired
};
