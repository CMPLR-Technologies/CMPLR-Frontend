import React from 'react';
import h0 from '../../../assets/images/hash.png';
import p0 from '../../../assets/images/profile_pic0.png';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';

export default function MobileHashtagBar(props) {
    const { loading } = props;
    return (
        <>
            <div className="viewMobController">
                <div className="iGLU3">
                    {loading && <LinearProgress />}
                    <a className="BSUG4" href="#">
                        <div className="qJeyT">
                            <img src={h0} alt="hashtag_pic" />
                        </div>
                    </a>
                    <div className="ZV6oZ">
                        <div className="YOf31">
                            <h3 className="NmAj2">Trending now</h3>
                            <a href="#" className="Wo4gS">
                                {'#' + 'hashName'}
                            </a>
                            <div className="S3HC8">
                                <div>
                                    <b>{'39k'}</b>
                                    {' followers /'}&nbsp;
                                </div>
                                <div>
                                    <b>{'455'}</b>
                                    {' recent posts'}
                                </div>
                            </div>
                            <div className="mainDivHash">
                                <div className="emvA3">
                                    <button className="sNQra">
                                        <span className="WdYx4">Follow</span>
                                    </button>
                                    <button
                                        className="sNQra"
                                        style={{ marginLeft: '5px' }}
                                    >
                                        <span className="WdYx4">New post</span>
                                    </button>
                                </div>
                                <a className="kckjF" href="#">
                                    <div className="CrU4O">
                                        <span>Posted by</span>
                                    </div>
                                    <div className="nZ9l5">
                                        <div className="samllPic">
                                            <div className="ESMam">
                                                <div className="_0MuRn">
                                                    <img
                                                        src={p0}
                                                        alt="posted_bypic"
                                                        loading="eager"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="XVkC9">
                    <div className="theScrollhandler">
                        {[
                            'test0',
                            'test1',
                            'test2',
                            'test3',
                            'test4',
                            'test0',
                            'test1',
                            'test2',
                            'test3',
                            'test4',
                            'test0',
                            'test1',
                            'test2',
                            'test3',
                            'test4'
                        ].map((h, i) => {
                            return (
                                <span key={i}>
                                    <a href="#">{h}</a>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

MobileHashtagBar.propTypes = {
    loading: PropTypes.bool.isRequired
};
