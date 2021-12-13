import React, { useRef, useState } from 'react';
import PlayButton from '../PlayButton';
import {
    handlePlayAudio,
    changeCurrentTimePlayedAudio,
    handleAudioSlider
} from '../../Controller';

import PropTypes from 'prop-types';

/**
 * Audio Post
 * @function AudioPost
 * @description Component used to view audio post in postComponent Container
 * @param {string} url - url of audio file
 * @param {string} track - track name of audio file
 * @param {string} artist - artist name of audio file
 * @param {string} description - content of audio post
 * @returns {Component} AudioPost Component
 */

AudioPost.propTypes = {
    url: PropTypes.string.isRequired,
    track: PropTypes.string,
    artist: PropTypes.string,
    description: PropTypes.string
};

export default function AudioPost(props) {
    const { url, track, artist, description } = props;
    const audioRef = useRef();
    const [played, setPlayed] = useState(false);
    const [playedTimePercentage, setPlayedTimePercentage] = useState(0);

    return (
        <>
            <div
                onClick={e => {
                    changeCurrentTimePlayedAudio(
                        e,
                        setPlayedTimePercentage,
                        audioRef
                    );
                }}
                className="audio-post"
            >
                <div
                    type="range"
                    className="seek-bar"
                    style={{
                        width: playedTimePercentage + '%'
                    }}
                >
                    <div className="song-slider"></div>
                </div>
                <div
                    onClick={e =>
                        handlePlayAudio(e, played, setPlayed, audioRef)
                    }
                    className="play-button"
                >
                    <PlayButton played={played} />
                    <div className="artist-track">
                        <div className="track">{track}</div>
                        <div className="artist">{artist}</div>
                    </div>
                </div>
            </div>
            <div className="audio-desc">
                <span className="body-content">{description}</span>
            </div>
            <audio
                ref={audioRef}
                onTimeUpdate={() =>
                    handleAudioSlider(audioRef, setPlayedTimePercentage)
                }
                onEnded={() => setPlayed(false)}
                className="audio"
                src={url}
                preload="auto"
            />
        </>
    );
}
