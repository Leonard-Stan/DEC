document.addEventListener('DOMContentLoaded', () => {
   
    const tiendaButton = document.getElementById('tienda');
    const gamesContainer = document.getElementById('games-container');
    const filterContainer = document.getElementById('filter-container');

    tiendaButton.addEventListener('click', () => {
        if (gamesContainer) {
           
            gamesContainer.innerHTML = '';
            
            // Verificar si el filtro ya existe en el DOM
            if (!document.getElementById('filter-container')) {
                createFilter(gamesContainer); // Pasa el contenedor de juegos para insertar el filtro antes
            }

            // Cargar inicio.js solo una vez
            if (!document.getElementById('inicio-script')) {
                // Crear y cargar el script de inicio.js
                const script = document.createElement('script');
                script.id = 'inicio-script';
                script.src = 'js/inicio.js'; // Asegúrate de que esta ruta sea correcta
                document.body.appendChild(script);

                // Cuando el script se carga, ejecuta loadGames
                script.onload = () => {
                    loadGames();
                };
            } else {
                // Si el script ya se ha cargado, solo llama a loadGames nuevamente
                loadGames();
            }
        } else {
            console.error("El contenedor de juegos no se encuentra en el DOM.");
        }
    });
});

// Función para crear el filtro si no está en el DOM
function createFilter(gamesContainer) {
    const filterHTML = `
        <div id="filter-container" class="filter-container">
            <input type="text" id="tag-input" class="filter-input" placeholder="Filtrar por géneros (separados por coma)..." />
            <button id="filter-button" class="filter-button">Filtrar</button>
            <button id="sort-name" class="filter-button">Ordenar por Nombre</button>
            <button id="sort-score" class="filter-button">Ordenar por Nota</button>
        </div>
    `;
    // Insertar el filtro justo antes del contenedor de juegos
    gamesContainer.insertAdjacentHTML('beforebegin', filterHTML);

    // Asociar eventos para los botones de filtro
    document.getElementById('filter-button').addEventListener('click', filterGames);
    document.getElementById('sort-name').addEventListener('click', sortByName);
    document.getElementById('sort-score').addEventListener('click', sortByScore);
}

function filterGames() {
    const tags = document.getElementById('tag-input').value.toLowerCase().split(',').map(tag => tag.trim());
    console.log("Etiquetas de filtro:", tags);

    const filteredGames = allGames.filter(game => {
        // Verificar que 'game.genre' sea una cadena antes de llamar a 'toLowerCase'
        const genre = typeof game.genre === 'string' ? game.genre.toLowerCase() : '';

        return tags.every(tag => genre.includes(tag));
    });

    console.log("Juegos filtrados:", filteredGames);
    createGameCards(filteredGames);
}

function sortByName() {
    const sortedGames = [...allGames].sort((a, b) => a.name.localeCompare(b.name));
    createGameCards(sortedGames); // Mostrar juegos ordenados
}

function sortByScore() {
    const sortedGames = [...allGames].sort((a, b) => b.metacritic_score - a.metacritic_score);
    createGameCards(sortedGames); // Mostrar juegos ordenados
}
