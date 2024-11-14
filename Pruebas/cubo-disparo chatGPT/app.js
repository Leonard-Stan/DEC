// app.js
const cubo = document.getElementById('cubo');
const gameContainer = document.getElementById('game-container');
const speed = 5; // Velocidad de movimiento del cubo
const projectileSpeed = 8; // Velocidad de los proyectiles

const cuboCenter = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

const projectiles = [];
let keys = { w: false, a: false, s: false, d: false };

// Mueve el cubo para que apunte hacia el ratón
document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - cuboCenter.y, mouseX - cuboCenter.x);
    const angleDeg = angle * (180 / Math.PI);

    cubo.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;
});

// Disparar proyectil al hacer clic izquierdo
document.addEventListener('click', (event) => {
    if (event.button === 0) {
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
    if (keys.w) cuboCenter.y -= speed; // Mover arriba
    if (keys.a) cuboCenter.x -= speed; // Mover izquierda
    if (keys.s) cuboCenter.y += speed; // Mover abajo
    if (keys.d) cuboCenter.x += speed; // Mover derecha

    // Aplicar la nueva posición al cubo
    cubo.style.left = `${cuboCenter.x}px`;
    cubo.style.top = `${cuboCenter.y}px`;
}

// Ciclo de animación principal
function gameLoop() {
    updateCuboPosition();
    animateProjectiles();
    requestAnimationFrame(gameLoop);
}

// Iniciar el ciclo de animación
gameLoop();
