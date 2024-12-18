$(function () {

    $('#saludo').on("click", function() {
        $('#mensaje').fadeTo(1500, 1); 
        $('#mensaje-despedida').fadeTo(500, 0);
    });

    
    $('#despedida').on("click", function() {
        $('#mensaje').fadeTo(500, 0);
        $('#mensaje-despedida').fadeTo(1500,1);
    });
});
