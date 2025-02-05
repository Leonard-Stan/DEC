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






//Aquí se crean las cartitas de los juegos
function createGameCards(games) {
    const container = document.getElementById('games-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas cards

    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('draggable', 'true');  // Hacemos que la card sea arrastrable
     
 
        // Crear el elemento de imagen y asignarle la ruta completa desde 'image_path'
        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = game.image_path;  
        image.alt = game.name;  

        // Agregar un manejador para el error de carga de la imagen
        image.onerror = function() {
            image.src = 'img/games/frostpunk_2.jpg';  // Imagen de placeholder
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
     

        card.addEventListener('dragstart', function (e) {
            // Usar game.name como identificador único
            e.dataTransfer.setData('gameName', game.name);
            console.log('Arrastrando juego con nombre:', game.name);  
        });
        

        // Añadir la card al contenedor
        container.appendChild(card);
    });
}






const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
let totalPrice = 0;


// Hacer que el carrito acepte los juegos arrastrados
cart.addEventListener('dragover', function (e) {
    e.preventDefault();  
    cart.classList.add('over');
});


cart.addEventListener('dragleave', function () {
    cart.classList.remove('over');
});




cart.addEventListener('drop', function (e) {
    e.preventDefault();
    cart.classList.remove('over');
   
    // Obtener el nombre del juego arrastrado
    const gameName = e.dataTransfer.getData('gameName');
    
    // Buscar el juego en el JSON usando el nombre
    const game = allGames.find(g => g.name === gameName);
    totalPrice+=game.price_estimated;
    console.log(game);
   
    if (game) {
        console.log("Juego añadido al carrito", game);
        // Crear un nuevo elemento para el carrito con la información del juego
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        const image = document.createElement('img');
        image.classList.add('cart-item-image');
        image.src = game.image_path;
        image.alt = game.name;
        
        const title = document.createElement('div');
        title.classList.add('cart-item-title');
        title.textContent = game.name;
        
        const price = document.createElement('div');
        price.classList.add('cart-item-price');
        price.textContent = `$${game.price_estimated}`;
        
        // Añadir todo al cartItem
        cartItem.appendChild(image);
        cartItem.appendChild(title);
        cartItem.appendChild(price);
        
        // Agregar el juego al carrito
        cartItems.appendChild(cartItem);
        
       
    }
    $('#total-price').html(totalPrice);

});







// Verificar si el modal ya existe para evitar duplicados
if (!document.getElementById("game-modal")) {
    const modalHTML = `
        <div id="game-modal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2 id="modal-title"></h2>
                <img id="modal-image" src="" alt="">
                <p id="modal-genre"></p>
                <p id="modal-score"></p>
                <button id="buy-button">Comprar</button>
                <button id="like-button">❤️ Me gusta</button>
                <p id="like-message" style="display: none; color: green;">¡Te gusta este juego!</p>
                <div id="modal-trailer"> HADHSIA </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}





// Instanciación del plugin
const gameTrailerPlugin = new GameTrailerPlugin({
    apiKey: 'AIzaSyBpZSC8wDs-ciud15gzGfO4pKCGh166iM4',
    modalContainerId: 'game-modal',
    trailerContainerId: 'modal-trailer'
});





// Función para mostrar el modal con la información del juego

function showGameModal(game) {
    document.getElementById("modal-title").textContent = game.name;
    document.getElementById("modal-image").src = game.image_path;
    document.getElementById("modal-genre").textContent = `Género: ${game.genre}`;
    document.getElementById("modal-score").textContent = `Metacritic: ${game.metacritic_score}`;

    document.getElementById("buy-button").onclick = function() {
        alert(`Has comprado ${game.name}!`);
    };

    document.getElementById("like-button").onclick = function() {
        document.getElementById("like-message").style.display = "block";
        setTimeout(() => document.getElementById("like-message").style.display = "none", 2000);
    };

    // Llamada al método del plugin para obtener el tráiler
    gameTrailerPlugin.fetchGameTrailer(game.name);  // Usar la instancia del plugin aquí

    // Mostrar el modal
    document.getElementById("game-modal").style.display = "flex";
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






















