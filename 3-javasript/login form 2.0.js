alert("login form is loaded");

document.getElementById("sign-in").onclick = function() {

    alert("button clicked");

    var userName = document.getElementById("username").value;

    var userNameId = "ketanaggarwal58";

    if (userName == userNameId) {

    

    } else {

        alert("please check your username and, then try again");

    }

    var passWord = document.getElementById("password").value;

    var passCode = "hr05az9776";

    if (passWord == passCode) {

        alert("YAY! you loged-in");

    } else {

        alert("please check you password and, then try again");
    }
}