<?php
    session_start();
    if(!isset($_SESSION['fname'])  && !isset($_SESSION['lname'])){
        header("location: login.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title><?php echo $_SESSION['fname'] ." ". $_SESSION['lname'] ?></title>
</head>
<body>
    <div class="container home">
        <h1>Welcome <span><?php echo $_SESSION['fname'] ." ". $_SESSION['lname'] ?></span></h1>
        <form action="#">
            <a href="logout.php">Logout</a>
        </form>
    </div>
</body>
</html>