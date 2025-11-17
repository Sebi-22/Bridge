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
                        <time datetime="2018-${fecha.month.toLowerCase()}-${fecha.date}">
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

// ========== MODAL VIDEO (NO DISPONIBLE) ==========
document.addEventListener("DOMContentLoaded", function () {
    const abrirModal = document.getElementById("abrirModal");
    const cerrarModal = document.getElementById("cerrarModal");
    const modal = document.getElementById("nuevomodal");

    if (abrirModal && cerrarModal && modal) {
        // Inicializa el modal como oculto
        modal.style.display = "none";

        // Abre el modal
        abrirModal.addEventListener("click", () => {
            modal.style.display = "flex";
            abrirModal.style.display = "none";
        });

        // Cierra el modal
        cerrarModal.addEventListener("click", () => {
            modal.style.display = "none";
            abrirModal.style.display = "block";
        });

        // Cierra el modal al hacer clic fuera de él
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                abrirModal.style.display = "block";
            }
        });
    }
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

// Invocar la función
initializeAlbumGallery();

// ========== MODO OSCURO/CLARO ==========
const toggleBtn = document.getElementById('toggle-dark-mode');
if (toggleBtn) {
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

// ========== GALERÍA DE ÁLBUMES (OUR DISCOGRAPHY - INICIAL) ==========
document.addEventListener("DOMContentLoaded", function() {
    const albums = [
        { imgSrc: "assets/images/album-1.jpg", altText: "Album cover with neon lights and text 'Be - Doo Be - Doo'", title: "BE-DOO", artist: "Caller" },
        { imgSrc: "assets/images/album-2.jpg", altText: "Album cover with a road sign and text 'Make It Go Away'", title: "FREE SPIRIT", artist: "Go Away" },
        { imgSrc: "assets/images/album-3.jpg", altText: "Album cover with neon sign and text 'Today Was A Good Day'", title: "DEPRESSED DAYS", artist: "Ritual Spirit" },
        { imgSrc: "assets/images/album-4.jpg", altText: "Album cover with a dancer and text 'FOND OF HER'", title: "WRONG MOTION", artist: "Love Hate" }
    ];

    const albumContainer = document.getElementById("album-container");
    if (!albumContainer) {
        return;
    }

    albums.forEach(album => {
        const article = document.createElement("article");
        article.classList.add("albumes");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = album.imgSrc;
        img.alt = album.altText;

        img.onerror = function() {
            console.error(`Error al cargar la imagen: ${album.imgSrc}`);
            img.src = "path/to/default-image.jpg";
        };

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

/* ========================== AUDIO GLOBAL ========================== */
const audio = new Audio();
audio.src = "assets/images/Soundgarden - Black Hole Sun (Instrumental) (mp3cut.net).mp3";

// Elementos del reproductor principal
const playPauseBtn = document.getElementById("main-audio-play-pause");
const progressBar = document.getElementById("main-audio-progress-bar");
const progressBarFill = document.getElementById("main-audio-progress-bar-fill");
const currentTimeEl = document.getElementById("main-audio-current-time");
const durationEl = document.getElementById("main-audio-duration");
const volumeSlider = document.getElementById("main-audio-volume-slider");
const titlePlayer = document.querySelector(".title-player");

/* ------------------------- UTILIDAD PARA FORMATO DE TIEMPO ---------------------------- */
const formatTime = secs => {
    const m = Math.floor(secs / 60);
    const ss = Math.floor(secs % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
};

/* ------------------------- ACTUALIZAR ICONOS PLAY/PAUSE EN TRACKLIST ------------------ */
function updatePlayIcons(state) {
    if (playPauseBtn) {
        const icon = playPauseBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle("fa-play", state === "pause");
            icon.classList.toggle("fa-pause", state === "play");
        }
    }

    document.querySelectorAll(".track-icons").forEach(box => {
        const playBtn = box.querySelector(".track-play");
        const pauseBtn = box.querySelector(".track-pause");
        const title = box.closest("li").querySelector(".track-title");

        if (!playBtn || !pauseBtn || !title) return;

        const audioSrc = decodeURIComponent(audio.src.replace(location.origin + "/", ""));
        const boxSrc = playBtn.dataset.src;

        const isCurrent = audioSrc.endsWith(boxSrc);

        if (isCurrent) {
            playBtn.style.display = state === "pause" ? "inline-block" : "none";
            pauseBtn.style.display = state === "play" ? "inline-block" : "none";
            title.classList.toggle("playing", state === "play");
        } else {
            playBtn.style.display = "inline-block";
            pauseBtn.style.display = "none";
            title.classList.remove("playing");
        }
    });
}

/* ------------------------ CARGA DE METADATOS Y PROGRESO ------------------------------ */
if (audio && durationEl) {
    audio.addEventListener("loadedmetadata", () => {
        durationEl.textContent = formatTime(audio.duration);
    });
}

if (audio && progressBarFill && currentTimeEl) {
    audio.addEventListener("timeupdate", () => {
        const pct = (audio.currentTime / audio.duration) * 100;
        progressBarFill.style.width = `${pct}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });
}

if (progressBar && audio) {
    progressBar.addEventListener("click", e => {
        const pct = e.offsetX / progressBar.offsetWidth;
        audio.currentTime = pct * audio.duration;
    });
}

if (volumeSlider && audio) {
    volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
    });
}

/* -------------------------- BOTÓN DE PLAY/PAUSE PRINCIPAL ---------------------------- */
if (playPauseBtn && audio) {
    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
}

/* ---------------------------- EVENTOS DE AUDIO GLOBALES ------------------------------ */
if (audio) {
    audio.addEventListener("play", () => updatePlayIcons("play"));
    audio.addEventListener("pause", () => updatePlayIcons("pause"));
    audio.addEventListener("ended", () => {
        updatePlayIcons("pause");
    });
}

/* -------------------------- TRACKLIST CLICK PARA REPRODUCIR --------------------------- */
document.querySelectorAll(".track-icons").forEach(box => {
    const playBtn = box.querySelector(".track-play");
    const pauseBtn = box.querySelector(".track-pause");
    
    if (!playBtn || !pauseBtn) return;
    
    const src = playBtn.dataset.src;
    box.dataset.src = src;

    playBtn.addEventListener("click", () => {
        const newSrc = location.origin + "/" + src;
        const currentSrc = decodeURIComponent(audio.src);

        if (!currentSrc.endsWith(src)) {
            audio.src = src;
        }

        const trackTitle = box.closest("li").querySelector(".track-title");
        if (trackTitle && titlePlayer) {
            titlePlayer.textContent = trackTitle.textContent.trim();
        }

        audio.play();
    });

    pauseBtn.addEventListener("click", () => {
        const currentSrc = decodeURIComponent(audio.src);
        if (currentSrc.endsWith(src)) {
            audio.pause();
        }
    });
});

/* ========================= NAVEGACIÓN ADELANTE / ATRÁS ============================== */
const backwardBtn = document.getElementById("main-audio-backward");
const forwardBtn = document.getElementById("main-audio-forward");

const trackElements = Array.from(document.querySelectorAll(".track-icons"));
const trackList = trackElements.map(el => el.dataset.src);

let currentTrackIndex = trackList.findIndex(src =>
    decodeURIComponent(audio.src).endsWith(src)
);

function loadTrackByIndex(index) {
    if (index < 0 || index >= trackList.length) return;

    const src = trackList[index];
    audio.src = src;

    const trackEl = trackElements[index].closest("li");
    const title = trackEl.querySelector(".track-title");
    if (title && titlePlayer) {
        titlePlayer.textContent = title.textContent.trim();
    }

    currentTrackIndex = index;
    audio.play();
}

if (forwardBtn) {
    forwardBtn.addEventListener("click", () => {
        if (currentTrackIndex < trackList.length - 1) {
            loadTrackByIndex(currentTrackIndex + 1);
        }
    });
}

if (backwardBtn) {
    backwardBtn.addEventListener("click", () => {
        if (currentTrackIndex > 0) {
            loadTrackByIndex(currentTrackIndex - 1);
        }
    });
}

if (audio) {
    audio.addEventListener("play", () => {
        currentTrackIndex = trackList.findIndex(src =>
            decodeURIComponent(audio.src).endsWith(src)
        );
    });
}

// ========== MODAL PARA VIDEO EN TRACKLIST ==========
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const videoIcons = document.querySelectorAll(".video-icon");
    const closeModal = document.querySelector(".cierre");

    if (videoIcons && modal && videoFrame) {
        videoIcons.forEach((icon) => {
            icon.addEventListener("click", function () {
                const videoUrl = this.getAttribute("data-video");
                videoFrame.src = videoUrl;
                modal.style.display = "flex";
            });
        });
    }

    if (closeModal && modal && videoFrame) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
            videoFrame.src = "";
        });
    }

    if (modal && videoFrame) {
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                videoFrame.src = "";
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modal.style.display = "none";
                videoFrame.src = "";
            }
        });
    }
});

// ========== GALERÍA DE IMÁGENES ==========
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "assets/images/h1-img-1.jpg", alt: "Band performing", size: "large" },
        { src: "assets/images/h1-img-2.jpg", alt: "Guitarist sitting", size: "small" },
        { src: "assets/images/h1-img-3.jpg", alt: "Guitarist and singer", size: "small" },
        { src: "assets/images/h1-img-4.jpg", alt: "Singer with crowd", size: "small" },
        { src: "assets/images/h1-img-5.jpg", alt: "Drummer", size: "small" },
        { src: "assets/images/h1-img-6.jpg", alt: "Guitarist green lights", size: "large" }
    ];

    const galleryContainer = document.getElementById("gallery-container");
    if (!galleryContainer) return;

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".cerrar");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const counter = document.getElementById("modal-counter");
    const miniLeft = document.querySelector(".mini-left");
    const miniRight = document.querySelector(".mini-right");

    let currentIndex = 0;

    function updateModalImage(index) {
        modalImg.src = images[index].src;
        modalImg.alt = images[index].alt;
        counter.textContent = `${index + 1}/${images.length}`;
    }

    function openModal(index) {
        currentIndex = index;
        modal.style.display = "flex";
        updateModalImage(index);
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    function goLeft() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage(currentIndex);
    }

    function goRight() {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage(currentIndex);
    }

    images.forEach((img, index) => {
        const imageDiv = document.createElement("div");
        imageDiv.className = `image ${img.size}`;
        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.alt;
        image.addEventListener("click", () => openModal(index));
        imageDiv.appendChild(image);
        galleryContainer.appendChild(imageDiv);
    });

    if (arrowLeft) arrowLeft.addEventListener("click", goLeft);
    if (miniLeft) miniLeft.addEventListener("click", goLeft);
    if (arrowRight) arrowRight.addEventListener("click", goRight);
    if (miniRight) miniRight.addEventListener("click", goRight);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (modal.style.display === "flex") {
            if (e.key === "ArrowLeft") goLeft();
            else if (e.key === "ArrowRight") goRight();
            else if (e.key === "Escape") closeModal();
        }
    });
});

// ========== BLOG POSTS ==========
const posts = [
    {
        img: 'assets/images/blog-post-1.jpg',
        alt: 'Blog 1',
        title: 'THE BEST NIGHT IN BALTIMORE',
        date: '10 April, 2018'
    },
    {
        img: 'assets/images/blog-post-2.jpg',
        alt: 'Blog 2',
        title: 'THE BEST NIGHT IN DETROIT',
        date: '10 April, 2018'
    },
    {
        img: 'assets/images/blog-post-3.jpg',
        alt: 'Blog 3',
        title: 'THE BEST NIGHT IN NEW YORK',
        date: '10 April, 2018'
    }
];

const blogSection = document.querySelector('.blog-posts');
if (blogSection) {
    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.innerHTML = `
            <div class="blog-post-image-wrapper">
                <img src="${post.img}" alt="${post.alt}">
            </div>
            <div class="blog-post-title">${post.title}</div>
            <div class="blog-post-date">${post.date}</div>
        `;
        blogSection.appendChild(article);
    });
    // ========== STICKY AUDIO PLAYER ==========
(function initStickyPlayer() {
    const player = document.querySelector('.album-player');
    
    if (!player) return; // Si no existe el player, salir
    
    // Crear placeholder para evitar saltos
    const placeholder = document.createElement('div');
    placeholder.className = 'player-placeholder';
    player.parentNode.insertBefore(placeholder, player.nextSibling);
    
    // Guardar posición inicial
    let playerTop = 0;
    let playerHeight = 0;
    
    function updateDimensions() {
        playerTop = player.offsetTop;
        playerHeight = player.offsetHeight;
    }
    
    updateDimensions();
    
    // Handler del scroll
    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY > playerTop && !player.classList.contains('is-sticky')) {
            // Activar sticky
            player.classList.add('is-sticky');
            placeholder.classList.add('active');
            placeholder.style.height = playerHeight + 'px';
        } else if (scrollY <= playerTop && player.classList.contains('is-sticky')) {
            // Desactivar sticky
            player.classList.remove('is-sticky');
            placeholder.classList.remove('active');
        }
    }
    
    // Optimizar scroll con requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true }); // passive mejora performance
    
    // Recalcular al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        if (!player.classList.contains('is-sticky')) {
            updateDimensions();
        }
    });
    
    // Verificar estado inicial
    handleScroll();
})();
}