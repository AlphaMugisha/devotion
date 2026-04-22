<?php include 'includes/db_connect.php'; include 'includes/header.php'; ?>

<section class="container">
    <h2>Our Professional Courses</h2>
    <div class="grid">
        <?php
        $sql = "SELECT * FROM courses";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<div class='card'>";
                echo "<h3>" . $row['course_name'] . "</h3>";
                echo "<p>" . $row['description'] . "</p>";
                echo "<strong>Fee: " . $row['fee'] . " RWF</strong>";
                echo "</div>";
            }
        } else {
            echo "<p>No courses listed yet. Check back soon!</p>";
        }
        ?>
    </div>
</section>

<?php include 'includes/footer.php'; ?>