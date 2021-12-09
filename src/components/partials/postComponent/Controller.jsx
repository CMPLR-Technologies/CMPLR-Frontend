export function handlePlayVideo(e, videoRef, played, setPlayed) {
    e.preventDefault();
    e.stopPropagation();
    setPlayed(!played);
    if (played) {
        videoRef.current.pause();
    } else videoRef.current.play();
}

export function changeCurrentTimePlayed(e, videoRef, setPlayedTimePercentage) {
    e.preventDefault();
    e.stopPropagation();
    let rect = e.target.getBoundingClientRect();
    let relativeMouseClickedPosition = e.clientX - rect.left;
    setPlayedTimePercentage((relativeMouseClickedPosition / rect.width) * 100);
    videoRef.current.currentTime =
        (relativeMouseClickedPosition / rect.width) * videoRef.current.duration;
}
export function handleFullscreen(id) {
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
}

export function displayElapsedTime(elapsedTime) {
    let min = parseInt(elapsedTime / 60);
    let sec = parseInt(elapsedTime % 60);

    let minutes = min < 10 ? '0' + min : min;
    let secondes = sec < 10 ? '0' + sec : sec;
    return { minutes, secondes };
}

export function handleSlider(
    videoRef,
    elapsedTime,
    setElapsedTime,
    setPlayedTimePercentage,
    setDisplayedTime
) {
    setElapsedTime(videoRef.current.duration - videoRef.current.currentTime);
    let sliderValue =
        (100 / videoRef.current.duration) * videoRef.current.currentTime;
    setPlayedTimePercentage(sliderValue);
    setDisplayedTime(
        displayElapsedTime(elapsedTime).minutes +
            ':' +
            displayElapsedTime(elapsedTime).secondes
    );
}
