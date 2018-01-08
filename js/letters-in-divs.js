var input = document.getElementsByTagName("INPUT");
input[0].addEventListener('input', lettersInDivs);

function lettersInDivs(){
   var str = input[0].value;
   var strMarkup = "<div>" + str.split("").join("</div><div>") + "</div>";
   var divContainer = document.getElementById("windows--letters");
   divContainer.innerHTML = strMarkup;
}
