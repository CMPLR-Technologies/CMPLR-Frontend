import React from 'react';
import { Link } from 'react-router-dom';
import { backgroundImages } from '../../../../assets/js/backgroundImages';
import PropTypes from 'prop-types';

/**
 * @function HomeFooter
 * @description Footer Component of HomePage
 * @param {number} imageNum - index of the image to be used to get name of the author
 * @param {bool} last - boolean to detect if it is the last section
 * @returns {Component} the Component of the Footer
 */

Footer.propTypes = {
    imageNum: PropTypes.number,
    last: PropTypes.bool,
    mobile: PropTypes.any
};
export default function Footer(props) {
    const { imageNum, last, mobile } = props;
    return (
        <>
            <div
                className="first-page-footer"
                style={{ marginTop: last ? '40px' : '0' }}
            >
                <div className="left-footer">
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/support">Support</Link>
                </div>
                {!mobile && (
                    <div className="right-footer">
                        Posted by{' '}
                        <strong data-testid="bg-author">
                            {backgroundImages[imageNum].author}
                        </strong>{' '}
                    </div>
                )}
            </div>

            {!last && (
                <a href="/#Easy to use" className="first-page-bottom">
                    <span>What is cmplr</span>
                </a>
            )}
        </>
    );
}
