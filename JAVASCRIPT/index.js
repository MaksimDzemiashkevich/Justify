document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            window.location.href = "registrate.html";
        });
    }
});
document.getElementById('loginBtn').addEventListener('click', function() {
    window.location.href = 'enter.html'; 
});

function updateRangeBackground(rangeElem, colorFilled = '#FCB821', colorRemaining = '#ffffff') {
    const min = parseFloat(rangeElem.min) || 0;
    const max = parseFloat(rangeElem.max) || 100;
    const val = parseFloat(rangeElem.value);

    const percent = ((val - min) / (max - min)) * 100;

    rangeElem.style.background =
        `linear-gradient(90deg, ${colorFilled} 0%, ${colorFilled} ${percent}%, ${colorRemaining} ${percent}%, ${colorRemaining} 100%)`;
}

const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

if (progress) {
    progress.classList.add('range-gradient');
    updateRangeBackground(progress);
    progress.addEventListener('input', () => updateRangeBackground(progress));
}

if (volume) {
    volume.classList.add('range-gradient');
    updateRangeBackground(volume);
    volume.addEventListener('input', () => updateRangeBackground(volume));
}
