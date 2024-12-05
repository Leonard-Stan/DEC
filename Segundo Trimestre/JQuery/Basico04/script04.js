$(document).ready(function () {
 
    $("body").append(`
      <form>
        <label for="a">Valor A</label>
        <input type="text" id="a" name="a" placeholder="a"><br>
        
        <label for="second">Valor B</label>
        <input type="text" id="second" name="second" placeholder="b"><br>
        
        <label for="cajitafeliz">Mostrar resultado</label>
        <input type="checkbox" id="cajitafeliz">
      </form>
    `);
  
   
    $("body").append(`
      <input type="text" id="resultado" readonly placeholder="Resultado">
    `);
  
$("#resultado").hide()
     

   $("#cajitafeliz").on("change", function () 
   
   {
    if ($("#cajitafeliz").is(":checked")) {
        

        $("#resultado").val( parseFloat($("#a").val())+parseFloat($("#second").val()));
        $("#resultado").show();
       
    } 
      
    else {
        
        $("#resultado").val("");
        $("#resultado").hide();
    }
    
    
   })
     
  
  });
  