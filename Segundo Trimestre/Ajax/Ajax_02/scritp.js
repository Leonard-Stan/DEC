if (window.XMLHttpRequest){

    XMLHttpRequestObject = new XMLHttpRequest();
}
   
else if (window.ActiveXObject){
   
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

document.getElementById('p1').addEventListener('click', function () 
{
    if(XMLHttpRequestObject)
    {
        XMLHttpRequestObject.open("GET", "p1.html");

        XMLHttpRequestObject.onreadystatechange = function(){

            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
   
              document.getElementById("objeto").innerHTML = XMLHttpRequestObject.responseText;
            }   
    }
    XMLHttpRequestObject.send();
    }
    console.log("1")
}
)

document.getElementById('p2').addEventListener('click', function () 
{
    if(XMLHttpRequestObject)
    {
        XMLHttpRequestObject.open("GET", "p2.html");

        XMLHttpRequestObject.onreadystatechange = function(){

            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
   
              document.getElementById("objeto").innerHTML = XMLHttpRequestObject.responseText;
            }   
    }
    XMLHttpRequestObject.send();
    }
    console.log("1")
}
)
