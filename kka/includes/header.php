<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <div class="logo">NGA Coding Academy</div>
    <nav>
        <ul>
            <li><a href="index.php" class="<?= ($current_page=='index.php')?'active':'' ?>">Home</a></li>
            <li><a href="about.php" class="<?= ($current_page=='about.php')?'active':'' ?>">About</a></li>
            <li><a href="academic.php" class="<?= ($current_page=='academic.php')?'active':'' ?>">Academics</a></li>
            <li><a href="course.php" class="<?= ($current_page=='course.php')?'active':'' ?>">Courses</a></li>
            <li><a href="news.php" class="<?= ($current_page=='news.php')?'active':'' ?>">News</a></li>
            <li><a href="contact.php" class="<?= ($current_page=='contact.php')?'active':'' ?>">Contact</a></li>
        </ul>
    </nav>
</header>
<header>
    <div class="logo">NGA <span>Academy</span></div>
    <div class="hamburger">☰</div>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="course.php">Courses</a></li>
        </ul>
    </nav>
</header>