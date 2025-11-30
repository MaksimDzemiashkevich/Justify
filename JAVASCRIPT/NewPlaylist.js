const newPlaylistBtn = document.getElementById('new-playlist-btn');
const modal = document.getElementById('new-playlist-modal');

newPlaylistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.toggle('active');
    newPlaylistBtn.classList.toggle('active');
});

// Закрытие при клике вне модального окна
document.addEventListener('click', (e) => {
    if (modal.classList.contains('active') && 
        !modal.contains(e.target) && 
        !newPlaylistBtn.contains(e.target)) {
        modal.classList.remove('active');
        newPlaylistBtn.classList.remove('active');
    }
});

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        newPlaylistBtn.classList.remove('active');
    }
});