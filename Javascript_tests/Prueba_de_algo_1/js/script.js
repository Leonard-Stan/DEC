// script.js
//secreto: t6y5kgly2doa7gsvao9nfljn2pt2ee
//cliente: qye74r9y8kkcivypidgwpvnw41afpz
// Obtener elementos para el modal de registro
const registerBtn = document.getElementById("registerBtn");
const registerModal = document.getElementById("registerModal");
const registerLoginBtn = document.getElementById('register-login-btn');


// Obtener elementos para el modal de inicio de sesión (si se usa en la misma página)
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const loginRegisterBtn = document.getElementById("login-register-btn");



// Cerrar modal de registro
const closeButtons = document.querySelectorAll(".close");





function toggleMenu() {
  /*  const menu = document.getElementById('menu');
    menu.classList.toggle('show');*/
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menu-button');
    
    menu.classList.toggle('show');
    menuButton.classList.toggle('show');
}



// Mostrar el modal de registro al hacer clic en el botón
registerBtn.onclick = function() {
  registerModal.style.display = "flex";
};

// Mostrar el modal de inicio de sesión al hacer clic en el botón (si está en la misma página)
if (loginBtn) {
  loginBtn.onclick = function() {
    loginModal.style.display = "flex";
  };
}

// Cerrar los modales al hacer clic en la 'X'
closeButtons.forEach(button => {
  button.onclick = function() {
    registerModal.style.display = "none";
    if (loginModal) loginModal.style.display = "none";
  };
});


//Abrir el modal de registro al hacer click en el botón de "registrarse" en el modal de inicio de sesión
if (loginRegisterBtn) {
  loginRegisterBtn.onclick = function() {
    registerModal.style.display = "flex";
    loginModal.style.display = "none";
    };
    }

 //Abrir el modal de inicio de sesión al hacer click en el botón de "iniciar sesión" en el modal de registro
 if (registerLoginBtn) {
  registerLoginBtn.onclick = function() {
    loginModal.style.display = "flex";
    registerModal.style.display = "none";
    };
    }


// Cerrar los modales al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};
