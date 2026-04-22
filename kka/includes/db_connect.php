<?php
$host = "localhost";
$user = "root";
$pass = ""; // Leave empty if using XAMPP default
$dbname = "nga_coding_academy";

$conn = new mysqli($host, $user, $pass, $dbname);

// Check if the connection works
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>