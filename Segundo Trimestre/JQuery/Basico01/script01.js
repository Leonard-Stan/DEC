$(document).ready(function(){

    // Your code here
    $("body").append(`<div> Primera capa</div> <div> segunda capa</div><div> Tercera capa</div>`);


    $("div").css("color","green");
    
    alert($("div").length)

})
