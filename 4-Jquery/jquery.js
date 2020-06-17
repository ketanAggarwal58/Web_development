if (typeof jQuery == "undefined") {

    alert("jQuery is not installed");

} else {

    alert("jQuery is installed correctly");

}

alert("javascript is installed correctly!");

document.getElementById("btn").onclick = function() {

    alert("button is clicked!");

}

$("#btn").click(function() {

    alert("button is clicked");

})