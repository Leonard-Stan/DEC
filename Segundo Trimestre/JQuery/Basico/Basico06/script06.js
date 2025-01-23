$(document).ready(function () {  

$("body").append(`


<img src="https://picsum.photos/200">

`)
/*
$("img").fadeOut(2000).slideDown(2000).slideUp(2000);
*/
$("img").fadeOut(2000, function() {
    $(this).slideDown(3000, function() {
        $(this).slideUp(1000);
    });
});



});