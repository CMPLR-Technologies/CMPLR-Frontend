import React from "react";
import { Link } from "react-router-dom";
import { backgroundImages } from "../../../../assets/js/backgroundImages";

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
          Posted by{" "}
          <strong data-testid="bg-author">
            {backgroundImages[imageNum].author}
          </strong>{" "}
        </div>
      </div>

      {!last && (
        <a href="/#Easy to use" className="first-page-bottom">
          <span>What is cmplr</span>
        </a>
      )}
    </>
  );
}
