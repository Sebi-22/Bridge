// ========== FECHAS CONCIERTOS ==========
document.addEventListener("DOMContentLoaded", function () {
    const viewAllBtn = document.getElementById("view-all-btn");
    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const fechasAdicionales = [
                { date: "22", month: "Jun", day: "Fri", ciudad: "London, England – O2 Arena", link: "#" },
                { date: "27", month: "Jun", day: "Wed", ciudad: "Rome, Italy – Cola Arena", link: "#" },
                { date: "29", month: "Jun", day: "Fri", ciudad: "Athens, Greece – PAOK Stadium", link: "#" },
                { date: "03", month: "Jul", day: "Tue", ciudad: "Budapest, Hungary – Nagy Arena", link: "#" }
            ];
            const section = document.getElementById("datos");
            const ul = section.querySelector("ul");
            fechasAdicionales.forEach(fecha => {
                const dateItem = document.createElement("li");
                dateItem.classList.add("date-item");
                dateItem.innerHTML = `
                    <div class="date">${fecha.date}</div>
                    <div class="month-day">
                        <div>${fecha.month}</div>
                        <div>${fecha.day}</div>
                    </div>
                    <div class="ciudad">${fecha.ciudad}</div>
                    <a href="${fecha.link}" class="buy-tickets">Buy Tickets</a>
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
    modal.style.display = "none";
    abrirModal.addEventListener("click", () => {
        modal.style.display = "flex";
        abrirModal.style.display = "none";
    });
    cerrarModal.addEventListener("click", () => {
        modal.style.display = "none";
        abrirModal.style.display = "block";
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            abrirModal.style.display = "block";
        }
    });
});

// ========== FORMULARIO DE CONTACTO ==========
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
// ========== AUDIO PRINCIPAL (BLACK HOLE SUN) ==========
const playPauseBtn = document.getElementById("main-audio-play-pause");
const progressBar = document.getElementById("main-audio-progress-bar");
const progressBarFill = document.getElementById("main-audio-progress-bar-fill");
const currentTimeEl = document.getElementById("main-audio-current-time");
const durationEl = document.getElementById("main-audio-duration");
const volumeSlider = document.getElementById("main-audio-volume-slider");
const audio = new Audio("assets/images/Soundgarden - Black Hole Sun_3mbBbFH9fAg.mp3");

audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBarFill.style.width = `${progress}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});
progressBar.addEventListener("click", (e) => {
    const clickPosition = (e.offsetX / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = clickPosition;
});
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
audio.addEventListener("play", () => {
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
});
audio.addEventListener("pause", () => {
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
});
audio.addEventListener("ended", () => {
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
});
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

// ========== GALERÍA DE ÁLBUMES (OUR DISCOGRAPHY) ==========
const newAlbums = [
    { src: "assets/images/album-5.jpg", title: "FALLEN", description: "Harmony" },
    { src: "assets/images/album-6.jpg", title: "JOY", description: "Eclipse" },
    { src: "assets/images/album-7.jpg", title: "FREE YOUR MIND", description: "Ocean" },
    { src: "assets/images/album-8.jpg", title: "LOW BASS", description: "Shadows" },
];
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
function initializeButtonVisibility() {
    document.querySelectorAll('.fa-play').forEach(playButton => {
        playButton.style.display = 'inline';
    });
    document.querySelectorAll('.fa-pause').forEach(pauseButton => {
        pauseButton.style.display = 'none';
    });
}
initializeButtonVisibility();

document.querySelectorAll('.fa-play').forEach(playButton => {
    playButton.addEventListener('click', function() {
        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        document.querySelectorAll('.fa-play').forEach(button => {
            button.style.display = 'inline';
        });
        document.querySelectorAll('.fa-pause').forEach(button => {
            button.style.display = 'none';
        });
        document.querySelectorAll('.track-title').forEach(title => {
            title.classList.remove('playing');
        });
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        audio.play();
        this.closest('li').querySelector('.track-title').classList.add('playing');
        this.style.display = 'none';
        this.closest('li').querySelector('.fa-pause').style.display = 'inline';
    });
});
document.querySelectorAll('.fa-pause').forEach(pauseButton => {
    pauseButton.addEventListener('click', function() {
        const audioId = this.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        audio.pause();
        this.closest('li').querySelector('.track-title').classList.remove('playing');
        this.style.display = 'none';
        this.closest('li').querySelector('.fa-play').style.display = 'inline';
    });
});

// ========== MODAL PARA VIDEO EN TRACKLIST ==========
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

// ========== GALERÍA DE FOTOS PRINCIPAL ==========
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: "assets/images/h1-img-1.jpg", alt: "Band performing on stage with red lights", width: "50", size: "large" },
        { src: "assets/images/h1-img-2.jpg", alt: "Guitarist sitting on an amplifier", width: "25", size: "small" },
        { src: "assets/images/h1-img-3.jpg", alt: "Guitarist and singer performing", width: "25", size: "small" },
        { src: "assets/images/h1-img-4.jpg", alt: "Singer performing on stage with crowd", width: "25", size: "small" },
        { src: "assets/images/h1-img-5.jpg", alt: "Drummer playing drums", width: "25", size: "small" },
        { src: "assets/images/h1-img-6.jpg", alt: "Guitarist performing with green lights", width: "50", size: "large" }
    ];
    const galleryContainer = document.getElementById("gallery-container");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");
    images.forEach(image => {
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image", image.size);
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.width = image.width;
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = image.src;
            modalImg.alt = image.alt;
        });
        imageDiv.appendChild(img);
        galleryContainer.appendChild(imageDiv);
    });
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});