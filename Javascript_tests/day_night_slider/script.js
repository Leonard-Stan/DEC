// script.js

// Selecciona el checkbox del toggle y el body
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Función para cambiar el modo
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    // Modo oscuro
    body.style.backgroundColor = '#001D3D';
    body.style.color = '#f4f4f4';
  } else {
    // Modo claro
    body.style.backgroundColor = '#f4f4f4';
    body.style.color = '#333';
  }
});
