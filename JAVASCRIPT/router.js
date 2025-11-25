const row = document.getElementById("top-week-row");
const nextBtn = document.getElementById("top-week-next");
const prevBtn = document.getElementById("top-week-prev");

if (nextBtn && row) {
    nextBtn.onclick = () => {
        row.scrollBy({ left: row.clientWidth, behavior: "smooth" });
        console.log("scrolled right");
    };
}

if (prevBtn && row) {
    prevBtn.onclick = () => {
        row.scrollBy({ left: -row.clientWidth, behavior: "smooth" });
        console.log("scrolled left");
    };
}