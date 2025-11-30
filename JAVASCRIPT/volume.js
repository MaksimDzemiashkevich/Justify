const volumeIcon = document.getElementById('volume-icon');
const audio = document.getElementById("audioPlayer");

if (volume) {
    updateIconVolume(volume);

    volume.addEventListener('input', () => updateIconVolume(volume));
}

volume.addEventListener('input', () => {
    audio.volume = volume.value / 100;
    updateIconVolume(volume);
});

function updateIconVolume(range) {
    const value = range.value;


    
    if (value == 0) {
        volumeIcon.src = "/Image/mute.png"; 
    }
    else if (value > 0 && value <= 50) {
        volumeIcon.src = "/Image/lowVolume.png";
    }
    else if (value > 50) {
        volumeIcon.src = "/Image/highVolume.png";
    }
}
