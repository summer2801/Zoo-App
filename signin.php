<?php 
    include_once "db.php";
    $fname = mysqli_real_escape_string($conn, $_POST['fname']);
    $lname = mysqli_real_escape_string($conn, $_POST['lname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $cpassword = $_POST['cpassword'];

    if(!empty($fname) && !empty($lname) && !empty($email) && !empty($password)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $sql = mysqli_query($conn, "SELECT * FROM form WHERE email = '{$email}'");
            if(mysqli_num_rows($sql) > 0){
                echo "$email - This email already exist!";
            }else{
                if($password != $cpassword){
                    echo "Password not matched!";
                }else{
                    $insert = mysqli_query($conn, "INSERT INTO `form`( `fname`, `lname`, `email`, `password`) 
                                            VALUES ('{$fname}','{$lname}','{$email}','{$password}')");
                    if($insert){
                        echo "success";
                    }else{
                        echo "Something went Wrong.please try again";
                    }
                }
            }
        }else{
            echo "$email is not a valid email";
        }
    }else{
        echo "All input required!";
    }

?>