export function changeMobileView(setMobileView) {
    if (window.innerWidth > 960) {
        setMobileView(false);
    } else {
        setMobileView(true);
    }
}
