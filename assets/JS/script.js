//Fecha Adicional de View All
document.getElementById("view-all-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el salto de página
    
    // Fechas adicionales a añadir
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
        
        dateItem.innerHTML = `
            <div class="date">${fecha.date}
                <div class="day">${fecha.month}</div>
                <div class="day">${fecha.day}</div>
            </div>
            <div class="details">${fecha.details}</div>
            <a href="${fecha.link}" class="buy-tickets">Buy Tickets</a>
        `;
        
        section.insertBefore(dateItem, document.querySelector(".view-all"));
    });

    // Oculta el botón después de agregar las fechas
    event.target.style.display = "none";
});
//Boton del video que no anda
document.querySelector('.play-button').addEventListener('click', function() {
    const videoIframe = document.getElementById('videoIframe');
    videoIframe.src = "https://player.vimeo.com/video/124943519?title=0&byline=0&portrait=0&autoplay=1";
    
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'flex';
});

document.getElementById('cerrarModal').addEventListener('click', function() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    videoModal.style.display = 'none';
    videoIframe.src = ""; // Limpiar el src para detener el video
});

//Formulario de contacto

function toggleLyrics(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}


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

  //Modal de galeria de Imagenes
  const images = document.querySelectorAll('.Gallery .image img');
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');

  // Añadir evento de clic a cada imagen
  images.forEach(image => {
      image.addEventListener('click', () => {
          modal.style.display = 'flex';
          modalImg.src = image.src;
          modalImg.alt = image.alt;
      });
  });

  // Cerrar el modal al hacer clic en la "X"
  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });

// Arreglo de objetos con los datos de las nuevas imágenes
const newAlbums = [
    { src: "assets/images/album-5.jpg", title: "FALLEN", description: "Harmony" },
    { src: "assets/images/album-6.jpg", title: "JOY", description: "Eclipse" },
    { src: "assets/images/album-7.jpg", title: "FREE YOUR MIND", description: "Ocean" },
    { src: "assets/images/album-8.jpg", title: "LOW BASS", description: "Shadows" },
];

// Selecciona el botón "SHOW MORE"
const showMoreButton = document.getElementById("show-MORE");

showMoreButton.addEventListener("click", function(event) {
    event.preventDefault(); // Evita el salto de página
    
    // Selecciona el contenedor de álbumes principal
    const albumsContainer = document.querySelector(".albums");

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

    // Retraso opcional para mostrar el botón nuevamente (si se quiere)
    setTimeout(() => {
        showMoreButton.style.display = "block"; // Muestra el botón nuevamente
    }, 300); // Retraso opcional de 300ms para suavizar el efecto de aparición
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



  