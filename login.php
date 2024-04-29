<?php 
    session_start();
    include_once "db.php";
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    if(!empty($email) && !empty($password)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql = mysqli_query($conn, "SELECT * FROM form WHERE email = '{$email}'");
            if(mysqli_num_rows($sql) > 0){
               $fetch = mysqli_fetch_assoc($sql);
               $enc_password = $fetch['password'];
               if($enc_password === $password){
                $_SESSION['fname'] = $fetch['fname'];
                $_SESSION['lname'] = $fetch['lname'];
                echo "success";
               }else{
                 echo "Email or Password is incorrect!";
               }
            }else{
                echo "$email those not exist!";
            }
    }else{
        echo "$email is not a valid email";
    }
    }else{
        echo "All input required!";
    }
?>