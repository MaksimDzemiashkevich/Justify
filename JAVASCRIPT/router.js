document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    async function loadPage(page) {
        try {
            
            const response = await fetch(`/HTML/${page}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const html = await response.text();
            content.innerHTML = html;
            

            // ИНИЦИАЛИЗАЦИЯ функционала для конкретной страницы:
            initContentFor(page);

            // скролл в начало (опционально)
            content.scrollTop = 0;
        } catch (error) {
            console.error("Ошибка загрузки страницы:", error);
            content.innerHTML = "<h2>Ошибка загрузки страницы</h2>";
        }
    }

    loadPage("Home.html");

    document.querySelectorAll("[data-page]").forEach(item => {
        item.addEventListener("click", () => {
            const page = item.dataset.page;
            loadPage(page);
        });
    });

    const homeBtn = document.getElementById("homik");
    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            loadPage("Home.html");
        });
    }
    
});

function initContentFor(page) {
    
    if (page === "Home.html") {
        initHomeControls();
    }
}

function initHomeControls() {
    const row = document.getElementById("top-week-row");
    const nextBtn = document.getElementById("top-week-next");
    const prevBtn = document.getElementById("top-week-prev");

    if (nextBtn && row) {
        nextBtn.onclick = () => {
            row.scrollBy({ left: row.clientWidth, behavior: "smooth" });
            console.log("scrolled right");
        };
    }

    if (prevBtn && row) {
        prevBtn.onclick = () => {
            row.scrollBy({ left: -row.clientWidth, behavior: "smooth" });
            console.log("scrolled left");
        };
    }

}

