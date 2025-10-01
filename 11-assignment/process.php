<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("Invalid request");
}

$username = trim($_POST['username']);
$mobile   = trim($_POST['mobile']);
$dob      = trim($_POST['dob']);
$email    = trim($_POST['email']);
$password = $_POST['password'];
$password2= $_POST['password2'];

if ($password !== $password2) {
    die("Passwords do not match!");
}

$hash = password_hash($password, PASSWORD_DEFAULT);

$conn = new mysqli("localhost", "phpmyadmin", "root", "mydb");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO users (username, mobile, dob, email, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $username, $mobile, $dob, $email, $hash);

if ($stmt->execute()) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
