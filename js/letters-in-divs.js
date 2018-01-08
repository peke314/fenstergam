var input = document.getElementsByTagName("INPUT");
input[0].addEventListener('keyup', lettersInDivs);

function lettersInDivs(e){
  if (e.keyCode == 13) {
    var str = input[0].value;
    var array = str.split("");
    var div = document.getElementById("windows--letters");
    var divs = div.children;
    for (i = 0; i < divs.length; i++){
        divs[i].innerHTML = array[i] || "";
    }
  }
}
