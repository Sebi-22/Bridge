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