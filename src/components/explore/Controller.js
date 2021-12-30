const scrollWithClick = amount => {
    const myElement = document.getElementsByClassName('explore-hashtags')[0];
    myElement.scrollLeft += amount;
};

const changeView = (setGrid, toGrid) => {
    if (toGrid) setGrid(true);
    else setGrid(false);
};

const showTags = (setStart, setEnd, end, len) => {
    if (end >= len) {
        setStart(0);
        setEnd(4);
    } else {
        setStart(prevStart => {
            return prevStart + 4;
        });
        setEnd(end + 4);
    }
};

export { scrollWithClick, changeView, showTags };
