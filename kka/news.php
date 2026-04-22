<?php include 'includes/db_connect.php'; include 'includes/header.php'; ?>

<section class="container">
    <h2>Academy Updates</h2>
    <?php
    $sql = "SELECT * FROM news ORDER BY post_date DESC";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) {
        echo "<div class='card' style='margin-bottom:20px; border-left: 5px solid #f4b400;'>";
        echo "<h3>" . $row['title'] . "</h3>";
        echo "<small>Published: " . $row['post_date'] . "</small>";
        echo "<p>" . substr($row['content'], 0, 200) . "...</p>";
        echo "</div>";
    }
    ?>
</section>

<?php include 'includes/footer.php'; ?>