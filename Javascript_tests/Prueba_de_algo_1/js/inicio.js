let allGames = []; // Arreglo para guardar todos los juegos

// Función para cargar el JSON
function loadGames() {
    fetch('popular_top_rated_games_2024.json')
    .then(response => {
        console.log(response); // Debugging: Check if file is being accessed correctly
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

// Función para crear las cards
function createGameCards(games) {
    const container = document.getElementById('games-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas cards

    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Crear el elemento de imagen y asignarle la ruta completa desde 'image_path'
        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = game.image_path;  // Ruta completa de la imagen del juego desde 'image_path'
        image.alt = game.name;   // Texto alternativo para accesibilidad

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



// Función para filtrar juegos por géneros
function filterGames() {
    const tags = document.getElementById('tag-input').value.toLowerCase().split(',').map(tag => tag.trim());
    console.log("Etiquetas de filtro:", tags);

    const filteredGames = allGames.filter(game => {
        return tags.every(tag => game.genre.toLowerCase().includes(tag));
    });

    console.log("Juegos filtrados:", filteredGames);
    createGameCards(filteredGames);
}



// Función para ordenar juegos por nombre
function sortByName() {
    const sortedGames = [...allGames].sort((a, b) => a.name.localeCompare(b.name));
    createGameCards(sortedGames); // Mostrar juegos ordenados
}

// Función para ordenar juegos por nota
function sortByScore() {
    const sortedGames = [...allGames].sort((a, b) => b.metacritic_score - a.metacritic_score);
    createGameCards(sortedGames); // Mostrar juegos ordenados
}
