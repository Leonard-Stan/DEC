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
  
    const resultadoField = $("#resultado");
  

    resultadoField.hide(0);
  
 
    $("input[type=text]").on("change", function () {
   
        if(!isNaN(a) && !isNaN(b)){

      let a = parseFloat($("#a").val());
      let b = parseFloat($("#second").val());
        }
     
  
     
  });

  $("#cajitafeliz").is(":checked", function () {
    let resultado = a + b;
    resultadoField.val(resultado);
    resultadoField.show(0);

    
  })
    
  

  

    
});