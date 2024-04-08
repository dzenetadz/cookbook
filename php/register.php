<?php
// Retrieve user input from form submission
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Establish connection to MySQL database
$servername = "localhost";
$username = "root"; // Default MAMP username
$password = "root"; // Default MAMP password
$dbname = "cookbook"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL INSERT statement
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
