let allGames = []; 

// Función para cargar el JSON
function loadGames() {
    fetch('popular_top_rated_games_2024.json')
    .then(response => {
        console.log(response); 
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const mostPopularGames = Array.isArray(data.most_popular_games_2024) ? data.most_popular_games_2024 : [];
        allGames = mostPopularGames;
        createGameCards(allGames);
    })
    .catch(error => {
        console.error("Error al cargar el JSON:", error);
    });

}
function createGameCards(games) {
    const container = document.getElementById('games-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas cards

    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Crear el elemento de imagen y asignarle la ruta completa desde 'image_path'
        const image = document.createElement('img');
        image.classList.add('card-image');
        
        // Asignar la ruta de la imagen del juego
        image.src = game.image_path;  
        image.alt = game.name;  

        // Agregar un manejador para el error de carga de la imagen
        image.onerror = function() {
            // Cambiar a un placeholder en caso de error
            image.src = 'img/games/frostpunk_2.jpg'; // Aquí pones la ruta de tu imagen placeholder
        };

        const title = document.createElement('div');
        title.classList.add('card-title');
        title.textContent = game.name;

        const genres = document.createElement('div');
        genres.classList.add('card-genres');
        genres.textContent = `Género: ${game.genre}`;

        const score = document.createElement('div');
        score.classList.add('card-score');
        score.textContent = `Metacritic: ${game.metacritic_score}`;

        // Añadir los elementos a la card
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(genres);
        card.appendChild(score);

        // Añadir la card al contenedor
        container.appendChild(card);
    });

}

// Crear el modal en el DOM si no existe
if ($("#game-modal").length === 0) {
    $("body").append(`
        <div id="game-modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 id="modal-title"></h2>
                <img id="modal-image" src="" alt="">
                <p id="modal-genre"></p>
                <p id="modal-score"></p>
                <button id="buy-button">Comprar</button>
                <button id="like-button">❤️ Me gusta</button>
                <p id="like-message" style="display: none; color: green;">¡Te gusta este juego!</p>
            </div>
        </div>
    `);
}

// Función para mostrar el modal con la info del juego
function showGameModal(game) {
    $("#modal-title").text(game.name);
    $("#modal-image").attr("src", game.image_path).attr("alt", game.name);
    $("#modal-genre").text(`Género: ${game.genre}`);
    $("#modal-score").text(`Metacritic: ${game.metacritic_score}`);

    $("#buy-button").off("click").on("click", function() {
        alert(`Has comprado ${game.name}!`);
    });

    $("#like-button").off("click").on("click", function() {
        $("#like-message").fadeIn();
        setTimeout(() => $("#like-message").fadeOut(), 2000);
    });

    $("#game-modal").fadeIn();
}

// Manejo del cierre del modal
$(document).on("click", ".close", function() {
    $("#game-modal").fadeOut();
});

// Cerrar modal al hacer clic fuera de él
$(document).on("click", "#game-modal", function(event) {
    if ($(event.target).is("#game-modal")) {
        $("#game-modal").fadeOut();
    }
});

// Detectar clic en una card y abrir el modal
$(document).on("click", ".card", function() {
    const gameIndex = $(this).index();
    if (allGames[gameIndex]) {
        showGameModal(allGames[gameIndex]);
    }
});
