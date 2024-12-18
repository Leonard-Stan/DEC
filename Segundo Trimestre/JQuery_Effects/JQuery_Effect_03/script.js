
$(function () {
    let funcionando = false; 
    let posicionX = 0;
    let posicionY = 0;
    let estadoAnterior = 0; 


    function moveCubo() {
        if (!funcionando) return; 

        switch(estadoAnterior) {
            case 0:
                $('#cubo').animate({ top: '0', left: '350px' }, 1000, function() {
                    estadoAnterior = 1; 
                    moveCubo(); 
                });
                break;
            case 1:
                $('#cubo').animate({ top: '350px', left: '350px' }, 1000, function() {
                    estadoAnterior = 2;
                    moveCubo();
                });
                break;
            case 2:
                $('#cubo').animate({ top: '350px', left: '0' }, 1000, function() {
                    estadoAnterior = 3;
                    moveCubo();
                });
                break;
            case 3:
                $('#cubo').animate({ top: '0', left: '0' }, 1000, function() {
                    estadoAnterior = 0;
                    moveCubo();
                });
                break;
        }
    }

  
    $('#start').on("click", function () {
        if (!funcionando) {
            funcionando = true;
            moveCubo();
        }
    });

    
    $('#stop').on("click", function () {
        if (funcionando) {
            funcionando = false;
            $('#cubo').stop(true); 

            
            posicionX = $('#cubo').position().left;
            posicionY = $('#cubo').position().top;

         
            if (posicionX === 350 && posicionY === 0) {
                estadoAnterior = 1; 
            } else if (posicionX === 350 && posicionY === 350) {
                estadoAnterior = 2; 
            } else if (posicionX === 0 && posicionY === 350) {
                estadoAnterior = 3;
            } else if (posicionX === 0 && posicionY === 0) {
                estadoAnterior = 0; 
            }

           
            $('#cubo').css({
                top: posicionY + 'px',
                left: posicionX + 'px'
            });

           
            setTimeout(function () {
                funcionando = true;
                moveCubo();
            }, 1000);
        }
    });
});

/*

$(function () {
    let funcionando = false; 
    let posicionX = 0;
    let posicionY = 0;
  
    function moveCubo() {
        if (!funcionando) return; 

        $('#cubo').animate({ top: '0', left: '350px' }, 1000) 
                  .animate({ top: '350px', left: '350px' }, 1000) 
                  .animate({ top: '350px', left: '0' }, 1000) 
                  .animate({ top: '0', left: '0' }, 1000, moveCubo);
        
        
    }

    $('#start').on("click", function () {
        funcionando= true;
        moveCubo(); 
    });

 
    $('#stop').on("click", function () {
        if(funcionando){
            funcionando=false;
            $('#cubo').stop(true); 
            posicionX= $('#cubo').position().left;
            posicionY= $('#cubo').position().top;
            $('#cubo').css({
                top: posicionY+'px',
                left: posicionX+'px'
            })
    
            setTimeout(function () {
                funcionando = true; 
                moveCubo();
            }, 1000);
        }
       
    } )

    
}); */