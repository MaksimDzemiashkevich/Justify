const sidebar = document.getElementById("playLists");
let hideTimeout = null;

sidebar.addEventListener("scroll", () => {
    sidebar.classList.add("scrolling");

    clearTimeout(hideTimeout);

    hideTimeout = setTimeout(() => {
        sidebar.classList.remove("scrolling");
    }, 1000);
});
