document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            window.location.href = "/HTML/registrate.html";
        });
    }
    document.getElementById('loginBtn').addEventListener('click', function() {
        window.location.href = "/HTML/enter.html"; 
    });

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
    
});


function updateRangeBackground(rangeElem, colorFilled = '#FCB821', colorRemaining = '#ffffff') {
    const min = parseFloat(rangeElem.min) || 0;
    const max = parseFloat(rangeElem.max) || 100;
    const val = parseFloat(rangeElem.value);

    const percent = ((val - min) / (max - min)) * 100;

    rangeElem.style.background =
        `linear-gradient(90deg, ${colorFilled} 0%, ${colorFilled} ${percent}%, ${colorRemaining} ${percent}%, ${colorRemaining} 100%)`;
}

// Открытие/закрытие сайдбара на мобильных
const sidebar = document.getElementById('playLists');
const sidebarToggle = document.querySelector('.playlist-mobile-toggle');
const sidebarOverlay = document.querySelector('.sidebar-overlay');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('mobile-open');
        sidebarOverlay.classList.add('active');
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        sidebarOverlay.classList.remove('active');
    });
}

// Закрытие сайдбара при клике на ссылку
document.querySelectorAll('#playLists a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    });
});
