document.getElementById("view-all-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el salto de página
    
    // Fechas adicionales a añadir
    const fechasAdicionales = [
        {
            date: "22",
            month: "Jun",
            day: "Fri",
            details: "London, England – O2 Arena",
            link: "#"
        },
        {
            date: "27",
            month: "Jun",
            day: "Wed",
            details: "Rome, Italy – Cola Arena",
            link: "#"
        },
        {
            date: "29",
            month: "Jun",
            day: "Fri",
            details: "Athens, Greece – PAOK Stadium",
            link: "#"
        },
        {
            date: "3",
            month: "Jul",
            day: "Tue",
            details: "Budapest, Hungary – Nagy Arena",
            link: "#"
        }
    ];
    
    const section = document.getElementById("datos");

    // Genera y añade las nuevas fechas
    fechasAdicionales.forEach(fecha => {
        const dateItem = document.createElement("div");
        dateItem.classList.add("date-item");
        
        dateItem.innerHTML = `
            <div class="date">${fecha.date}
                <div class="day">${fecha.month}</div>
                <div class="day">${fecha.day}</div>
            </div>
            <div class="details">${fecha.details}</div>
            <a href="${fecha.link}" class="buy-tickets">Buy Tickets</a>
        `;
        
        section.insertBefore(dateItem, document.querySelector(".view-all"));
    });

    // Oculta el botón después de agregar las fechas
    event.target.style.display = "none";
});

document.querySelector('.play-button').addEventListener('click', function() {
    const videoIframe = document.getElementById('videoIframe');
    videoIframe.src = "https://player.vimeo.com/video/124943519?title=0&byline=0&portrait=0&autoplay=1";
    
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'flex';
});

document.getElementById('cerrarModal').addEventListener('click', function() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    videoModal.style.display = 'none';
    videoIframe.src = ""; // Limpiar el src para detener el video
});


function toggleLyrics(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}


function sendMessage() {
    // Capturar los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar los campos requeridos
    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validación de formato de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Enviar datos o mostrar una confirmación
    alert(`Mensaje enviado:\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
}