<!DOCTYPE Html>
<html>
<head>
	<title>Database</title>
<?php
	$servername = "127.0.0.1";
	$user_name = "root";
	$password = "";
	$database = "dishank";

	$db_handle = mysql_connect($servername, $user_name, $password);
	$db_found = mysql_select_db($database, $db_handle);

	if ($db_found) {
		$SQL = "SELECT * FROM subscribe";
		$result = mysql_query($SQL);

		while ( $db_field = mysql_fetch_assoc($result) ) {
			?>
			<table width="650" border="1" cellspacing="0" cellpadding="5">
				<tr>
					<td><? print $db_field['name']; ?></td>
					<td><? print $db_field['email']; ?></td>
					<td><? print $db_field['number']; ?></td>
					<td><? print $db_field['country']; ?></td>
					<td><? print $db_field['sex']; ?></td>
					<td><? print $db_field['description'] . "<BR>"; ?></td>
					<td><input type="submit" name="submit" value="Edit"><?  ?></td>
					<td><input type="submit" name="submit" value="Delete"><? mysql_query("DELETE FROM subscribe WHERE $['email']= '$email'");  ?></td>
				</tr>
			</table>
					<?php
		}
		mysql_close($db_handle);
	}
	else {
		print "Database NOT Found";
		mysql_close($db_handle);
	}
?>
</head>
<body>
	
</body>
</html>
