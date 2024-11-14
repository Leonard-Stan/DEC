//gameObjects
let player;
let grass1;
let grass2;
let grass3;
let grass4;
let grass5;
let grass6;
let grass7;
let grass8;
let grass9;

//Variación de animaciones 
let playerSprite = "img/Top_Down_Survivor/shotgun/idle/survivor-idle_shotgun_0.png"
let imageScale = 0.4;
//Empieza el juego
function StartGame()  
{
    gameArea.start();
    player = new component(313*imageScale, 207*imageScale, playerSprite, 640-(313*imageScale)/2, 360-(202*imageScale)/2, "player", 0);
    grass1 = new component(1280, 720, "img/grass.png", -1280, 720, "grass");
    grass2 = new component(1280, 720, "img/grass.png", 0, 720, "grass");
    grass3 = new component(1280, 720, "img/grass.png", 1280, 720, "grass");
    grass4 = new component(1280, 720, "img/grass.png", -1280, 0, "grass");
    grass5 = new component(1280, 720, "img/grass.png", 0, 0, "grass");
    grass6 = new component(1280, 720, "img/grass.png", 1280, 0, "grass"); // Corregido este valor
    grass7 = new component(1280, 720, "img/grass.png", -1280, -720, "grass"); // Cambiado el valor
    grass8 = new component(1280, 720, "img/grass.png", 0, -720, "grass"); // Cambiado el valor
    grass9 = new component(1280, 720, "img/grass.png", 1280, -720, "grass"); // Faltaba inicialización
    console.log("start")
}


//crear canvas

let gameArea = 
{
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1920;
        this.height = 1080;  // Corregido
        this.context = this.canvas.getContext("2d");
        clearInterval(gameArea.interval);
        this.interval = setInterval(updadeGameArea, 20);
        this.canvas.id = "Game-Window";

        //poner el canvas debajo del título
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        let h1Element = document.querySelector("h1.Game-Title");
        h1Element.insertAdjacentElement("afterend", this.canvas);
    },

    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Corregido clearRect y height
    }
}

function component(width, height, source, x, y, type, angle=0) 
{
    this.type = type;
    this.angle = angle;

    if(type == "image" || type == "grass") 
    {
        this.image = new Image();
        this.image.src = source;
    } 
    else if (type == "player") 
    {
        this.image = new Image();
        this.image.src = playerSprite;
    }

    this.width = width;
    this.height = height;  // Corregido
    this.x = x;
    this.y = y;

    this.update = function() {
        let ctx = gameArea.context;
        ctx.save();

        if (type === "player") {
            // Rotar la imagen del jugador en función del ángulo
            ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
            ctx.rotate(this.angle);
            ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
        } else {
            // Dibujar la hierba sin rotación
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        ctx.restore();
    }
}

function updadeGameArea() {
    gameArea.clear();
    player.update(); 
    grass1.update();
    grass2.update();
    grass3.update();
    grass4.update();
    grass5.update();
    grass6.update();
    grass7.update();
    grass8.update();
    grass9.update();

    console.log(1);
}
