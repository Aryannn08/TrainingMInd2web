<?php
// Show all PHP errors (helps while learning)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Only run if the form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Get data from the form
    $username = $_POST['username'];
    $mobile   = $_POST['mobile'];
    $dob      = $_POST['dob'];
    $email    = $_POST['email'];
    $password = $_POST['password'];
    $password2= $_POST['password2'];

    // Simple password match check
    if ($password != $password2) {
        die("Passwords do not match!");
    }

    // Hash the password before storing
    $password_hashed = password_hash($password, PASSWORD_DEFAULT);

    // Connect to MySQL
    $conn = new mysqli("localhost", "phpmyadmin", "root", "mydb"); // change credentials if needed

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into the table
    $sql = "INSERT INTO users (username, mobile, dob, email, password) 
            VALUES ('$username', '$mobile', '$dob', '$email', '$password_hashed')";

    if ($conn->query($sql) === TRUE) {
        echo "Data saved successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>
