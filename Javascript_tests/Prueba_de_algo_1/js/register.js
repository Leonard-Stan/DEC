document.addEventListener("DOMContentLoaded", function () {
    // Obtener el modal de registro y su contenido
    const registerModal = document.getElementById("registerModal");
    const registerForm = registerModal.querySelector("form");
    const usernameRegister = document.getElementById("username-register");
    const emailRegister = document.getElementById("email");
    const passwordRegister = document.getElementById("password-register");
    const confirmPasswordRegister = document.getElementById("confirm-password");
  
    // Elementos para mostrar los errores
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red"; // Estilo del mensaje de error
  
    // Función para registrar al usuario
    function registerUser(username, email, password) {
      const userData = {
        username: username,
        email: email,
        password: password
      };
      
      // Guardar los datos en localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
    }
  
    // Evento cuando el formulario de registro es enviado
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío del formulario
  
      const username = usernameRegister.value.trim();
      const email = emailRegister.value.trim();
      const password = passwordRegister.value.trim();
      const confirmPassword = confirmPasswordRegister.value.trim();
  
      // Limpiar el mensaje de error previo
      errorMessage.textContent = '';
  
      // Validar que las contraseñas coincidan
      if (password !== confirmPassword) {
        errorMessage.textContent = "Las contraseñas no coinciden. Intenta nuevamente.";
        registerForm.appendChild(errorMessage);
        return; // Detener el proceso si las contraseñas no coinciden
      }
  
      // Validar que no haya campos vacíos
      if (!username || !email || !password) {
        errorMessage.textContent = "Por favor, completa todos los campos.";
        registerForm.appendChild(errorMessage);
        return;
      }
     
      //comprobar que el usuario no existe
      

      // Llamar a la función de registro si todo es válido
      registerUser(username, email, password);
  
      
      usernameRegister.value = '';
      emailRegister.value = '';
      passwordRegister.value = '';
      confirmPasswordRegister.value = '';
  
      // Cerrar el modal después del registro 
      registerModal.style.display = "none";
    });
  
    // Función para cerrar el modal si el usuario hace clic fuera del contenido
    window.onclick = function (event) {
      if (event.target === registerModal) {
        registerModal.style.display = "none"; // Cerrar el modal al hacer clic fuera
      }
    };
 
   
  });
  