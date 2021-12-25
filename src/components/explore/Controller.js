const scrollWithClick = amount => {
    const myElement = document.getElementsByClassName('explore-hashtags')[0];
    myElement.scrollLeft += amount;
};

const changeView = (setGrid, toGrid) => {
    if (toGrid) setGrid(true);
    else setGrid(false);
};

const showTags = (end, setStart, setEnd) => {
    if (end === 6) {
        setStart(0);
        setEnd(4);
    } else if (end + 4 > 6) {
        setStart(start => {
            return start + 4;
        });
        setEnd(6);
    } else {
        setStart(start => {
            return start + 4;
        });
        setEnd(end => {
            return end + 4;
        });
    }
};

function returnWidth() {
    let e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    console.log(e[a + 'Width']);
    return e[a + 'Width'];
}

export { scrollWithClick, changeView, showTags, returnWidth };
