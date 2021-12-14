import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';

import { handleAddFilteringTag } from '../../Controller';
import { handleDeleteFilteringTag } from '../../Controller';

export default function FilteringSectionVersion2({
    setFilteringVersion1,
    numOfFilteringTags
}) {
    const { filteringTags, addFilteringTag, deleteFilteringTag } =
        useContext(SettingsContext);

    const [errorMsg, setErrorMsg] = useState('');
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
            <div className="add-tag-buttons">
                <AuthBtn
                    text="Add"
                    color="#00b8ff"
                    handleClick={() => {
                        handleAddFilteringTag(
                            tag,
                            addFilteringTag,
                            setErrorMsg,
                            filteringTags
                        );
                    }}
                    id="add-tag"
                ></AuthBtn>
                <AuthBtn
                    text="Back"
                    color="#999999"
                    id="back-tag"
                    handleClick={() => setFilteringVersion1(true)}
                ></AuthBtn>
            </div>
            {numOfFilteringTags > 0 && (
                <ul class="filtering-list-two">
                    {filteringTags.map((tag, index) => (
                        <li className="filtering-item-two" key={index}>
                            <span>{tag}</span>
                            <AuthBtn
                                text="Remove"
                                color="#ffffff"
                                id="delete-tag"
                                className="delete-tag"
                                onClick={() => {
                                    handleDeleteFilteringTag(
                                        tag,
                                        deleteFilteringTag,
                                        filteringTags
                                    );
                                }}
                            ></AuthBtn>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
