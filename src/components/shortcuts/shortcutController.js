export const shortcutController = () => {
  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.code === "KeyC") {
      console.log("New Post!");
    } else if (e.shiftKey && e.code === "Slash") {
      console.log("Go to SearchBar?");
      //document.querySelector("search-bar").focus();
    } else if (e.code === "Period") {
      console.log("Back to the top ^^");
    } else if (e.code === "KeyL") {
      console.log("Like This one <3");
    } else if (e.code === "KeyJ") {
      console.log("Scroll to next post ->");
    } else if (e.code === "KeyK") {
      console.log("Scroll to prev post <-");
    }
    e.stopImmediatePropagation();
  });
};
