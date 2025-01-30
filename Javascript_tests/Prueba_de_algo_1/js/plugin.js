(function($) {
    $.fn.invertBackground = function(options) {
        let settings = $.extend({
            target: "body", // Por defecto cambia el fondo del <body>
            infoBox: "#color-info" // Elemento donde se mostrará el color complementario
        }, options);

        this.click(function() {
            let targetElement = $(settings.target);
            let infoBox = $(settings.infoBox);
            let bgColor = targetElement.css("background-color");

            if (bgColor.includes("rgb")) {
                let rgb = bgColor.match(/\d+/g);
                let invertedColor = `rgb(${255 - rgb[0]}, ${255 - rgb[1]}, ${255 - rgb[2]})`;
                targetElement.css("background-color", invertedColor);
                infoBox.text(`Color complementario: ${invertedColor}`).css("color", invertedColor);
            }
        });
        return this;
    };
})(jQuery);

// Uso del plugin
$(document).ready(function() {
    $("#invert-button").invertBackground({ infoBox: "#color-info" });
});