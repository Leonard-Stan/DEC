const toggleButton = document.getElementById('toggle-theme');
  const body = document.body;

  // Función para alternar entre modos
  toggleButton.addEventListener('click', () => {
    // Alterna la clase 'light-mode' en el body
    body.classList.toggle('light-mode');

    // Cambia el texto e icono del botón según el modo
    if (body.classList.contains('light-mode')) {
      toggleButton.textContent = '🌞 Modo Claro';
    } else {
      toggleButton.textContent = '🌙 Modo Oscuro';
    }
  });