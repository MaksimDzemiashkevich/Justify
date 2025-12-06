// script.js

// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // Вешаем обработчик клика на все иконки корзины
    document.querySelectorAll('.track-trash').forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Останавливаем всплытие
            
            // Получаем ID трека
            const trackId = this.getAttribute('data-track-id');
            
            // Просто показываем сообщение
            console.log(`Кликнули на удаление трека с ID: ${trackId}`);
            
            // Можно показать alert
            alert(`Трек #${trackId} будет удален`);
            
            // Или добавить визуальный эффект
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    console.log('Кнопки удаления активированы!');
});