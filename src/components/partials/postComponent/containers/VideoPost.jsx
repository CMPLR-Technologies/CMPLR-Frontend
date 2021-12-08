import React, { useEffect, useRef, useState } from 'react';
import ToggleFullScreen from './ToggleFullScreen.svg';
import ToggleSound from './ToggleSound.svg';
import PlayButton from './PlayButton';
import {
    handlePlayVideo,
    handleFullscreen,
    handleSlider,
    changeCurrentTimePlayed,
    handleVideoTag
} from '../Controller';

import PropTypes from 'prop-types';

/**
 * @function VideoPost
 * @description Component used to view video post in postComponent Container
 * @param {HtmlTag} videoTag - void video HTML tag containing src attribute
 * @param {string} id - id used to identify some video post tags to be used in the controller
 * @returns {Component} VideoPost Component
 */

VideoPost.propTypes = {
    videoTag: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default function VideoPost(props) {
    const { videoTag, id } = props;
    const [videUrl, setVidUrl] = useState('');
    const [played, setPlayed] = useState(false);
    const [mute, setMute] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [displayedTime, setDisplayedTime] = useState('00:00');
    const [playedTimePercentage, setPlayedTimePercentage] = useState(0);
    const videoRef = useRef();

    useEffect(() => {
        handleVideoTag(videoTag, setVidUrl);
    }, [videoTag]);

    return (
        <div
            onMouseOver={() => {
                document.getElementById(`controller-${id}`).style.display =
                    'flex';
            }}
            onMouseLeave={() => {
                document.getElementById(`controller-${id}`).style.display =
                    'none';
            }}
            className="video-post"
            id={`video-post${id}`}
        >
            <video
                ref={videoRef}
                role="button"
                aria-label="Play"
                className="video-post-content"
                onClick={e => handlePlayVideo(e, videoRef, played, setPlayed)}
                onTimeUpdate={() =>
                    handleSlider(
                        videoRef,
                        elapsedTime,
                        setElapsedTime,
                        setPlayedTimePercentage,
                        setDisplayedTime
                    )
                }
                onEnded={() => setPlayed(false)}
                loop={true}
                muted={mute}
                dangerouslySetInnerHTML={{ __html: videUrl }}
            ></video>
            <div
                style={{ display: 'none' }}
                className="controllers"
                id={`controller-${id}`}
            >
                <button
                    onClick={e =>
                        handlePlayVideo(e, videoRef, played, setPlayed)
                    }
                    className="play-pause-button btn"
                >
                    <PlayButton played={played} />
                </button>
                <div
                    onClick={e => {
                        changeCurrentTimePlayed(
                            e,
                            videoRef,
                            setPlayedTimePercentage
                        );
                    }}
                    className="progreesbar"
                    role="progressbar"
                >
                    <div className="bar">
                        <div
                            style={{
                                width: playedTimePercentage + '%'
                            }}
                            className="slider"
                        ></div>
                        <div
                            style={{
                                left: playedTimePercentage + '%'
                            }}
                            className="circle"
                        ></div>
                    </div>
                </div>
                <div className="elapsed-time">
                    {videoRef.current && displayedTime}
                </div>
                <button
                    className="full-screen-button btn"
                    onClick={() => handleFullscreen(id)}
                >
                    <ToggleFullScreen />
                </button>
                <button
                    className="toggle-sound-button btn"
                    onClick={() => setMute(!mute)}
                >
                    <ToggleSound mute={mute} />
                </button>
            </div>
        </div>
    );
}
