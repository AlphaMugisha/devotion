<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: index.php"); // Redirect to login if not authenticated
    exit();
}
?>