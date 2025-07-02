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
