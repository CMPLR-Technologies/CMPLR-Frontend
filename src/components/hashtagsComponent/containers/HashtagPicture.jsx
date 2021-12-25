import React from 'react';
import p0 from '../../../assets/images/profile_pic0.png';
import h0 from '../../../assets/images/hash.png';

export default function HashtagPicture() {
    return (
        <>
            <div className="iGLU3">
                {/*-------------TODO add the url of hashtag--------- */}
                <a href="#" className="BSUG4">
                    <div className="qJeyT">
                        <img src={h0} alt="tag_image" />
                    </div>
                </a>
                <div className="ZV6oZ">
                    <a href="#" className="kckjF">
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
                    </a>
                </div>
            </div>
        </>
    );
}
