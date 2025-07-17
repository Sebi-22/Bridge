document.addEventListener("DOMContentLoaded", function() {
    // Datos de reseñas
    const sliderContent = [
        { text: "« Vin invidunt efficiendi eam eu son veniam percipit dignitate, an eum suas laudem. Duis ipsum dolor sit amet, est ad graeci principes. »", source: "- NYLON MAGAZINE" },
        { text: "« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec urna vel lorem tincidunt aliquet. Vivamus auctor dolor eget. »", source: "- ROLLING STONE" },
        { text: "« Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In venenatis urna at fermentum. »", source: "- BILLBOARD" }
    ];

    let currentPos = 0;  // Posición inicial del slider

    // Referencia a los elementos del DOM
    const reviewText = document.getElementById("review-text");
    const reviewSource = document.getElementById("review-source");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    // Asegura que todos los elementos estén presentes
    if (!reviewText || !reviewSource || !leftBtn || !rightBtn) {
        console.error("Algunos de los elementos no se encontraron en el DOM");
        return;
    }

    // Actualiza el contenido del slider
    function updateSliderContent(currentPos) {
        // Asegura que el índice esté dentro del rango de la lista
        currentPos = (currentPos + sliderContent.length) % sliderContent.length;

        // Actualiza el texto y la fuente
        reviewText.innerText = sliderContent[currentPos].text;
        reviewSource.innerText = sliderContent[currentPos].source;

        console.log(`Current position: ${currentPos}`);
    }

    // Función que maneja los clics de los botones
    function handleButtonClick(event) {
        const direction = event.target.getAttribute("direction");
        const increment = direction === "left" ? -1 : 1;
        /* let incr = 0;
        if (direction === "left") {
          incr-- 
        } else {
          incr++
        } */
        // Actualiza la posición del slider
        currentPos += increment;
        console.log(`Button clicked: ${direction}, Current position: ${currentPos}`);

        // Actualiza el contenido del slider
        updateSliderContent(currentPos);
    }

    // Asigna los eventos a los botones
    leftBtn.addEventListener("click", handleButtonClick);
    rightBtn.addEventListener("click", handleButtonClick);

    // Inicializa el slider con la primera reseña
    updateSliderContent(currentPos);
});

const lyricsData = [
    {
        title: "BLACK HOLE SUN",
        content: `<p>Lorem ipsum dolor sit amet,<br>
                  ex rebum commodo aliquam sea,<br>
                  perpetua mediocrem theophrastus vim ne,<br>
                  per facete voluptatum no.<br>
                  Eum no aeque legendos menarchum.</p>
                  <p>Sed feugiat tractatos partiendo ei,<br>
                  at alii stet epicurei per, has no duis<br>
                  vivendo consequuntur. Eos gubergren omittantur<br>
                  Lorem ipsum dolor sit amet,<br>
                  ex rebum commodo aliquam sea,<br>
                  perpetua mediocrem theophrastus vim ne,<br>
                  per facete voluptatum no.<br>
                  Eum no aeque legendos menarchum.</p>`
    },
    {
        title: "WORK",
        content: `Lorem ipsum dolor sit amet,
                  ex rebum commodo aliquam sea,
                  perpetua mediocrem theophrastus vim ne,
                  per facete voluptatum no.
                  Eum no aeque legendos mnesarchum.
                  
                  Sed feugiat tractatos partiendo ei,
                  at alii stet epicurei per, has no duis
                  vivendo consequuntur. Eos gubergren omittantur.`
    },
    {
        title: "LULLABY",
        content: `Lorem ipsum dolor sit amet,
                  ex rebum commodo aliquam sea,
                  perpetua mediocrem theophrastus vim ne,
                  per facete voluptatum no.
                  Eum no aeque legendos mnesarchum.
                  
                  Sed feugiat tractatos partiendo ei,
                  at alii stet epicurei per, has no duis
                  vivendo consequuntur. Eos gubergren omittantur.`
    },
    {
        title: "THE PASSENGER",
        content: `Lorem ipsum dolor sit amet,
                  ex rebum commodo aliquam sea,
                  perpetua mediocrem theophrastus vim ne,
                  per facete voluptatum no.
                  Eum no aeque legendos mnesarchum.
                  
                  Sed feugiat tractatos partiendo ei,
                  at alii stet epicurei per, has no duis
                  vivendo consequuntur. Eos gubergren omittantur.`
    }
];

function createAccordion() {
    const container = document.getElementById('accordion-container');

    lyricsData.forEach(item => {
        const accordion = document.createElement('div');
        accordion.classList.add('accordion');

        const header = document.createElement('div');
        header.classList.add('accordion-header');
        header.innerHTML = `<span>${item.title}</span><i class="fas fa-chevron-down"></i>`;

        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.innerHTML = item.content;

        accordion.appendChild(header);
        accordion.appendChild(content);
        container.appendChild(accordion);

        header.addEventListener('click', () => {
            const isActive = accordion.classList.toggle('active');

            document.querySelectorAll('.accordion').forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove('active');
                }
            });
        });
    });
}

createAccordion();

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-button");
  const pauseBtn = document.getElementById("pause-button");
  const titlePlayer = document.getElementById("title-player");
  const timerDisplay = document.getElementById("timer");
  const trackSpans = Array.from(document.querySelectorAll(".titulo-track"));
  const forwardBtn = document.getElementById("main-audio-forward");
  const backwardBtn = document.getElementById("main-audio-backward");

  let currentTrackIndex = -1;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  }

  function updateTimer() {
    if (audio.duration) {
      timerDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  }

  function resetTrackNumbers() {
    trackSpans.forEach((span, i) => {
      const li = span.closest("li");
      const numberSpan = li.querySelector(".track-number");
      numberSpan.innerHTML = i + 1;
      li.classList.remove("active");
    });
  }

  function loadTrack(index) {
    if (index < 0 || index >= trackSpans.length) return;

    resetTrackNumbers();

    const span = trackSpans[index];
    const src = span.dataset.audio;
    const title = span.textContent.trim();

    audio.src = src;
    audio.play();
    titlePlayer.textContent = title;
    currentTrackIndex = index;
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";

    // Reemplaza número por ícono y resalta
    const li = span.closest("li");
    const numberSpan = li.querySelector(".track-number");
    numberSpan.innerHTML = `<i class="fas fa-play"></i>`;
    li.classList.add("active");
  }

  trackSpans.forEach((span, index) => {
    span.addEventListener("click", () => {
      loadTrack(index);
    });
  });

  playBtn.addEventListener("click", () => {
    if (audio.src) {
      audio.play();
    } else if (trackSpans.length > 0) {
      loadTrack(0);
    }
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });

  forwardBtn.addEventListener("click", () => {
    if (currentTrackIndex < trackSpans.length - 1) {
      loadTrack(currentTrackIndex + 1);
    }
  });

  backwardBtn.addEventListener("click", () => {
    if (currentTrackIndex > 0) {
      loadTrack(currentTrackIndex - 1);
    }
  });

  audio.addEventListener("play", () => {
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    currentTrackIndex = trackSpans.findIndex(span =>
      decodeURIComponent(audio.src).endsWith(span.dataset.audio)
    );
  });

  audio.addEventListener("pause", () => {
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline";
  });

  audio.addEventListener("timeupdate", updateTimer);
  audio.addEventListener("loadedmetadata", updateTimer);

  audio.addEventListener("ended", () => {
    if (currentTrackIndex < trackSpans.length - 1) {
      loadTrack(currentTrackIndex + 1);
    } else {
      resetTrackNumbers(); // Limpiar íconos si no hay más
    }
  });
});


// ========== MODO OSCURO/CLARO ==========//
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

// ========== BOTÓN SCROLL ARRIBA ==========//
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
