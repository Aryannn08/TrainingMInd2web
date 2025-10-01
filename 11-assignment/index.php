<?php
$servername = "localhost";
$username = "phpmyadmin";
$password = "root";
$dbname = "testdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $conn->real_escape_string($POST['name']);
$email = $conn->real_escape_string($POST['email']);

$sql = "INSERT INTO users (id,name,email) VALUES (10,'$name', '$email')";

if($conn->query($sql) === TRUE) {
    echo "Record inserted successfully!";
} else {
    echo "Error: ". $sql . $conn->error;
}

$conn->close();

?>