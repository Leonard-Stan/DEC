$(function () {
    
    
    $('#hide').on("click", function() {
        $('#imagen').hide();
    })
    
    $('#show').on("click", function() {
        $('#imagen').show(500);
    })
    
    $('#hide').on("click", function() {
        $('#imagen').hide();
    })

    $('#fadeOut').on("click", function() {
        $('#imagen').fadeOut(100);
    })
    $('#fadeIn').on("click", function() {
        $('#imagen').fadeIn(100);
    })

    $('#slideUp').on("click", function() {
        $('#imagen').slideUp();
    })

    $('#slideDown').on("click", function() {
        $('#imagen').slideDown();
    })


    $('#animate').on("click", function() {
        $('#imagen').animate({
           
            top: '+=40',
            opacity: 1},
             1000);
})})