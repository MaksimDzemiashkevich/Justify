document.addEventListener('DOMContentLoaded', function() {
    const editModal = document.getElementById('edit-playlist-modal');
    const closeEditModal = document.getElementById('close-edit-modal');
    const editForm = document.getElementById('edit-playlist-form');
    const playlistHeader = document.querySelector('#playlistHeader .info h1');
    const fileInput = document.querySelector('.file-upload input');
    const uploadArea = document.querySelector('.file-upload .upload-area');

    // Делаем название плейлиста кликабельным
    if (playlistHeader) {
        playlistHeader.classList.add('playlist-header-clickable');
        playlistHeader.addEventListener('click', openEditModal);
    }

    // Открытие модального окна
    function openEditModal() {
        document.getElementById('edit-playlist-name').value = playlistHeader.textContent;
        editModal.classList.add('active');
    }

    // Закрытие модального окна
    closeEditModal.addEventListener('click', function() {
        editModal.classList.remove('active');
    });

    // Закрытие при клике вне модального окна
    editModal.addEventListener('click', function(e) {
        if (e.target === editModal) {
            editModal.classList.remove('active');
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && editModal.classList.contains('active')) {
            editModal.classList.remove('active');
        }
    });

    // Загрузка файла и отображение превью
    if (fileInput && uploadArea) {
        fileInput.addEventListener('change', function(e) {
            if (this.files[0]) {
                const file = this.files[0];
                document.querySelector('.file-upload span').textContent = file.name;
                
                // Создаем превью изображения
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Убираем старый превью
                    const oldPreview = uploadArea.querySelector('.preview');
                    if (oldPreview) {
                        oldPreview.remove();
                    }
                    
                    // Создаем новое превью
                    const preview = document.createElement('img');
                    preview.src = e.target.result;
                    preview.classList.add('preview');
                    preview.style.display = 'block';
                    
                    // Вставляем перед текстом
                    const textSpan = uploadArea.querySelector('span');
                    uploadArea.insertBefore(preview, textSpan);
                    
                    // Добавляем класс для изменения стилей
                    uploadArea.classList.add('has-image');
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Обработка отправки формы
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        // Здесь AJAX запрос для сохранения изменений
        fetch('/PHP/updatePlaylist.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                playlistHeader.textContent = document.getElementById('edit-playlist-name').value;
                editModal.classList.remove('active');
            } else {
                alert('Ошибка: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Произошла ошибка при сохранении');
        });
    });
});