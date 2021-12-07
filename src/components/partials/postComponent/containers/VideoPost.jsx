import React, { useContext, useEffect, useRef, useState } from 'react';
import ToggleFullScreen from './ToggleFullScreen.svg';
import ToggleSound from './ToggleSound.svg';
import PlayButton from './PlayButton';
import { PostContext } from '../Controller';

export default function VideoPost(props) {
    const { url, id } = props;
    const [videoUrl, setVideoUrl] = useState(
        'https://va.media.tumblr.com/tumblr_r3kt8jhh6v1ztmy6m.mp4'
    );

    useEffect(() => {
        let cont = document.createElement('div');
        cont.innerHTML = url;
        setVideoUrl(cont.children[0].src);
    }, [url]);
    const {
        played,
        setPlayed,
        displayedTime,
        playedTimePercentage,
        handlePlayVideo,
        changeCurrentTimePlayed,
        mute,
        setMute,
        handleFullscreen,
        handleSlider
    } = useContext(PostContext);
    const videoRef = useRef();

    return (
        <div
            onMouseOver={e => {
                document.getElementById(id).style.display = 'flex';
            }}
            onMouseLeave={() => {
                document.getElementById(id).style.display = 'none';
            }}
            className="video-post"
            id={`video-post${id}`}
        >
            <video
                ref={videoRef}
                role="button"
                aria-label="Play"
                className="video-post-content"
                onClick={e => handlePlayVideo(e, videoRef)}
                onTimeUpdate={() => handleSlider(videoRef)}
                onEnded={() => setPlayed(false)}
                loop={true}
                muted={mute}
                src={videoUrl}
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            <div style={{ display: 'none' }} className="controllers" id={id}>
                <button
                    onClick={e => handlePlayVideo(e, videoRef)}
                    className="play-pause-button btn"
                >
                    <PlayButton played={played} />
                </button>
                <div
                    onClick={e => {
                        changeCurrentTimePlayed(e, videoRef);
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
