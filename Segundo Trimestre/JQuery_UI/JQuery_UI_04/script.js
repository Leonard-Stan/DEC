$(function () {
    var img1 = $('#img1');
    var img2 = $('#img2');
   
    $('#Next').on('click', function () {
        var width = parseInt(img1.css('width'), 10);
        if(img1.css('z-index') == 2)
        {
            
            img1.css('z-index', 2);
            img1.animate(
                { left: `-=${width}px` }, 
                500,
                img1.css('z-index', 1),
            );
            
            img2.css('z-index', 2);
            img2.animate(
                { left: `+=${width}px` },
                500,
                function () {
                    img1.css({ 'z-index': '1', 'left': '0px' }); 
                }
            
            )
        }
        else
        {
            img1.css('z-index', 1);
            
      
    
}
;})})