<?php



?>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel = "stylesheet" href = "styles/weather.css">

    <title>weather</title>

</head>

<body>

    <form>

        <h1>What's the weather?</h1>

        <h3>Enter the name of a city</h3>

        <input type = "text" placeholder = "Eg. London, Tokyo" id = "city" name = "city">

        <input type = "button" value = "Submit" id = "b1">

    </form>

    <script src = "library/jquery-3.5.1.js"></script>

    <script>

        $("#b1").click(function(){

            alert("hello world");

        });

    </script>

</body>

</html>