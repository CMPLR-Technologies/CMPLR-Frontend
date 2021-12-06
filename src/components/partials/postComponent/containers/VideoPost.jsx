import React, { useContext, useRef, useState } from 'react';
import ToggleFullScreen from './ToggleFullScreen.svg';
import ToggleSound from './ToggleSound.svg';
import PlayButton from './PlayButton';
import { PostContext } from '../Controller';

export default function VideoPost(props) {
    const { url } = props;
    const {
        played,
        setPlayed,
        displayedTime,
        playedTimePercentage,
        handlePlayVideo,
        changeCurrentTimePlayed,
        mute,
        setMute,
        videoRef,
        handleFullscreen,
        handleSlider
    } = useContext(PostContext);

    return (
        <div
            onMouseOver={() => {
                document.getElementsByClassName(
                    'controllers'
                )[0].style.display = 'flex';
            }}
            onMouseLeave={() => {
                document.getElementsByClassName(
                    'controllers'
                )[0].style.display = 'none';
            }}
            className="video-post"
        >
            <video
                ref={videoRef}
                role="button"
                crossOrigin="anonymous"
                aria-label="Play"
                className="video-post-content"
                onClick={e => handlePlayVideo(e)}
                onTimeUpdate={() => handleSlider()}
                onEnded={() => setPlayed(false)}
                loop={true}
                muted={mute}
            >
                <source src={url} type="video/mp4" />
            </video>
            <div style={{ display: 'none' }} className="controllers">
                <button
                    onClick={e => handlePlayVideo(e)}
                    className="play-pause-button btn"
                >
                    <PlayButton played={played} />
                </button>
                <div
                    onClick={e => {
                        changeCurrentTimePlayed(e);
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
                    onClick={() => handleFullscreen()}
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
