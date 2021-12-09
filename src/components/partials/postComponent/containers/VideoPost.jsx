import React, { useContext, useEffect, useRef, useState } from 'react';
import ToggleFullScreen from './ToggleFullScreen.svg';
import ToggleSound from './ToggleSound.svg';
import PlayButton from './PlayButton';
import {
    handlePlayVideo,
    handleFullscreen,
    handleSlider,
    changeCurrentTimePlayed
} from '../Controller';

export default function VideoPost(props) {
    const { url, id } = props;
    const [videUrl, setVidUrl] = useState('');
    const [played, setPlayed] = useState(false);
    const [mute, setMute] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [displayedTime, setDisplayedTime] = useState('00:00');
    const [playedTimePercentage, setPlayedTimePercentage] = useState(0);

    useEffect(() => {
        if (url) {
            setVidUrl(url.replace('video', 'source'));
        }
    });
    const videoRef = useRef();

    return (
        <div
            onMouseOver={e => {
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
            >
                {/* <source src={url} /> */}
            </video>
            <div
                style={{ display: 'none' }}
                className="controllers"
                id={`controller-${id}`}
            >
                <button
                    onClick={e => handlePlayVideo(e, videoRef)}
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
