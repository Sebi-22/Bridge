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
