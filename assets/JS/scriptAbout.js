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
    const showMoreButton = document.getElementById("show-MORE");

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