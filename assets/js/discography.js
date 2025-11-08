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
        },
        {
            imgSrc: "assets/images/album-5.jpg",
            altText: "Album cover - Fallen",
            title: "LOST GRAVITY",
            artist: "Fallen"
        },
        {
            imgSrc: "assets/images/album-6.jpg",
            altText: "Album cover - Joy",
            title: "ROAD KILLER",
            artist: "Hater"
        },
        {
            imgSrc: "assets/images/album-7.jpg",
            altText: "Album cover - Free Your Mind",
            title: "THE MINIMALISTS",
            artist: "Windows"
        },
        {
            imgSrc: "assets/images/album-8.jpg",
            altText: "Album cover - Low Bass",
            title: "PHILIP JAX",
            artist: "Blame"
        },
        {
            imgSrc: "assets/images/album-9.jpg",
            altText: "Album cover - Neon Dreams",
            title: "SADIE MAXWELL",
            artist: "Firewall"
        },
        {
            imgSrc: "assets/images/album-10.jpg",
            altText: "Album cover - Velvet Nights",
            title: "BAD HABITS",
            artist: "Joy"
        },
        {
            imgSrc: "assets/images/album-11.jpg",
            altText: "Album cover - Green Greed",
            title: "LOW DISTANCE",
            artist: "Free Your Mind"
        },
        {
            imgSrc: "assets/images/album-12.jpg",
            altText: "Album cover - Bad Day",
            title: "FAST TRACK",
            artist: "Low Bass"
        },
        {
            imgSrc: "assets/images/album-13.jpg",
            altText: "Album cover - Neon Dreams",
            title: "NEOUNIUM",
            artist: "Neon Dreams"
        },
        {
            imgSrc: "assets/images/album-14.jpg",
            altText: "Album cover - Velvet Nights",
            title: "BLUE PISTOL",
            artist: "Velvet Nights"
        },
        {
            imgSrc: "assets/images/album-15.jpg",
            altText: "Album cover - Green Greed",
            title: "GEO WERK",
            artist: "Green Greed"
        },
        {
            imgSrc: "assets/images/Album 16 modificado.png",
            altText: "Album cover - Bad Day",
            title: "BAD HOOD",
            artist: "Bad Day"
        }
    ];

    // Selecciona el contenedor donde se agregarán los álbumes
    const albumContainer = document.getElementById("album-container");
    
    if (!albumContainer) {
        console.error("No se encontró el contenedor de álbumes");
        return;
    }

    // Recorre los álbumes y los agrega dinámicamente
    albums.forEach(album => {
        // Crea el artículo y la estructura HTML para cada álbum
        const article = document.createElement("article");
        article.classList.add("albumes");

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = album.imgSrc;
        img.alt = album.altText;
        
        // Manejo de errores para imágenes
        img.onerror = function() {
            console.error(`Error al cargar la imagen: ${album.imgSrc}`);
            // Puedes poner una imagen por defecto aquí si quieres
        };

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