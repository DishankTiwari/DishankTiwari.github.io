<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if(isset($_POST["email"])){
			$servername = "127.0.0.1";
			$username = "root";
			$password = "";
			$dbname = "dishank";
			$conn = mysqli_connect($servername, $username, $password, $dbname);

			if(! $conn ){
				die('Could not connect: ' . mysqli_error($conn));
			}
			if (mysqli_connect_errno()){
				echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}
			$email = $_POST["email"];
			$query = "delete from user where email=".$email;
			mysqli_query($conn, $query);

			header('Location: http://dishank.localhost/data.php');
			mysqli_close($conn);
		}
	}
?>
