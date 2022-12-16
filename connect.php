<?php

    $days = $_POST['days'];
    $hours = $_POST['hours'];
	$FullName = $_POST['Full Name'];
	$PhoneNumber = $_POST['Phone Number'];
    $number = $_POST['number'];

	// Database connection
	$conn = new mysqli('localhost','root','','restaurant');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into bookTable(days,hours, Full Name,Phone Number,number) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $days,$hours, $FullName,$PhoneNumber,$number);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>