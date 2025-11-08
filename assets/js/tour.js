// ========== FECHAS CONCIERTOS ==========
document.addEventListener("DOMContentLoaded", function () {
    const viewAllBtn = document.getElementById("view-all-btn");
    
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function (event) {
            event.preventDefault();
            
            const fechasAdicionales = [
                { date: "22", month: "Jun", day: "Fri", ciudad: "London, England – O2 Arena", link: "event.html", datetime: "2018-06-22" },
                { date: "27", month: "Jun", day: "Wed", ciudad: "Rome, Italy – Cola Arena", link: "event.html", datetime: "2018-06-27" },
                { date: "29", month: "Jun", day: "Fri", ciudad: "Athens, Greece – PAOK Stadium", link: "event.html", datetime: "2018-06-29" },
                { date: "03", month: "Jul", day: "Tue", ciudad: "Budapest, Hungary – Nagy Arena", link: "event.html", datetime: "2018-07-03" }
            ];
            
            const section = document.getElementById("datos");
            if (!section) {
                console.error("No se encontró la sección de datos");
                return;
            }
            
            const ul = section.querySelector("ul");
            if (!ul) {
                console.error("No se encontró la lista de fechas");
                return;
            }
            
            fechasAdicionales.forEach(fecha => {
                const dateItem = document.createElement("li");
                dateItem.classList.add("date-item");
                dateItem.innerHTML = `
                    <div class="date-block">
                        <time datetime="${fecha.datetime}">
                            <span class="date">${fecha.date}</span>
                            <span class="month-day">
                                <span>${fecha.month.toUpperCase()}</span>
                                <span>${fecha.day.toUpperCase()}</span>
                            </span>
                        </time>
                    </div>
                    <a href="${fecha.link}" class="ciudad-link">
                        <span class="ciudad">${fecha.ciudad.toUpperCase()}</span>
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
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    });
}

// ========== BOTÓN SCROLL ARRIBA ==========
const scrollBtn = document.getElementById('scrollToTopBtn');
if (scrollBtn) {
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    };
    
    scrollBtn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}