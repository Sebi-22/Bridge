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
                  vivendo consequuntur. Eos gubergren omittantur
                  Lorem ipsum dolor sit amet,
                  ex rebum commodo aliquam sea,
                  perpetua mediocrem theophrastus vim ne,
                  per facete voluptatum no.
                  Eum no aeque legendos mnesarchum.`
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
                  vivendo consequuntur. Eos gubergren omittantur
                  Lorem ipsum dolor sit amet,
                  ex rebum commodo aliquam sea,
                  perpetua mediocrem theophrastus vim ne,
                  per facete voluptatum no.
                  Eum no aeque legendos mnesarchum.`
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
                  vivendo consequuntur. Eos gubergren omittantur
                  Lorem ipsum dolor sit amet,
                  ex rebum commodo aliquam sea,
                  perpetua mediocrem theophrastus vim ne,
                  per facete voluptatum no.
                  Eum no aeque legendos mnesarchum.`
    }
];

// Función para crear el acordeón
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

        // Agregar el evento de clic al encabezado
        header.addEventListener('click', () => {
            const isActive = accordion.classList.toggle('active');

            // Cerrar otros acordeones
            document.querySelectorAll('.accordion').forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove('active');
                    otherAccordion.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Alternar el contenido del acordeón actual
            if (isActive) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
}

// Llamar a la función para crear el acordeón
createAccordion();


    const audioPlayer = document.getElementById('audio-player');
    const trackTitle = document.querySelector('.track-titulo');
    const playButton = document.getElementById('play-button');

    document.querySelectorAll('.titulo-track').forEach(track => {
        track.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio');
            audioPlayer.src = audioSrc;
            trackTitle.textContent = this.textContent; // Actualiza el título de la pista
            audioPlayer.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        });
    });

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            audioPlayer.pause();
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    });

    audioPlayer.addEventListener('ended', function() {
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
    });


