import React from 'react';
import { Link } from 'react-router-dom';
import { backgroundImages } from '../../../../assets/js/backgroundImages';
import PropTypes from 'prop-types';

Footer.propTypes = {
    imageNum: PropTypes.number,
    last: PropTypes.bool
};
export default function Footer(props) {
    const { imageNum, last } = props;
    return (
        <>
            <div className="first-page-footer">
                <div className="left-footer">
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/jobs">Jobs</Link>
                    <Link to="/support">Support</Link>
                </div>

                <div className="right-footer">
                    Posted by{' '}
                    <strong data-testid="bg-author">
                        {backgroundImages[imageNum].author}
                    </strong>{' '}
                </div>
            </div>

<<<<<<< HEAD
      {!last && isBrowserSize && (
        <a href="/#Easy to use" className="first-page-bottom">
          <span>What is cmplr</span>
        </a>
      )}
    </>
  );
=======
            {!last && (
                <a href="/#Easy to use" className="first-page-bottom">
                    <span>What is cmplr</span>
                </a>
            )}
        </>
    );
>>>>>>> 186fb4a4d2ccb820296e5f246ec3fa0cd67062e7
}
