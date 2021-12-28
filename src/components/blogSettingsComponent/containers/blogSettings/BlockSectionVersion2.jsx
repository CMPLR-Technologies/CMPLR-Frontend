import React, { useState, useContext } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { blockBlog, unblockBlog } from '../../Service';
import AuthBtn from '../../../partials/AuthBtn';
import AuthInput from '../../../partials/AuthInput';
import PropTypes from 'prop-types';
export default function BlockSectionVersion2({ setBlocksVersion1 }) {
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
            ></AuthInput>
            {errMsg.length !== 0 && (
                <div id="update-email-error">
                    <p>{errMsg}</p>
                </div>
            )}
            <div className="add-tag-buttons">
                <AuthBtn
                    text="block"
                    color="#00b8ff"
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
                ></AuthBtn>
                <AuthBtn
                    text="Back"
                    color="#999999"
                    id="back-tag"
                    handleClick={() => setBlocksVersion1(true)}
                ></AuthBtn>
            </div>
            <ul className="filtering-list-two">
                {blocks &&
                    blocks?.map((block, index) => (
                        <li className="filtering-item-two" key={index}>
                            <span>{block?.blocked_name}</span>
                            <AuthBtn
                                text="Remove"
                                color="#ffffff"
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
