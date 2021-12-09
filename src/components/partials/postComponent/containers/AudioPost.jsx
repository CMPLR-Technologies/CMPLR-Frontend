import React, { useRef, useState } from 'react';
import PlayButton from './PlayButton';

export default function AudioPost(props) {
    const { url, track, artist, description } = props;
    const audioRef = useRef();
    const [played, setPlayed] = useState(false);
    const [playedTimePercentage, setPlayedTimePercentage] = useState(0);
    const handlePlayAudio = e => {
        e.preventDefault();
        e.stopPropagation();
        setPlayed(!played);
        if (played) {
            audioRef.current.pause();
        } else audioRef.current.play();
    };
    const changeCurrentTimePlayed = e => {
        e.preventDefault();
        e.stopPropagation();
        let rect = e.target.getBoundingClientRect();
        let relativeMouseClickedPosition = e.clientX - rect.left;
        setPlayedTimePercentage(
            (relativeMouseClickedPosition / rect.width) * 100
        );
        audioRef.current.currentTime =
            (relativeMouseClickedPosition / rect.width) *
            audioRef.current.duration;
    };

    const handleSlider = () => {
        let sliderValue =
            (100 / audioRef.current.duration) * audioRef.current.currentTime;
        setPlayedTimePercentage(sliderValue);
    };
    return (
        <>
            <div
                onClick={e => {
                    changeCurrentTimePlayed(e);
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
                <div onClick={e => handlePlayAudio(e)} className="play-button">
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
                onTimeUpdate={() => handleSlider()}
                onEnded={() => setPlayed(false)}
                className="audio"
                src={url}
                preload="auto"
            />
        </>
    );
}
