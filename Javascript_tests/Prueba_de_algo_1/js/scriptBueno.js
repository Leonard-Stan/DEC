(function ($) {
  $.fn.modalWidget = function () {
      // Mostrar el modal de registro
      $("#registerBtn").click(function () {
          $("#registerModal").fadeIn(300); // Efecto de aparición
      });

      // Mostrar el modal de login
      $("#loginBtn").click(function () {
          $("#loginModal").fadeIn(300); // Efecto de aparición
      });

      // Cerrar modales
      $(".close").click(function () {
          $(this).closest(".modal").fadeOut(300); // Efecto de desaparición
      });

      // Abrir el modal de registro desde el modal de login
      $("#login-register-btn").click(function () {
          $("#registerModal").fadeIn(300);
          $("#loginModal").fadeOut(300);
      });

      // Abrir el modal de login desde el modal de registro
      $("#register-login-btn").click(function () {
          $("#loginModal").fadeIn(300);
          $("#registerModal").fadeOut(300);
      });


      
      $("#menu-button").click(function(){
        let menu = $("#menu");
        if (menu.css("left") === "-250px") {
            menu.animate({ left: "0px" }, 500, "linear"); // Movimiento uniforme
        } else {
            menu.animate({ left: "-250px" }, 500, "linear");
        }
    });

    $("#cart").click(function () {
        $("#cart-modal").fadeIn(300)
        console.log(1)
    })

  };
})(jQuery);

$(document).ready(function () {
  // Inicializar el widget de modales
  $('#modal-widget-container').modalWidget();
});
