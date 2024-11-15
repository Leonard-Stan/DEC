function toggleCart(button) {
    // Alterna entre los íconos de Boxicons
    const icon = button.querySelector('.icon');
    
    if (icon.classList.contains('bx-plus')) {
      icon.classList.remove('bx-plus');
      icon.classList.add('bx-check');
      button.classList.add('active');
  
      // Oculta el botón después de 1 segundo
      setTimeout(() => {
        button.classList.add('hidden');
      }, 500); // Opcional: añade un pequeño retraso para que se vea el "check"
    }
  }
  