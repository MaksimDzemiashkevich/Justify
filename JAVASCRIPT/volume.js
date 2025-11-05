const volumeIcon = document.getElementById('volume-icon');

if (volume) {
    updateIconVolume(volume);

    // обновляем иконку при движении ползунка
    volume.addEventListener('input', () => updateIconVolume(volume));
}

function updateIconVolume(range) {
    const value = range.value;

    if (value == 0) {
        volumeIcon.src = "../Image/mute.png"; 
    }
    else if (value > 0 && value <= 50) {
        volumeIcon.src = "../Image/lowVolume.png";
    }
    else if (value > 50) {
        volumeIcon.src = "../Image/highVolume.png";
    }
}
