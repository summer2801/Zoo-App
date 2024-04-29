<?php
    $conn = mysqli_connect("localhost", "root", "", "user_form");
    if(!$conn){
        echo "Database connection error".mysqli_connect_error();
    }

?>