<?php
  $name_error = $email_error = $country_error = $description_error =  $interest_error = $number_error = "";
  $sex_error =" ";
  $name = $email = $country = $description = $sex = $number = $message = "";
  $interest ="";
  $Flag=0;
  if ($_SERVER["REQUEST_METHOD"] == "POST") { $Flag=1;
    if (empty($_POST["name"])) {
      $name_error = "* Name is required";
      $Flag = 0;
    }
    else {
      $name = $_POST["name"];
    }
    if (empty($_POST["email"])) {
      $email_error = "* Email is required";
      $Flag = 0;
    }
    else {
      $email = $_POST["email"];
      if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email_error = "* Invalid Email";
      }
    }
    if (empty($_POST["country"])) {
      $country_error = "* Select a Country";
      $Flag = 0;
    }
    else {
      $country = $_POST["country"];
    }
    if (empty($_POST["description"])) {
      $description_error = "* Description Is Mandatory";
      $Flag = 0;
    }
    else {
      $description = $_POST["description"];
    }
    if ( ($_POST["sex"]=="male")||($_POST["sex"]=="female") ) {
      $sex = $_POST["sex"];
    }
    else {
     $sex_error = "* sex Is Mandatory";
      $Flag = 0;
    }
    if (empty($_POST["interest"])) {
      $interest_error = "* Confirm Your Interest";
      $Flag = 0;
    }
    else {
      $interest = $_POST["interest"];
    }
    if (empty($_POST["number"])) {
      $number_error = "* Number is required";
      $Flag = 0;
    }
    else {
      $number = $_POST["number"];
      if(!preg_match("/^[789][0-9]{9}$/", $number)){
        $number_error = "* Invalid Number";
      }
    }
    if($Flag == 1){
      // $data = "$name, $email, $number, $country, $sex, $interest[0], $interest[1], $interest[2], $description \n";
      // $myf = fopen("/home/dishanktiwari/DishankTiwari.github.io/Learning/Introduction_to_php/details.csv", "a");
      // fwrite($myf, $data);
      // fclose($myf);
      // $message = "Registered Successfully";
      $servername = "127.0.0.1";
      $username = "root";
      $password = "";
      $dbname = "dishank";

      $conn = mysqli_connect($servername, $username, $password, $dbname);
      if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
      }

      $sql = "INSERT INTO subscribe (name, email, number, country, sex, description) VALUES ('$name', '$email', '$number', '$country', '$sex', '$description')";
      if (mysqli_query($conn, $sql)) {
        echo "Successful";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }
      $sql1 = "INSERT INTO interest (email, hobby1, hobby2, hobby3) VALUES ('$email', '$interest[0]', '$interest[1]', '$interest[2]')";
      mysqli_query($conn, $sql1);
      mysqli_close($conn); 
    }
    else{
      echo $name_error;
      echo "<br>" . $email_error;
      echo "<br>" . $number_error;
      echo "<br>" . $country_error;
      echo "<br>" . $sex_error;
      echo "<br>" . $interest_error;
      echo "<br>" . $description_error; 
      echo "<br>" . $message;
    }
  }
?>