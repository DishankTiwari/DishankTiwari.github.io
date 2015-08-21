<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "dishank";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$email = $_POST['email'];
	
	if (!$conn) {
    	die("Connection failed: " . mysqli_connect_error());
	}
	$delete_s = "DELETE FROM subscriber where email='$email'";
  	mysqli_query($conn, $delete_s);
    $delete_i = "DELETE from interest where email='$email'";
  	mysqli_query($conn, $delete_i);
    
?>

