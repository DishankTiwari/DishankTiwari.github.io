<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
	$servername = "127.0.0.1";
	$username = "root";
	$password = "";
	$dbname = "dishank";
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	if(! $conn )
	{
	  die("Connection failed: " . mysqli_connect_error());
	}
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	$sql = mysqli_query($conn, "SELECT * from subscribe");
	
	echo "<table border=1 cellpadding=5><tr><th>Name</th><th>E-Mail</th><th>Number</th><th>Country</th><th>Sex</th><th>Description</th></tr>";
	while($row = mysqli_fetch_array($sql, MYSQLI_ASSOC))
	{
		echo "<tr><td>".$row['name']."</td><td>".$row['email']."</td><td>".$row['number']."</td><td>".$row['country']."</td><td>".$row['sex']."</td><td>".$row['description']."<td><a href='delete.php?email=".$row['email']."'>Delete</a></td><td><a href='edit.php?email=".$row['email']."'>Edit</a></td></tr>";
	}
	mysqli_close($conn);
?>
</body>
</html>