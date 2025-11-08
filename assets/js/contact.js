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

// ========== FORMULARIO DE CONTACTO ==========
function sendMessage() {
    let verify = true;
    
    // Limpiar errores previos
    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
    const alerta = document.getElementById("alerta");
    
    if (errorName) errorName.textContent = "";
    if (errorEmail) errorEmail.textContent = "";
    if (errorMessage) errorMessage.textContent = "";
    if (alerta) alerta.style.display = "none";
    
    // Obtener valores
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    
    if (!nameInput || !emailInput || !messageInput) {
        console.error("No se encontraron los campos del formulario");
        return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Validar nombre
    if (name === "") {
        if (errorName) errorName.textContent = "The field is required.";
        verify = false;
    }
    
    // Validar email
    if (email === "") {
        if (errorEmail) errorEmail.textContent = "The field is required.";
        verify = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            if (errorEmail) errorEmail.textContent = "Please enter a valid email.";
            verify = false;
        }
    }
    
    // Validar mensaje
    if (message === "") {
        if (errorMessage) errorMessage.textContent = "The field is required.";
        verify = false;
    }
    
    // Si todo está correcto, redirigir
    if (verify) {
        window.location.replace("gracias.html");
    } else {
        if (alerta) alerta.style.display = "block";
    }
}

// Agregar event listener al formulario si existe
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            sendMessage();
        });
    }
});