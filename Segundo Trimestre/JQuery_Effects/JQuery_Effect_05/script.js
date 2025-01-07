
$(function () {
    $("#cubo").click(function () {
        $(this)
            .queue(function (next) {
                $(this).animate({ width: "200px" }, 1000); // Aumenta el ancho
                next();
            })
            .delay(500) // Espera medio segundo
            .queue(function (next) {
                $(this).css("background-color", "green"); // Cambia a verde
                next();
            })
            .delay(500) // Espera medio segundo
            .queue(function (next) {
                $(this).animate({ height: "200px" }, 1000); // Aumenta la altura
                next();
            });
    });
});
