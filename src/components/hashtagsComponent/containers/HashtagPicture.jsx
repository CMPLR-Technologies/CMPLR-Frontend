import React from 'react';
import { Link } from 'react-router-dom';
import p0 from '../../../assets/images/profile_pic0.png';
import PropTypes from 'prop-types';
/**
 * Picture Of Hashtag Component
 * @function HashtagPicture
 * @property {string} tagName
 * @description shows the picture of hashtag in the desktop view
 * @returns {Component}
 */
export default function HashtagPicture(props) {
    const { tagName } = props;
    return (
        <>
            <div className="iGLU3">
                <Link
                    to={'/tagged/' + tagName}
                    className="BSUG4"
                    dataTestid="profLink0_btn_hashtag"
                >
                    <div className="qJeyT"></div>
                </Link>
                <div className="ZV6oZ">
                    <Link
                        to={'/tagged/' + tagName}
                        className="kckjF"
                        dataTestid="profLink_btn_hashtag"
                    >
                        <div className="CrU4O">
                            <span>
                                Posted by <strong></strong>
                            </span>
                        </div>
                        <div className="nZ9l5">
                            <div className="samllPic">
                                <div className="ESMam">
                                    <div className="_0MuRn">
                                        <img src={p0} alt="posted_by_pic" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

HashtagPicture.propTypes = {
    tagName: PropTypes.string.isRequired
};
