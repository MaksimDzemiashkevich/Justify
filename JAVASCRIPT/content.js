document.getElementById("top-week-next").onclick = () => {
    const row = document.getElementById("top-week-row");
    row.scrollLeft += row.clientWidth; 
};

document.getElementById("top-week-prev").onclick = () => {
    const row = document.getElementById("top-week-row");
    row.scrollLeft -= row.clientWidth; 
};