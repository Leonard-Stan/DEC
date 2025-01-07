
$(document).ready(function(){

    let cuadrado;
    let animandose = false;
    currentIndex = 0;

    animacion =[
    {left: "350px",top: "0px"},
    {left: "350px",top: "350px"},
    {left: "0px", top: "350px"},
    {left: "0px",top: "0px"}
    ]
    
    let tiempo = 1000;
    
    function animar(){
    
        if(!animandose){
    
            cuadrado = $('#cubo').animate(animacion[currentIndex],tiempo, () => {
    
                tiempo=1000;
    
                currentIndex = (currentIndex + 1) % animacion.length;
    
                animar()
    
            });
    
        }
    }
    
    
    $('button').on('click',function(){
    
        if($(this).attr('id') == 'start'){
    
            animandose = false;
    
            animar()
    
        } else {
    
            animandose = true;
    
            positionX = cuadrado.position().left;
    
            positionY = cuadrado.position().top;
    
            switch(currentIndex){
    
                case 0:
    
                tiempo = Math.abs(350 - positionX) / 0.35;
    
                break;
    
                case 2:
    
                tiempo = Math.abs(0 - positionX) / 0.35;
    
                break;
    
                case 1:
    
                tiempo = Math.abs(350 - positionY) / 0.35;
    
                break;
    
                case 3:
    
                tiempo = Math.abs(0 - positionY) / 0.35;
    
                break;
    
            }
    
            cuadrado.stop(true)

            
    
        }
    
    })
    

    
});


/* V2.0
$(function () {
    let funcionando = false; 
    let posicionX = 0;
    let posicionY = 0;
    let estadoAnterior = 0; 
    let tiempo = 1000;
    
    function moveCubo() {
        if (!funcionando) return; 

        switch(estadoAnterior) {
            case 0:
                $('#cubo').animate({ top: '0', left: '350px' }, tiempo, function() {
                    console.log(tiempo);
                    estadoAnterior = 1; 
                    moveCubo(); 
                });
                break;
            case 1:
                $('#cubo').animate({ top: '350px', left: '350px' }, tiempo, function() {
                    console.log(tiempo);
                    estadoAnterior = 2;
                    moveCubo();
                });
                break;
            case 2:
                $('#cubo').animate({ top: '350px', left: '0' }, tiempo, function() {
                    console.log(tiempo);
                    estadoAnterior = 3;
                    moveCubo();
                });
                break;
            case 3:
                $('#cubo').animate({ top: '0', left: '0' }, tiempo, function() {
                    console.log(tiempo);
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

         
            if (posicionX => 0 && posicionY === 0) {
                estadoAnterior = 1; 
                tiempo = Math.abs(350 - posicionX)/0.35;

            } else if (posicionX === 350 && posicionY === 350) {
                estadoAnterior = 2; 
                tiempo = Math.abs(350 - posicionY)/0.35;

            } else if (posicionX === 0 && posicionY === 350) {
                estadoAnterior = 3;
                tiempo = Math.abs(0 - posicionX)/0.35;

            } else if (posicionX === 0 && posicionY === 0) {
                estadoAnterior = 0; 
                tiempo = Math.abs(0 - posicionY)/0.35;
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
*/

/* v.1

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