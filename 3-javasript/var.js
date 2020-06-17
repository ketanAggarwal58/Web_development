alert("page is loaded");

document.getElementById("change-text").onclick = function() {

alert("button clicked");

var textEntered = "";

textEntered = document.getElementById("text-input").value;

document.getElementById("text").innerHTML = textEntered;

}