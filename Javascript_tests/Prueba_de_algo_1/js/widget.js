window.CartWidget = class CartWidget {
    constructor(cartId, cartItemsId, totalPriceId, allGames) {
        this.cart = document.getElementById(cartId);
        this.cartItems = document.getElementById(cartItemsId);
        this.totalPriceElement = document.getElementById(totalPriceId);
        this.allGames = allGames;
        this.totalPrice = 0;

        this.initDragAndDrop();
    }

    initDragAndDrop() {
        this.cart.addEventListener('dragover', (e) => {
            e.preventDefault();  
            this.cart.classList.add('over');
        });

        this.cart.addEventListener('dragleave', () => {
            this.cart.classList.remove('over');
        });

        this.cart.addEventListener('drop', (e) => {
            e.preventDefault();
            this.cart.classList.remove('over');
            this.addGameToCart(e);
    
        });
    }

    addGameToCart(e) {
        const gameName = e.dataTransfer.getData('gameName');
        const game = this.allGames.find(g => g.name === gameName);
        console.log(2)
        if (game) {
            this.totalPrice += game.price_estimated;
            console.log("Juego añadido al carrito", game);
            
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
            
            cartItem.appendChild(image);
            cartItem.appendChild(title);
            cartItem.appendChild(price);
            this.cartItems.appendChild(cartItem);
            console.log(1)
            this.updateTotalPrice();
        }
    }

    updateTotalPrice() {
        this.totalPriceElement.textContent = `$${this.totalPrice.toFixed(2)}`;
    }

 
}