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

// ========== MODAL VIDEO (NO DISPONIBLE) ==========
document.addEventListener("DOMContentLoaded", function () {
    const abrirModal = document.getElementById("abrirModal");
    const cerrarModal = document.getElementById("cerrarModal");
    const modal = document.getElementById("nuevomodal");

    // Inicializa el modal como oculto
    modal.style.display = "none";

    // Abre el modal
    abrirModal.addEventListener("click", () => {
        modal.style.display = "flex";
        abrirModal.style.display = "none"; // Oculta el botón de reproducción
    });

    // Cierra el modal
    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
        abrirModal.style.display = "block"; // Muestra el botón de reproducción
    });

    // Cierra el modal al hacer clic fuera de él
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            abrirModal.style.display = "block"; // Muestra el botón de reproducción
        }
    });
});

// ========== GALERÍA DE ÁLBUMES (OUR DISCOGRAPHY) ==========
const newAlbums = [
    { src: "assets/images/album-5.jpg", title: "FALLEN", description: "Harmony" },
    { src: "assets/images/album-6.jpg", title: "JOY", description: "Eclipse" },
    { src: "assets/images/album-7.jpg", title: "FREE YOUR MIND", description: "Ocean" },
    { src: "assets/images/album-8.jpg", title: "LOW BASS", description: "Shadows" },
];

function initializeAlbumGallery() {
    document.addEventListener("DOMContentLoaded", function () {
        const showMoreButton = document.getElementById("show-more");
        if (showMoreButton) {
            showMoreButton.addEventListener("click", function (event) {
                event.preventDefault();
                const albumsContainer = document.querySelector(".albums");
                if (albumsContainer) {
                    newAlbums.forEach(album => {
                        const article = document.createElement("article");
                        article.classList.add("albumes");
                        const figure = document.createElement("figure");
                        const img = document.createElement("img");
                        img.src = album.src;
                        img.alt = `Album cover for '${album.title}'`;
                        const figcaption = document.createElement("figcaption");
                        const h3 = document.createElement("h3");
                        h3.textContent = album.title;
                        const p = document.createElement("p");
                        p.textContent = album.description;
                        figcaption.appendChild(h3);
                        figcaption.appendChild(p);
                        figure.appendChild(img);
                        figure.appendChild(figcaption);
                        article.appendChild(figure);
                        albumsContainer.appendChild(article);
                    });
                    showMoreButton.style.display = "none";
                    setTimeout(() => {
                        showMoreButton.style.display = "block";
                    }, 300);
                }
            });
        }
    });
}

// Invocar la función en ambas páginas
initializeAlbumGallery();

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

// ========== GALERÍA DE ÁLBUMES (OUR DISCOGRAPHY - INICIAL) ==========
document.addEventListener("DOMContentLoaded", function() {
    const albums = [
        { imgSrc: "assets/images/album-1.jpg", altText: "Album cover with neon lights and text 'Be - Doo Be - Doo'", title: "BE-DOO", artist: "Caller" },
        { imgSrc: "assets/images/album-2.jpg", altText: "Album cover with a road sign and text 'Make It Go Away'", title: "FREE SPIRIT", artist: "Go Away" },
        { imgSrc: "assets/images/album-3.jpg", altText: "Album cover with neon sign and text 'Today Was A Good Day'", title: "DEPRESSED DAYS", artist: "Ritual Spirit" },
        { imgSrc: "assets/images/album-4.jpg", altText: "Album cover with a dancer and text 'FOND OF HER'", title: "WRONG MOTION", artist: "Love Hate" }
    ];
    const albumContainer = document.getElementById("album-container");
    albums.forEach(album => {
        const article = document.createElement("article");
        article.classList.add("albumes");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = album.imgSrc;
        img.alt = album.altText;

        // Agregar figcaption con título y artista
        const figcaption = document.createElement("figcaption");
        const h3 = document.createElement("h3");
        h3.textContent = album.title;
        const p = document.createElement("p");
        p.textContent = album.artist;
        figcaption.appendChild(h3);
        figcaption.appendChild(p);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        article.appendChild(figure);
        albumContainer.appendChild(article);
    });
});

// ========== REPRODUCTOR DE AUDIOS EN TRACKLIST ==========
/* ========================== AUDIO GLOBAL ========================== */
const audio           = new Audio();
audio.src             = "assets/images/Soundgarden - Black Hole Sun_3mbBbFH9fAg.mp3";

const playPauseBtn    = document.getElementById("main-audio-play-pause");
const progressBar     = document.getElementById("main-audio-progress-bar");
const progressBarFill = document.getElementById("main-audio-progress-bar-fill");
const currentTimeEl   = document.getElementById("main-audio-current-time");
const durationEl      = document.getElementById("main-audio-duration");
const volumeSlider    = document.getElementById("main-audio-volume-slider");

/* ------------------------- UTILIDADES ---------------------------- */
const formatTime = secs => {
  const m  = Math.floor(secs / 60);
  const ss = Math.floor(secs % 60).toString().padStart(2, "0");
  return `${m}:${ss}`;
};

function updatePlayIcons(state) {
  /* Botón principal */
  playPauseBtn.classList.toggle("fa-play",  state === "pause");
  playPauseBtn.classList.toggle("fa-pause", state === "play");

  /* Iconos del tracklist */
  document.querySelectorAll(".track-icons").forEach(box => {
    const play  = box.querySelector(".fa-play");
    const pause = box.querySelector(".fa-pause");
    const title = box.closest("li").querySelector(".track-title");
    const isCurrent = box.dataset.src === audio.src;

    if (isCurrent) {
      play.style.display  = state === "pause" ? "inline" : "none";
      pause.style.display = state === "play"  ? "inline" : "none";
      title.classList.toggle("playing", state === "play");
    } else {
      play.style.display  = "inline";
      pause.style.display = "none";
      title.classList.remove("playing");
    }
  });
}

/* --------------------- METADATOS Y PROGRESO ---------------------- */
audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});
audio.addEventListener("timeupdate", () => {
  const pct = (audio.currentTime / audio.duration) * 100;
  progressBarFill.style.width = `${pct}%`;
  currentTimeEl.textContent   = formatTime(audio.currentTime);
});
progressBar.addEventListener("click", e => {
  const pct = e.offsetX / progressBar.offsetWidth;
  audio.currentTime = pct * audio.duration;
});
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

/* ----------------------- BOTÓN PRINCIPAL ------------------------ */
playPauseBtn.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});
audio.addEventListener("play",  () => updatePlayIcons("play"));
audio.addEventListener("pause", () => updatePlayIcons("pause"));
audio.addEventListener("ended", () => updatePlayIcons("pause"));

/* -------------------------- TRACKLIST --------------------------- */
document.querySelectorAll(".track-icons").forEach(box => {
  const playBtn  = box.querySelector(".fa-play");
  const pauseBtn = box.querySelector(".fa-pause");
  const src      = playBtn.dataset.src;   // archivo mp3

  /* guarda src para la función updatePlayIcons */
  box.dataset.src = src;

  /* muestra sólo el icono de play inicialmente */
  playBtn.style.display  = "inline";
  pauseBtn.style.display = "none";

  playBtn.addEventListener("click", () => {
    if (audio.src !== src) audio.src = src; // cambia de canción
    audio.play();
  });

  pauseBtn.addEventListener("click", () => {
    if (audio.src === src) audio.pause();
  });
});


// ========== MODAL PARA VIDEO EN TRACKLIST ==========
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const videoIcons = document.querySelectorAll(".video-icon");
  const closeModal = document.querySelector(".cierre");

  videoIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const videoUrl = this.getAttribute("data-video");
      videoFrame.src = videoUrl;
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    videoFrame.src = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });

  // Opcional: cerrar con ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });
});


// ========== GALERÍA DE FOTOS PRINCIPAL ==========
document.addEventListener("DOMContentLoaded", function() {
  const images = [
    { src: "assets/images/h1-img-1.jpg", alt: "Band performing on stage with red lights", size: "large" },
    { src: "assets/images/h1-img-2.jpg", alt: "Guitarist sitting on an amplifier", size: "small" },
    { src: "assets/images/h1-img-3.jpg", alt: "Guitarist and singer performing", size: "small" },
    { src: "assets/images/h1-img-4.jpg", alt: "Singer performing on stage with crowd", size: "small" },
    { src: "assets/images/h1-img-5.jpg", alt: "Drummer playing drums", size: "small" },
    { src: "assets/images/h1-img-6.jpg", alt: "Guitarist performing with green lights", size: "large" }
  ];
  const galleryContainer = document.getElementById("gallery-container");
  const modal = document.getElementById("myModal");
     // Verifica que el modal existe:
     console.log(modal); // Debe mostrar el elemento HTML
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".modal .cerrar");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  let currentIndex = 0;

  // Crear galería
  images.forEach((image, index) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image", image.size);
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.setAttribute("data-index", index);
    img.addEventListener("click", function() {
      currentIndex = index;
      openModal(currentIndex);
    });
    imageDiv.appendChild(img);
    galleryContainer.appendChild(imageDiv);
  });

  function openModal(index) {
    modal.style.display = "flex";
    updateModalImage(index);
    document.body.style.overflow = "hidden"; // Evitar scroll de fondo
  }

     function closeModal() {
       modal.style.display = "none";
       console.log("Modal cerrado"); // Verifica en la consola
       document.body.style.overflow = "";
     }
     

  function updateModalImage(index) {
    modalImg.src = images[index].src;
    modalImg.alt = images[index].alt;
  }

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Navegación slider
  arrowLeft.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage(currentIndex);
  });

  arrowRight.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage(currentIndex);
  });

  // Navegación con teclado
  document.addEventListener("keydown", function(e) {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage(currentIndex);
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage(currentIndex);
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  });
});
