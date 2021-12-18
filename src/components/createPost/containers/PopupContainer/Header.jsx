import React from 'react';
import { IoIosSettings } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ReblogSIgn from '../../../partials/postComponent/containers/Notes/ReblogSign.svg';

export default function HeaderCreatePost(props) {
    const { reblog, parentBlogAuthor } = props;
    return (
        <>
            <div className="post-form--header">
                <div className="controls-container">
                    <div className="control-left">
                        <div>
                            <button className="btn-control">
                                <span className="caption">hazemkak</span>
                                <span className="icon_arrow_carrot_down">
                                    <RiArrowDropDownLine
                                        style={{
                                            fill: 'black'
                                        }}
                                    />
                                </span>
                            </button>
                            {reblog && (
                                <span className="caption">
                                    <ReblogSIgn />
                                    <span>{parentBlogAuthor}</span>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="control-right">
                        {/**------TODO: Add a Div which contains a spinner for uploading */}
                        <div className="post-form--post-settings-button">
                            <div className="post-settings">
                                <span className="settings-icon">
                                    <IoIosSettings
                                        style={{
                                            fill: 'black'
                                        }}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
