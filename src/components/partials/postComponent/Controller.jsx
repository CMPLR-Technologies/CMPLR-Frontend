import React, { createContext, useRef, useState } from 'react';

export const PostContext = createContext();

export default function Controller(props) {
    const { children } = props;

    //videoPostController
    const [played, setPlayed] = useState(false);
    const [mute, setMute] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [displayedTime, setDisplayedTime] = useState('00:00');
    const [playedTimePercentage, setPlayedTimePercentage] = useState(0);

    const handlePlayVideo = (e, videoRef) => {
        e.preventDefault();
        e.stopPropagation();
        setPlayed(!played);
        if (played) {
            videoRef.current.pause();
        } else videoRef.current.play();
    };

    const changeCurrentTimePlayed = (e, videoRef) => {
        e.preventDefault();
        e.stopPropagation();
        let rect = e.target.getBoundingClientRect();
        let relativeMouseClickedPosition = e.clientX - rect.left;
        setPlayedTimePercentage(
            (relativeMouseClickedPosition / rect.width) * 100
        );
        videoRef.current.currentTime =
            (relativeMouseClickedPosition / rect.width) *
            videoRef.current.duration;
    };
    const handleFullscreen = id => {
        const video = document.getElementById(`video-post${id}`);
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            /* Safari */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            /* IE11 */
            video.msRequestFullscreen();
        }
    };

    const displayElapsedTime = () => {
        let min = parseInt(elapsedTime / 60);
        let sec = parseInt(elapsedTime % 60);

        let minutes = min < 10 ? '0' + min : min;
        let secondes = sec < 10 ? '0' + sec : sec;
        return { minutes, secondes };
    };

    const handleSlider = videoRef => {
        setElapsedTime(
            videoRef.current.duration - videoRef.current.currentTime
        );
        let sliderValue =
            (100 / videoRef.current.duration) * videoRef.current.currentTime;
        setPlayedTimePercentage(sliderValue);
        setDisplayedTime(
            displayElapsedTime().minutes + ':' + displayElapsedTime().secondes
        );
    };

    return (
        <PostContext.Provider
            value={{
                played,
                setPlayed,
                mute,
                setMute,
                elapsedTime,
                setElapsedTime,
                displayedTime,
                setDisplayedTime,
                playedTimePercentage,
                setPlayedTimePercentage,
                handlePlayVideo,
                changeCurrentTimePlayed,
                handleFullscreen,
                displayElapsedTime,
                handleSlider
            }}
        >
            {children}
        </PostContext.Provider>
    );
}
