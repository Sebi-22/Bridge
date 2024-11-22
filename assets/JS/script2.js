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
// Audio
function toggleLyrics(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}
function toggleLyrics(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;

    // Toggle display of lyrics content
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        header.classList.add("active");
    } else {
        content.style.display = "none";
        header.classList.remove("active");
    }
}