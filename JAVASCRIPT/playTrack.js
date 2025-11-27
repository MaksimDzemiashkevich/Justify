const playBtn = document.getElementById("playBtn");
const trackName = document.getElementById("track-name");
const trackArtist = document.getElementById("track-artist");
const progress = document.getElementById("progress");
const currentTimeElem = document.getElementById("current-time");
const totalTimeElem = document.getElementById("total-time");

document.querySelectorAll(".track").forEach(track => {
    track.addEventListener("dblclick", () => {
        const src = track.dataset.src;
        const name = track.querySelector(".track-title").innerText;
        const artist = track.querySelector(".track-artist").innerText;

        playSong(src, name, artist);
    });
});

function playSong(src, name, artist) {
    audio.src = src;
    audio.play();

    playBtn.innerText = "⏸";

    trackName.innerText = name;
    trackArtist.innerText = artist;

    audio.addEventListener("loadedmetadata", () => {
        totalTimeElem.innerText = formatTime(audio.duration);
    });
}

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
});

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
    updateRangeBackground(progress);
    currentTimeElem.innerText = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(time) {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
