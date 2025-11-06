const buttonPlay = document.getElementById("playBtn");

if (buttonPlay) {
    buttonPlay.addEventListener('click', () => {
        changeIconPlay(buttonPlay);
    });
}

function changeIconPlay(button) {
    if (button.textContent === "▶") {
        button.textContent = "⏸";
    }
    else {
        button.textContent = "▶";
    }
}
