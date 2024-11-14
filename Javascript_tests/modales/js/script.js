// Obtener elementos para el modal de registro
const registerBtn = document.getElementById("registerBtn");
const registerModal = document.getElementById("registerModal");

// Obtener elementos para el modal de inicio de sesión (si se usa en la misma página)
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");

// Cerrar modal de registro
const closeButtons = document.querySelectorAll(".close");

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

// Cerrar los modales al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};
