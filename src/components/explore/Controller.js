const scrollWithClick = amount => {
    const myElement = document.getElementsByClassName('explore-hashtags')[0];
    myElement.scrollLeft += amount;
};

export { scrollWithClick };
