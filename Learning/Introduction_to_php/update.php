<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
		$oldemail = $_POST['oldemail'];
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$sex = $_POST['sex'];
		$country = $_POST['country'];
		$description = $_POST['description'];
		$interest = $_POST['interest'];
		$query = "update user set name='".$name."', email='".$email."', number=".$number.", sex='".$sex."', country='".$country."', description='".$description."' where email=".$oldemail;
		mysqli_query($conn, $query);
		$id = 0;
		mysqli_query($conn, "DELETE from interest where email ='".$email."'");
		foreach ($interest as $value) {
			switch ($value) {
				case 'hobby1':
					$id = 1;
					break;
				case 'hobby2':
					$id = 2;
					break;
				case 'hobby3':
					$id = 3;
					break;
			}
			mysqli_query($conn, "INSERT INTO interest VALUES ($id,'$email')");
		}
		mysqli_close($conn);
		header('Location: http://dishank.localhost/data.php');
	}
?>