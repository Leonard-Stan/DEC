function openEnvelope() {
    const envelopeContainer = document.querySelector('.envelope-container');
    const chatContainer = document.getElementById('chat-container');
  
    // Abrir la solapa completamente
    const flap = envelopeContainer.querySelector('.flap');
    flap.style.transform = 'rotateX(360deg)'; // Rotación hacia afuera
   

    


    setTimeout(() => {
      // Ocultar el sobre y mostrar el chat
      envelopeContainer.style.display = 'none';
      chatContainer.classList.remove('hidden');
    }, 600); // Tiempo sincronizado con la animación
  }
  