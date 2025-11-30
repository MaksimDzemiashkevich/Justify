const newPlaylistBtn = document.getElementById('new-playlist-btn');
const modal = document.getElementById('new-playlist-modal');
const closeModal = document.getElementById('close-modal');

newPlaylistBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
