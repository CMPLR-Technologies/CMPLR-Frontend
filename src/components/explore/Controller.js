const scrollWithClick = amount => {
    const myElement = document.getElementsByClassName('explore-hashtags')[0];
    myElement.scrollLeft += amount;
};

const changeView = (setGrid, toGrid) => {
    if (toGrid) setGrid(true);
    else setGrid(false);
};

export { scrollWithClick, changeView };
