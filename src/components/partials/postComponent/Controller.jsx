//=================================================Audio Controller============================================
export function handlePlayAudio(e, played, setPlayed, audioRef) {
    e.preventDefault();
    e.stopPropagation();
    setPlayed(!played);
    if (played) {
        audioRef.current.pause();
    } else audioRef.current.play();
}

export function changeCurrentTimePlayedAudio(
    e,
    setPlayedTimePercentage,
    audioRef
) {
    e.preventDefault();
    e.stopPropagation();
    let rect = e.target.getBoundingClientRect();
    let relativeMouseClickedPosition = e.clientX - rect.left;
    setPlayedTimePercentage((relativeMouseClickedPosition / rect.width) * 100);
    audioRef.current.currentTime =
        (relativeMouseClickedPosition / rect.width) * audioRef.current.duration;
}

export function handleAudioSlider(audioRef, setPlayedTimePercentage) {
    let sliderValue =
        (100 / audioRef.current.duration) * audioRef.current.currentTime;
    setPlayedTimePercentage(sliderValue);
}
//=================================================Video Controller============================================
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

export function handleVideoTag(url, setVidUrl) {
    if (url) {
        setVidUrl(url.replace('video', 'source'));
    }
}

//=================================================Footer Controller============================================
export function toggleShareList(isShareListOpen, setIsShareListOpen) {
    setIsShareListOpen(!isShareListOpen);
}

export function copyLink(postLink, postId) {
    navigator.clipboard.writeText(postLink);
    const btn = document.getElementById(`copy-btn${postId}`);
    btn.textContent = 'Link Copied!';
    setTimeout(() => {
        btn.textContent = 'Copy link';
    }, 2000);
}

//=================================================ImageList Controller============================================
export function extractImageData(imageUrl, setImgSrcUrl, setImgAlt) {
    let cont = document.createElement('div');
    cont.innerHTML = imageUrl;
    setImgSrcUrl(cont.children[0].src);
    setImgAlt(cont.children[0].alt);
}

export function showImage(imgSrcUrl, postId) {
    document.getElementById(
        `preview-img${imgSrcUrl}-${postId}`
    ).style.visibility = 'visible';

    document.getElementById(
        `show-image-modal${imgSrcUrl}-${postId}`
    ).style.display = 'flex';
    document.getElementById(`preview-img${imgSrcUrl}-${postId}`).style.display =
        'flex';
    document.getElementById(`preview-img${imgSrcUrl}-${postId}`).src =
        imgSrcUrl;
}

export function closeImagePreview(imgSrcUrl, postId) {
    document.getElementById(
        `show-image-modal${imgSrcUrl}-${postId}`
    ).style.display = 'none';
}

//=================================================ImageList Controller============================================

export function chaneMobileView(setMobileView) {
    if (window.innerWidth > 960) {
        setMobileView(false);
    } else {
        setMobileView(true);
    }
}
