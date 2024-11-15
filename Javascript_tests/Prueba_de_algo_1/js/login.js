document.addEventListener("DOMContentLoaded", function () {
    // Obtener el modal de login y su contenido
    const loginModal = document.getElementById("loginModal");
    const loginForm = loginModal.querySelector("form");
    const loginUsername = document.getElementById("username-login");
    const loginPassword = document.getElementById("password-login");
  
    // Elementos para mostrar los errores
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red"; // Puedes cambiar el color o estilo según lo desees
  
    // Función para validar las credenciales del usuario
    function validateLogin(username, password) {
      const storedUserData = JSON.parse(localStorage.getItem("user")); // Obtener los datos del usuario desde localStorage
  
      if (storedUserData) {
        // Comprobamos si el nombre de usuario o correo y la contraseña coinciden
        if ((storedUserData.username === username || storedUserData.email === username) && storedUserData.password === password) {
          return true;
        }
      }
      return false;
    }
  
    // Evento cuando el formulario de inicio de sesión es enviado
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío del formulario
  
      const username = loginUsername.value.trim();
      const password = loginPassword.value.trim();
  
      // Eliminar cualquier mensaje de error previo
      errorMessage.textContent = '';
  
      // Validar las credenciales
      if (validateLogin(username, password)) {
        alert("¡Inicio de sesión exitoso!");
  
        // Redirigir o cerrar el modal
        loginModal.style.display = "none"; // Cerrar el modal
        // window.location.href = "pagina-bienvenida.html"; // Redirigir a otra página si es necesario
  
      } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos. Intenta nuevamente."; // Mensaje de error
        loginForm.appendChild(errorMessage); // Mostrar mensaje de error en el formulario
      }
    });
  
    // Función para cerrar el modal si el usuario hace clic fuera del contenido
    window.onclick = function (event) {
      if (event.target === loginModal) {
        loginModal.style.display = "none"; // Cerrar el modal al hacer clic fuera
      }
    };
  
    
   
  });
  