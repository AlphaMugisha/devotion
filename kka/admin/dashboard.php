<?php 
include 'auth_check.php'; 
include '../includes/db_connect.php'; // Note the '../' to go up one folder
?>

<h2>Admin Dashboard</h2>
<p>Welcome, Levi. What would you like to manage today?</p>
<ul>
    <li><a href="manage_courses.php">Edit Courses</a></li>
    <li><a href="manage_news.php">Post News Update</a></li>
</ul>