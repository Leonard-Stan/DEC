$(document).ready(function(){

    // Your code here
    $("body").append(`

    <p> Some text</p> 
    <form> 
 

    <input type="radio" name="3" value="red">rojo <br>
    <input type="radio" name="3" value="rgb(0,255,0)">verde <br>
    <input type="radio" name="3" value= "#3584c9">asul <br>
    </form>
    `);


    $("input[type=radio]").on('change', function () {
        $("p").css("background-color", $(this).val());
        
    })




})
