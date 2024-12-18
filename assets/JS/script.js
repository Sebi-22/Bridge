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

                // Añadir contenido interno manteniendo la estructura HTML
                dateItem.innerHTML = `
                    <div class="date">${fecha.date}</div>
                    <div class="month-day">
                        <div>${fecha.month}</div>
                        <div>${fecha.day}</div>
                    </div>
                    <div class="details">${fecha.details}</div>
                    <a href="${fecha.link}" class="buy-tickets">Buy Tickets</a>
                `;

                // Agregar antes del contenedor "view-all"
                const viewAllContainer = document.querySelector(".view-all");
                section.insertBefore(dateItem, viewAllContainer);
            });

            // Oculta el botón después de agregar las fechas
            viewAllBtn.style.display = "none";
        });
    } else {
        console.error("No se encuentra el botón con id 'view-all-btn'");
    }
});

//Boton del video que no anda
document.querySelector('.play-button').addEventListener('click', function() {
    console.log('Play button clicked');
    const videoIframe = document.getElementById('videoIframe');
    console.log(videoIframe); // Verifica si el iframe se seleccionó correctamente
    videoIframe.src = "https://player.vimeo.com/video/124943519?title=0&byline=0&portrait=0&autoplay=1";
    
    const videoModal = document.getElementById('videoModal');
    console.log(videoModal); // Verifica si el modal se seleccionó correctamente
    videoModal.style.display = 'flex';
});

document.getElementById('cerrarModal').addEventListener('click', function() {
    console.log('Close button clicked');
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    videoModal.style.display = 'none';
    videoIframe.src = ""; // Limpiar el src para detener el video
});

//Formulario de contacto
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

  // Variables de control de audio
  const playPauseBtn = document.getElementById('play-pause');
  const progressBar = document.getElementById('progress-bar');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');
  const volumeSlider = document.getElementById('volume-slider');
  
  // Crear audio (reemplaza 'ruta_del_audio.mp3' con la ruta real de tu archivo de audio)
  const audio = new Audio('assets/images/Soundgarden - Black Hole Sun_3mbBbFH9fAg.mp3');

  audio.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBarFill.style.width = `${progress}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  progressBar.addEventListener('click', (e) => {
      const clickPosition = (e.offsetX / progressBar.offsetWidth) * audio.duration;
      audio.currentTime = clickPosition;
  });

  playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          playPauseBtn.classList.replace('fa-play', 'fa-pause');
      } else {
          audio.pause();
          playPauseBtn.classList.replace('fa-pause', 'fa-play');
      }
  });

  volumeSlider.addEventListener('input', () => {
      audio.volume = volumeSlider.value;
  });

  function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${mins}:${secs}`;
  }
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
                    img.alt = `Album cover with text '${album.title}'`;

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
    const scrollTopButton = document.getElementById('scrollToTopBtn');
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
