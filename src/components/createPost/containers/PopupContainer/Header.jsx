import React from 'react';
import { IoIosSettings } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';

export default function HeaderCreatePost(props) {
    const { spinner } = props;
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
                        </div>
                    </div>
                    <div className="control-right">
                        {spinner && (
                            <CircularProgress
                                style={{ width: '20px', height: '20px' }}
                            />
                        )}
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

HeaderCreatePost.propTypes = {
    spinner: PropTypes.bool
};
