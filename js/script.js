var calc = document.getElementById("calc");
var put = document.getElementById("pass");
var table = document.querySelector(".table-data"); 


calc.addEventListener("click", calculate);

function calculate(){

table.style.display="block"
   
 for(var i=1; i< 11;  i++){
    
 table.innerHTML+= ("<td >"+ put.value +" "+ "X" +" "+ i + "=" +" "+ (put.value * i)+ "<br>"+ "</td>") ;
   
}


}
