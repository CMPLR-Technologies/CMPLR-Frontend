import React from "react";
import "../../../styles/styles.css";

export default function SmallCategory(props) {
    const {name,imgUrl}=props;
  return (
    <>
      <div
        className="smallDiv_large smallDiv_normal"
        style={{ opacity: 1, display: "block", transform: "translateY(0px)" }}
      >
        <div className="block-lg all-blocks">
          <div className="title_inner">
            <div className="sub_block_parent">
              <div className="block_image"></div>
              <div className="block_vignette"></div>
              <div className="check_mark"></div>
              <div className="block_title_container">
                <h3 className="block_title_text">{name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
