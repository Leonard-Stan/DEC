const cubo = document.getElementById('jugador');
const gameContainer = document.getElementById('game-container');
const speed = 5; // Velocidad de movimiento del cubo
const projectileSpeed = 8; // Velocidad de los proyectiles
var vida = 100;

let keys = { w: false, a: false, s: false, d: false };
const projectiles = [];

// Función para calcular la posición actual del cubo
function getCuboCenter() {
    const rect = cubo.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

// Mueve el cubo para que apunte hacia el ratón
document.addEventListener('mousemove', (event) => {
    const cuboCenter = getCuboCenter(); // Actualizar la posición del centro del cubo
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - cuboCenter.y, mouseX - cuboCenter.x);
    const angleDeg = angle * (180 / Math.PI);

    cubo.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;
});

// Disparar proyectil al hacer clic izquierdo
document.addEventListener('click', (event) => {
    if (event.button === 0) {
        const cuboCenter = getCuboCenter(); // Obtener la posición actual del cubo
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Crear proyectil
        const proyectil = document.createElement('div');
        proyectil.classList.add('proyectil');
        gameContainer.appendChild(proyectil);

        // Posicionar proyectil en el centro del cubo
        proyectil.style.left = `${cuboCenter.x}px`;
        proyectil.style.top = `${cuboCenter.y}px`;

        // Calcular dirección del proyectil
        const angle = Math.atan2(mouseY - cuboCenter.y, mouseX - cuboCenter.x);
        const velX = Math.cos(angle) * projectileSpeed;
        const velY = Math.sin(angle) * projectileSpeed;

        projectiles.push({ element: proyectil, velX: velX, velY: velY });
    }
});

// Detectar teclas presionadas
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') keys.w = true;
    if (event.key === 'a') keys.a = true;
    if (event.key === 's') keys.s = true;
    if (event.key === 'd') keys.d = true;
});

// Detectar teclas liberadas
document.addEventListener('keyup', (event) => {
    if (event.key === 'w') keys.w = false;
    if (event.key === 'a') keys.a = false;
    if (event.key === 's') keys.s = false;
    if (event.key === 'd') keys.d = false;
});

// Animar proyectiles
function animateProjectiles() {
    projectiles.forEach((projectile, index) => {
        const rect = projectile.element.getBoundingClientRect();
        const newX = rect.left + projectile.velX;
        const newY = rect.top + projectile.velY;

        // Mover el proyectil
        projectile.element.style.left = `${newX}px`;
        projectile.element.style.top = `${newY}px`;

        // Eliminar proyectiles que salen de la pantalla
        if (newX < 0 || newX > window.innerWidth || newY < 0 || newY > window.innerHeight) {
            projectile.element.remove();
            projectiles.splice(index, 1);
        }
    });
}

// Actualizar la posición del cubo según las teclas presionadas
function updateCuboPosition() {
    const cuboCenter = getCuboCenter();
    if (keys.w) cuboCenter.y -= speed; // Mover arriba
    if (keys.a) cuboCenter.x -= speed; // Mover izquierda
    if (keys.s) cuboCenter.y += speed; // Mover abajo
    if (keys.d) cuboCenter.x += speed; // Mover derecha

    // Aplicar la nueva posición al cubo
    cubo.style.left = `${cuboCenter.x}px`;
    cubo.style.top = `${cuboCenter.y}px`;
}

// Detección de colisión
function detectarColisionEnemigoProyectil(enemigo) {
    const enemigoRect = enemigo.getBoundingClientRect();

    return projectiles.some((projectile, index) => {
        const proyectilRect = projectile.element.getBoundingClientRect();

        const colision = (
            enemigoRect.left < proyectilRect.right &&
            enemigoRect.right > proyectilRect.left &&
            enemigoRect.top < proyectilRect.bottom &&
            enemigoRect.bottom > proyectilRect.top
        );

        if (colision) {
            // Proyectil colisiona, eliminarlo
            projectile.element.remove();
            projectiles.splice(index, 1);
        }

        return colision;
    });
}

// Verificar si el enemigo ha sido golpeado
function verificarColisionConEnemigo() {
    const enemigo = document.getElementById('enemigo');
    if (detectarColisionEnemigoProyectil(enemigo)) {
        console.log("¡Colisión detectada con el enemigo!");
        vida -= 10;
        const barraVida = document.getElementById("verde");
        barraVida.style.width = vida + "px";
    }
}

// Ciclo de animación principal
function gameLoop() {
    updateCuboPosition();
    animateProjectiles();
    verificarColisionConEnemigo(); 
    requestAnimationFrame(gameLoop);
}

// Iniciar el ciclo de animación
gameLoop();
