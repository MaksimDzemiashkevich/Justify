document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    // Функция загрузки HTML страницы
    async function loadPage(page) {
        try {
            const response = await fetch(`/content/${page}.html`);
            const html = await response.text();
            content.innerHTML = html;
        } catch (error) {
            content.innerHTML = "<h2>Ошибка загрузки страницы</h2>";
        }
    }

    // Первоначальная загрузка главной страницы
    loadPage("home");

    // Ловим клики по плейлистам и другим кнопкам
    document.querySelectorAll("[data-page]").forEach(item => {
        item.addEventListener("click", () => {
            const page = item.dataset.page;
            loadPage(page);
        });
    });
});
