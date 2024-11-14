let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 0; // Comienza en el primer elemento

function loadShow() {
    let stt = 0;
    items.forEach((item, index) => {
        item.style.transform = `translateX(${(index - active) * 200}px) scale(${1 - Math.abs(index - active) * 0.2})`;
        item.style.zIndex = index === active ? 1 : -1;
        item.style.filter = Math.abs(index - active) > 1 ? 'blur(5px)' : 'none';
        item.style.opacity = Math.abs(index - active) > 1 ? 0 : 0.6 + (1 - Math.abs(index - active)) * 0.4;
    });
}


loadShow();

next.onclick = function () {
    active = (active + 1) % items.length; // Cambia a la siguiente imagen, y vuelve al inicio si es necesario
 
    loadShow();
    
}

prev.onclick = function () {
    active = (active - 1 + items.length) % items.length; // Cambia a la imagen anterior, y vuelve al final si es necesario
    loadShow();
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Validación básica (opcional)
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (user && password) {
        // Redirigir a otra página
        window.location.href = "cards_juegos.html"; // Cambia esto por la URL a la que quieres redirigir
    } else {
        alert("Por favor, complete todos los campos.");
    }
});


setInterval(() => {
    active = (active + 1 + items.length) % items.length;
    loadShow();
}, 2500);