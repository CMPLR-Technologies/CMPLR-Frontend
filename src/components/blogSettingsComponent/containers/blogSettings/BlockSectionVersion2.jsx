import React, { useState, useContext } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { blockBlog, unblockBlog } from '../../Service';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import PropTypes from 'prop-types';
import {
    ThemeContext,
    themes
} from '../../../../contexts/themeContext/ThemeContext';
export default function BlockSectionVersion2({ setBlocksVersion1 }) {
    const theme = useContext(ThemeContext)[0];
    const user = JSON.parse(localStorage.getItem('user'));
    const { blocks, updateProperty } = useContext(BlogSettingsContext);
    const [errMsg, setErrMsg] = useState('');
    const [block, setBlock] = useState('');
    return (
        <>
            <AuthInput
                name="block"
                type="text"
                placeholder="Cmplr to block"
                className="AuthInput"
                value={block}
                setValue={setBlock}
                id="enter-tag"
                data-testid="enter-tag"
            ></AuthInput>
            {errMsg.length !== 0 && (
                <div id="update-email-error">
                    <p>{errMsg}</p>
                </div>
            )}
            <div className="add-tag-buttons" data-testid="add-tag-buttons">
                <AuthBtn
                    text="block"
                    handleClick={() => {
                        blockBlog(
                            block,
                            user?.blogName,
                            updateProperty,
                            user?.token,
                            setErrMsg
                        );
                    }}
                    id="add-tag"
                    data-testid="add-tag"
                    color={`rgb(${themes[theme].accent})`}
                ></AuthBtn>
                <AuthBtn
                    color={`rgb(${themes[theme].black})`}
                    text="Back"
                    id="back-tag"
                    handleClick={() => setBlocksVersion1(true)}
                    data-testid="back-tag"
                ></AuthBtn>
            </div>
            <ul className="filtering-list-two" data-testid="filtering-list-two">
                {blocks &&
                    blocks?.map((block, index) => (
                        <li
                            className="filtering-item-two"
                            key={index}
                            data-testid="filtering-item-two"
                        >
                            <span>{block?.blocked_name}</span>
                            <AuthBtn
                                text="unblock"
                                id="delete-tag"
                                className="delete-tag"
                                handleClick={() => {
                                    unblockBlog(
                                        block?.blocked_name,
                                        user?.blogName,
                                        updateProperty,
                                        user?.token,
                                        setErrMsg
                                    );
                                }}
                                data-testid="delete-tag"
                                color={`rgb(${themes[theme].accent})`}
                            ></AuthBtn>
                        </li>
                    ))}
            </ul>
        </>
    );
}
BlockSectionVersion2.propTypes = {
    setBlocksVersion1: PropTypes.func.isRequired
};
