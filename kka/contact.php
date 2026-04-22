<?php include 'includes/header.php'; ?>

<section class="container">
    <div style="max-width: 600px; margin: 0 auto;">
        <h2>Contact Us</h2>
        <form action="contact_process.php" method="POST" class="contact-form">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="email" name="email" placeholder="Email Address" required>
            <input type="text" name="subject" placeholder="Subject">
            <textarea name="message" rows="5" placeholder="How can we help you?" required></textarea>
            <button type="submit" class="btn">Send Message</button>
        </form>
    </div>
</section>

<?php include 'includes/footer.php'; ?>