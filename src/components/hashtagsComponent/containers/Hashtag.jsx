import React from 'react';
import HashtagPicture from './HashtagPicture';
import PropTypes from 'prop-types';

export default function HashtagView(props) {
    const { hashtag } = props;
    return (
        <>
            <div className="ZN143">
                <HashtagPicture />
                <div className="YOf31">
                    <div className="NmAj2">Trending now</div>
                    <a href="#" className="Wo4gS">
                        {'#' + hashtag?.name}
                    </a>
                    <div className="S3HC8">
                        <div>
                            <b>{'39k'}</b>
                            {' followers /'}&nbsp;
                        </div>
                        <div>
                            <b>{' 455'}</b>
                            {' recent posts'}
                        </div>
                    </div>
                    <div className="emvA3">
                        <button onClick={() => {}} className="EVsUa">
                            <span className="WdYx4">Follow</span>
                        </button>
                        <button
                            onClick={() => {}}
                            className="EVsUa"
                            style={{ marginLeft: '5px' }}
                        >
                            <span className="WdYx4">New Post</span>
                        </button>
                    </div>
                    <div className="XVkC9">
                        {/*loop here and pass data to the span */}
                        {['hashrec', 'hashnew', 'hazemkak', 'nonehash'].map(
                            (h, i) => {
                                return (
                                    <span className="XVkC99" key={i}>
                                        <a href="#" className="E6EKm">
                                            {'#' + h}
                                        </a>
                                    </span>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

HashtagView.propTypes = {
    hashtag: PropTypes.object.isRequired
};
