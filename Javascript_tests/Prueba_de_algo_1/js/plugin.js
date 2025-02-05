(function(window, document) {

    // Definir el plugin GameTrailerPlugin
    const GameTrailerPlugin = function(options) {
        // Establecer las opciones predeterminadas
        this.options = options || {};
        this.apiKey = this.options.apiKey || 'YOUR_YOUTUBE_API_KEY'; 
        this.modalContainerId = this.options.modalContainerId || 'game-modal'; 
        this.trailerContainerId = this.options.trailerContainerId || 'modal-trailer'; 
    };

    // Método para obtener el tráiler del juego
    GameTrailerPlugin.prototype.fetchGameTrailer = function(gameName) {
        const query = `${gameName} game trailer`;
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=${this.apiKey}`;

        // Hacer la llamada a la API de YouTube
        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    const trailerUrl = `https://www.youtube.com/embed/${videoId}`;
                    this._displayTrailer(trailerUrl);
                } else {
                    console.log("No se encontró tráiler para este juego.");
                }
            })
            .catch(error => {
                console.error("Error al obtener el tráiler:", error);
            });
    };

    // Método privado para mostrar el tráiler en el modal
    GameTrailerPlugin.prototype._displayTrailer = function(trailerUrl) {
        let trailerContainer = document.getElementById(this.trailerContainerId);
        
        if (!trailerContainer) {
            trailerContainer = document.createElement('div');
            trailerContainer.id = this.trailerContainerId;
            const modalContent = document.querySelector(`#${this.modalContainerId} .modal-content`);
            modalContent.appendChild(trailerContainer);
        }

        trailerContainer.innerHTML = `
            <iframe width="560" height="315" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    };

    // Exponer el plugin globalmente
    window.GameTrailerPlugin = GameTrailerPlugin;

})(window, document);