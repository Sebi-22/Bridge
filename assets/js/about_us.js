// ========== GALERÍA DE ÁLBUMES (OUR DISCOGRAPHY - INICIAL) ==========
document.addEventListener("DOMContentLoaded", function() {
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

    const albumContainer = document.getElementById("album-container");
    if (!albumContainer) {
        console.error("El contenedor de álbumes no se encontró.");
        return;
    }

    albums.forEach(album => {
        const article = document.createElement("article");
        article.classList.add("albumes");
        
        const figure = document.createElement("figure");
        
        const img = document.createElement("img");
        img.src = album.imgSrc;
        img.alt = album.altText;

        // Manejo de errores para la carga de imágenes
        img.onerror = function() {
            console.error(`Error al cargar la imagen: ${album.imgSrc}`);
            // Opcional: establecer una imagen por defecto
            // img.src = "path/to/default-image.jpg";
        };

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

// ========== SHOW MORE ALBUMS ==========
document.addEventListener("DOMContentLoaded", function() {
    const showMoreButton = document.getElementById("show-more");
    
    if (showMoreButton) {
        const newAlbums = [
            { src: "assets/images/album-5.jpg", title: "FALLEN", artist: "Harmony" },
            { src: "assets/images/album-6.jpg", title: "JOY", artist: "Eclipse" },
            { src: "assets/images/album-7.jpg", title: "FREE YOUR MIND", artist: "Ocean" },
            { src: "assets/images/album-8.jpg", title: "LOW BASS", artist: "Shadows" },
        ];
        
        showMoreButton.addEventListener("click", function(event) {
            event.preventDefault();
            
            const albumsContainer = document.querySelector(".albums");
            if (!albumsContainer) {
                console.error("No se encontró el contenedor de álbumes");
                return;
            }
            
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
                p.textContent = album.artist;
                
                figcaption.appendChild(h3);
                figcaption.appendChild(p);
                figure.appendChild(img);
                figure.appendChild(figcaption);
                article.appendChild(figure);
                albumsContainer.appendChild(article);
            });
            
            showMoreButton.style.display = "none";
        });
    }
});

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