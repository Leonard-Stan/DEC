$(document).ready(function () {  

$("body").append(`


<p>Este párrafo cambiará de tamaño al pasar el ratón por encima</p>

`)

/*
$("body").on("mousemove", function () {
    if ($("p").is(":hover")) {
        $("p").css("font-size", "16px");
        console.log(1);
    } else {
        console.log(2);
        $("p").css("font-size", "12px");
    }
    
    
});
*/

$("p").on("mouseenter", function () {
    $("p").addClass("tamaño1");
})

$("p").on("mouseout", function () {
    $("p").removeClass("tamaño1");
    console.log(2)
})
  







});