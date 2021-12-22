import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../../contexts/settingsContext/SettingsContext';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import PropTypes from 'prop-types';
import { addFilteredTag } from '../../Service';
import { deleteFilteredTag } from '../../Service';

export default function FilteringTagsSectionVersion2({ setFilteringVersion1 }) {
    const { filteredTags, updateProperty } = useContext(SettingsContext);
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
                    color="#00b8ff"
                    handleClick={() => {
                        addFilteredTag(
                            //TODO check this attribute
                            filteredTags === null
                                ? [tag]
                                : [...filteredTags, tag],
                            updateProperty,
                            tag,
                            setErrMsg
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
            <ul className="filtering-list-two">
                {filteredTags &&
                    filteredTags.map((tag, index) => (
                        <li className="filtering-item-two" key={index}>
                            <span>{tag}</span>
                            <AuthBtn
                                text="Remove"
                                color="#ffffff"
                                id="delete-tag"
                                className="delete-tag"
                                handleClick={() => {
                                    console.log('delete tag');
                                    deleteFilteredTag(
                                        filteredTags.filter(
                                            filteredTag => filteredTag !== tag
                                        ),
                                        updateProperty,
                                        tag,
                                        setErrMsg
                                    );
                                }}
                            ></AuthBtn>
                        </li>
                    ))}
            </ul>
        </>
    );
}
FilteringTagsSectionVersion2.propTypes = {
    setFilteringVersion1: PropTypes.func.isRequired,
    numOfFilteringTags: PropTypes.number.isRequired
};
