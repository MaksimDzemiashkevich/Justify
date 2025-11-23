const sidebar = document.getElementById("playLists");
let hideTimeout = null;

sidebar.addEventListener("scroll", () => {
    // показать
    sidebar.classList.add("scrolling");

    // сбросить предыдущий таймер
    clearTimeout(hideTimeout);

    // скрыть через 1 секунду
    hideTimeout = setTimeout(() => {
        sidebar.classList.remove("scrolling");
    }, 1000);
});
