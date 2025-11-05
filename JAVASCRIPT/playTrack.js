const buttonPlay = document.getElementById("playBtn");

if (buttonPlay) {
    buttonPlay.addEventListener('click', () => {
        changeIconPlay(buttonPlay);
    });
}

function changeIconPlay(button) {
    // Если сейчас "▶", меняем на "⏸"
    if (button.textContent === "▶") {
        button.textContent = "⏸";
    } 
    // Если сейчас "⏸", меняем на "▶"
    else {
        button.textContent = "▶";
    }
}
