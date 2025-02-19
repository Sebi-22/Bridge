//Fechas conciertos 
document.addEventListener("DOMContentLoaded", function () {
    const viewAllBtn = document.getElementById("view-all-btn");

    if (viewAllBtn) { // Verifica que el botón esté disponible
        viewAllBtn.addEventListener("click", function (event) {
            event.preventDefault();

            // Fechas adicionales
            const fechasAdicionales = [
                {
                    date: "22",
                    month: "Jun",
                    day: "Fri",
                    ciudad: "London, England – O2 Arena",
                    link: "#"
                },
                {
                    date: "27",
                    month: "Jun",
                    day: "Wed",
                    ciudad: "Rome, Italy – Cola Arena",
                    link: "#"
                },
                {
                    date: "29",
                    month: "Jun",
                    day: "Fri",
                    ciudad: "Athens, Greece – PAOK Stadium",
                    link: "#"
                },
                {
                    date: "03",
                    month: "Jul",
                    day: "Tue",
                    ciudad: "Budapest, Hungary – Nagy Arena",
                    link: "#"
                }
            ];

            const section = document.getElementById("datos");
            const ul = section.querySelector("ul"); // Selecciona la lista existente

            // Genera y añade las nuevas fechas
            fechasAdicionales.forEach(fecha => {
                const dateItem = document.createElement("li"); // Crea un nuevo elemento de lista
                dateItem.classList.add("date-item");

                // Añadir contenido interno manteniendo la estructura HTML
                dateItem.innerHTML = `
                    <div class="date">${fecha.date}</div>
                    <div class="month-day">
                        <div>${fecha.month}</div>
                        <div>${fecha.day}</div>
                    </div>
                    <div class="ciudad">${fecha.ciudad}</div>
                    <a href="${fecha.link}" class="buy-tickets">Buy Tickets</a>
                `;

                // Agregar el nuevo elemento de lista a la lista existente
                ul.appendChild(dateItem);
            });

            // Oculta el botón después de agregar las fechas
            viewAllBtn.style.display = "none";
        });
    } else {
        console.error("No se encuentra el botón con id 'view-all-btn'");
    }
});

//Boton del video que no anda
document.addEventListener("DOMContentLoaded", function () {
    const abrirModal = document.getElementById("abrirModal");
    const cerrarModal = document.getElementById("cerrarModal");
    const modal = document.getElementById("nuevomodal");

    // Aseguramos que el modal no esté abierto al inicio
    modal.style.display = "none";

    abrirModal.addEventListener("click", () => {
        modal.style.display = "flex";
        abrirModal.style.display = "none"; // Oculta el botón de play
    });

    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
        abrirModal.style.display = "block"; // Muestra el botón de play al cerrar
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            abrirModal.style.display = "block"; // Vuelve a mostrar el botón de play
        }
    });
});
//Formulario de contacto
function sendMessage() {
    var verify = true;

    document.getElementById("error-name").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-message").textContent = "";
    document.getElementById("alerta").style.display = "none";

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "") {
        document.getElementById("error-name").textContent = "The field is required.";
        verify = false;
    }
    if (email === "") {
        document.getElementById("error-email").textContent = "The field is required.";
        verify = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("error-email").textContent = "Please enter a valid email.";
            verify = false;
        }
    }
    if (message === "") {
        document.getElementById("error-message").textContent = "The field is required.";
        verify = false;
    }

    if (verify) {
        window.location.replace("gracias.html");
    } else {
        document.getElementById("alerta").style.display = "block";
    }
}
//Audio 1
const playPauseBtn = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const progressBarFill = document.getElementById("progress-bar-fill");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume-slider");

// Crear el objeto de audio
const audio = new Audio("assets/images/Soundgarden - Black Hole Sun_3mbBbFH9fAg.mp3");

// Evento para cuando el audio carga sus metadatos
audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

// Evento de actualización del tiempo de reproducción
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = `${progress}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Hacer clic en la barra de progreso para adelantar la canción
progressBar.addEventListener("click", (e) => {
    const clickPosition = (e.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = clickPosition;
});

// Controlar el botón de play/pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.classList.replace("fa-play", "fa-pause"); // Cambia el icono a "pause"
    } else {
        audio.pause();
        playPauseBtn.class .replace("fa-pause", "fa-play"); // Cambia el icono a "play"
    }
});

// Control de volumen
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

// Formato de tiempo (minutos:segundos)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}
//Galeria de fotos con show more
// Arreglo de objetos con los datos de las nuevas imágenes
const newAlbums = [
    { src: "assets/images/album-5.jpg", title: "FALLEN", description: "Harmony" },
    { src: "assets/images/album-6.jpg", title: "JOY", description: "Eclipse" },
    { src: "assets/images/album-7.jpg", title: "FREE YOUR MIND", description: "Ocean" },
    { src: "assets/images/album-8.jpg", title: "LOW BASS", description: "Shadows" },
];

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón "SHOW MORE"
    const showMoreButton = document.getElementById("show-more");

    // Verifica si el botón existe
    if (showMoreButton) {
        showMoreButton.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Selecciona el contenedor de álbumes
            const albumsContainer = document.querySelector(".albums");

            // Verifica si el contenedor existe
            if (albumsContainer) {
                // Crea nuevos elementos de álbumes y los agrega al contenedor
                newAlbums.forEach(album => {
                    const article = document.createElement("article");
                    article.classList.add("albumes");

                    const figure = document.createElement("figure");

                    const img = document.createElement("img");
                    img.src = album.src;
                    img.alt = `Album cover for '${album.title}'`; // Mejora la accesibilidad

                    const figcaption = document.createElement("figcaption");

                    const h3 = document.createElement("h3");
                    h3.textContent = album.title;

                    const p = document.createElement("p");
                    p.textContent = album.description;

                    // Añadir los elementos al DOM
                    figcaption.appendChild(h3);
                    figcaption.appendChild(p);
                    figure.appendChild(img);
                    figure.appendChild(figcaption);
                    article.appendChild(figure);
                    albumsContainer.appendChild(article);
                });

                // Oculta el botón después de agregar las nuevas imágenes
                showMoreButton.style.display = "none";

                // Retraso opcional para mostrar el botón nuevamente
                setTimeout(() => {
                    showMoreButton.style.display = "block"; // Muestra el botón nuevamente
                }, 300); // Retraso de 300ms para suavizar el efecto de aparición
            }
        });
    }
});
//Boton de ir a arriba 
// Detecta cuando el usuario hace scroll y muestra el botón si no está en el header
window.addEventListener('scroll', function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    if (window.scrollY > headerHeight) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
// Función para hacer scroll hasta el inicio de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//Galeria de fotos 1
document.addEventListener("DOMContentLoaded", function() {
    // Datos de los álbumes
    const albums = [
        {
            imgSrc: "assets/images/album-1.jpg",
            altText: "Album cover with neon lights and text 'Be - Doo Be - Doo'",
            title: "BE-DOO",
            artist: "Caller"
        },
        {
            imgSrc: "assets/images/album-2.jpg",
            altText: "Album cover with a road sign and text 'Make It Go Away'",
            title: "FREE SPIRIT",
            artist: "Go Away"
        },
        {
            imgSrc: "assets/images/album-3.jpg",
            altText: "Album cover with neon sign and text 'Today Was A Good Day'",
            title: "DEPRESSED DAYS",
            artist: "Ritual Spirit"
        },
        {
            imgSrc: "assets/images/album-4.jpg",
            altText: "Album cover with a dancer and text 'FOND OF HER'",
            title: "WRONG MOTION",
            artist: "Love Hate"
        }
    ];

    // Selecciona el contenedor donde se agregarán los álbumes
    const albumContainer = document.getElementById("album-container");

    // Recorre los álbumes y los agrega dinámicamente
    albums.forEach(album => {
        // Crea el artículo y la estructura HTML para cada álbum
        const article = document.createElement("article");
        article.classList.add("albumes");

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = album.imgSrc;
        img.alt = album.altText;

        const figcaption = document.createElement("figcaption");

        const h3 = document.createElement("h3");
        h3.textContent = album.title;

        const p = document.createElement("p");
        p.textContent = album.artist;

        // Añadir los elementos al DOM
        figcaption.appendChild(h3);
        figcaption.appendChild(p);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(figure);

        // Agregar el artículo al contenedor
        albumContainer.appendChild(article);
    });
});
//Audios 
// Función para inicializar la visibilidad de los botones
function initializeButtonVisibility() {
    document.querySelectorAll('.fa-play').forEach(playButton => {
        playButton.style.display = 'inline'; // Mostrar botones de play
    });
    document.querySelectorAll('.fa-pause').forEach(pauseButton => {
        pauseButton.style.display = 'none'; // Ocultar botones de pausa
    });
}

// Llamar a la función para inicializar la visibilidad al cargar la página
initializeButtonVisibility();

document.querySelectorAll('.fa-play').forEach(playButton => {
    playButton.addEventListener('click', function() {
        // Detener todos los audios
        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
            audio.currentTime = 0; // Reiniciar el audio
        });

        // Ocultar todos los botones de play y mostrar todos los de pausa
        document.querySelectorAll('.fa-play').forEach(button => {
            button.style.display = 'inline';
        });
        document.querySelectorAll('.fa-pause').forEach(button => {
            button.style.display = 'none';
        });

        // Remover la clase 'playing' de todos los títulos
        document.querySelectorAll('.track-title').forEach(title => {
            title.classList.remove('playing');
        });

        // Obtener el audio correspondiente
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);

        // Reproducir el audio
        audio.play();

        // Agregar la clase 'playing' al título
        this.closest('li').querySelector('.track-title').classList.add('playing');

        // Alternar la visibilidad de los botones
        this.style.display = 'none'; // Ocultar botón de play
        this.closest('li').querySelector('.fa-pause').style.display = 'inline'; // Mostrar botón de pausa
    });
});

// Agregar el evento para el botón de pausa
document.querySelectorAll('.fa-pause').forEach(pauseButton => {
    pauseButton.addEventListener('click', function() {
        // Obtener el audio correspondiente
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);

        // Pausar el audio
        audio.pause();

        // Remover la clase 'playing' del título
        this.closest('li').querySelector('.track-title').classList.remove('playing');

        // Alternar la visibilidad de los botones
        this.style.display = 'none'; // Ocultar botón de pausa
        this.closest('li').querySelector('.fa-play').style.display = 'inline'; // Mostrar botón de play
    });
});

// Modal para video
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const videoIcons = document.querySelectorAll(".video-icon");
    const closeModal = document.querySelector(".cierre");

    videoIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const videoUrl = this.getAttribute("data-video");
            videoFrame.src = videoUrl;
            modal.style.display = "flex";
        });
    });
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        videoFrame.src = "";
    });
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            videoFrame.src = "";
        }
    });
});
/*galeria de fotos 2*/
document.addEventListener("DOMContentLoaded", function() {
    // Datos de las imágenes
    const images = [
        {
            src: "assets/images/h1-img-1.jpg",
            alt: "Band performing on stage with red lights",
            width: "50",
            size: "large"
        },
        {
            src: "assets/images/h1-img-2.jpg",
            alt: "Guitarist sitting on an amplifier",
            width: "25",
            size: "small"
        },
        {
            src: "assets/images/h1-img-3.jpg",
            alt: "Guitarist and singer performing",
            width: "25",
            size: "small"
        },
        {
            src: "assets/images/h1-img-4.jpg",
            alt: "Singer performing on stage with crowd",
            width: "25",
            size: "small"
        },
        {
            src: "assets/images/h1-img-5.jpg",
            alt: "Drummer playing drums",
            width: "25",
            size: "small"
        },
        {
            src: "assets/images/h1-img-6.jpg",
            alt: "Guitarist performing with green lights",
            width: "50",
            size: "large"
        }
    ];

    // Selecciona el contenedor donde se agregarán las imágenes
    const galleryContainer = document.getElementById("gallery-container");

    // Selecciona el modal y el elemento de imagen dentro del modal
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    // Recorre las imágenes y las agrega dinámicamente
    images.forEach(image => {
        // Crea un div para cada imagen
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image", image.size); // Agrega la clase "large" o "small"

        // Crea el elemento de imagen
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.width = image.width;

        // Añadir un evento para abrir el modal
        img.addEventListener("click", function() {
            modal.style.display = "block"; // Muestra el modal
            modalImg.src = image.src;    // Establece la imagen del modal
            modalImg.alt = image.alt;    // Establece el texto alternativo de la imagen
        });

        // Añadir la imagen al div
        imageDiv.appendChild(img);

        // Agregar el div al contenedor de la galería
        galleryContainer.appendChild(imageDiv);
    });

    // Cuando el usuario hace clic en el botón de cerrar (x), se cierra el modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none"; // Cierra el modal
    });

    // Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Cierra el modal si el usuario hace clic fuera de él
        }
    });
});


