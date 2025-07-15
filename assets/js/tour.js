// ========== FECHAS CONCIERTOS ==========
document.addEventListener("DOMContentLoaded", function () {
    const viewAllBtn = document.getElementById("view-all-btn");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const fechasAdicionales = [
                { date: "22", month: "Jun", day: "Fri", ciudad: "London, England – O2 Arena", link: "event.html" },
                { date: "27", month: "Jun", day: "Wed", ciudad: "Rome, Italy – Cola Arena", link: "event.html" },
                { date: "29", month: "Jun", day: "Fri", ciudad: "Athens, Greece – PAOK Stadium", link: "event.html" },
                { date: "03", month: "Jul", day: "Tue", ciudad: "Budapest, Hungary – Nagy Arena", link: "event.html" }
            ];
            const section = document.getElementById("datos");
            const ul = section.querySelector("ul");
            fechasAdicionales.forEach(fecha => {
                const dateItem = document.createElement("li");
                dateItem.classList.add("date-item");
                dateItem.innerHTML = `
                    <div class="date-block">
                        <div class="date">${fecha.date}</div>
                        <div class="month-day">
                            <span>${fecha.month.toUpperCase()}</span>
                            <span>${fecha.day.toUpperCase()}</span>
                        </div>
                    </div>
                    <a href="${fecha.link}" class="ciudad-link">
                        <div class="ciudad">${fecha.ciudad.toUpperCase()}</div>
                    </a>
                    <a href="#" class="buy-tickets">BUY TICKETS</a>
                `;
                ul.appendChild(dateItem);
            });
            viewAllBtn.style.display = "none";
        });
    }
});

// ========== MODO OSCURO/CLARO ==========
const toggleBtn = document.getElementById('toggle-dark-mode');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = toggleBtn.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// ========== BOTÓN SCROLL ARRIBA ==========
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}