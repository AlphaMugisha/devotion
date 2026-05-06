<?php
// Mock Data Loader
$jsonData = file_get_contents('data/mock_data.json');
$data = json_decode($jsonData, true);

$currentUser = $data['currentUser'];
$devotions = $data['devotions'];
$announcements = $data['announcements'];

// Simple Routing
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

function getActive($p, $current) {
    return $p === $current ? 'active' : '';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Devotion Dashboard | iOS 26 Premium</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body data-theme="light">
    
    <div class="theme-toggle glass">
        <i data-lucide="moon" class="theme-icon-moon"></i>
        <i data-lucide="sun" class="theme-icon-sun" style="display:none;"></i>
    </div>

    <nav class="sidebar glass">
        <a href="?page=home" class="<?php echo getActive('home', $page); ?>" title="Home"><i data-lucide="layout-grid"></i></a>
        <a href="?page=class" class="<?php echo getActive('class', $page); ?>" title="Class"><i data-lucide="users"></i></a>
        <a href="?page=chat" class="<?php echo getActive('chat', $page); ?>" title="Messages"><i data-lucide="message-circle"></i></a>
        <a href="?page=schedule" class="<?php echo getActive('schedule', $page); ?>" title="Schedule"><i data-lucide="calendar"></i></a>
        <a href="?page=profile" class="<?php echo getActive('profile', $page); ?>" title="Profile"><i data-lucide="user"></i></a>
    </nav>

    <main class="dashboard">
        <?php if ($page === 'home'): ?>
            <header class="header-card bento-item animate-fade">
                <div class="welcome-text">
                    <h1>Welcome back, <?php echo $currentUser['name']; ?></h1>
                    <p>It's a beautiful day for reflection in <?php echo $currentUser['class']; ?></p>
                </div>
                <div class="current-date glass">
                    <i data-lucide="calendar-days"></i>
                    <span><?php echo date('l, F jS'); ?></span>
                </div>
            </header>

            <!-- Row 1: Main Highlight & Announcements -->
            <section class="hero-card bento-item glass animate-fade" style="--delay: 0.1s">
                <div class="card-header">
                    <i data-lucide="sparkles"></i>
                    <h2>Today's Highlight</h2>
                </div>
                <?php $today = $devotions[0]; ?>
                <div class="highlight-content">
                    <h3><?php echo $today['title']; ?></h3>
                    <p class="verse">"<?php echo $today['verse']; ?>"</p>
                    <div class="scripture-box">
                        <p class="scripture"><?php echo $today['scripture']; ?></p>
                    </div>
                    <div class="leader-chip">
                        <img src="https://i.pravatar.cc/150?u=sarah" alt="Leader">
                        <span>Led by <?php echo $today['leader']; ?></span>
                    </div>
                </div>
            </section>

            <aside class="announcement-card bento-item glass animate-fade" style="--delay: 0.2s">
                <div class="card-header">
                    <i data-lucide="megaphone"></i>
                    <h2>Announcements</h2>
                </div>
                <div class="announcement-list">
                    <?php foreach ($announcements as $ann): ?>
                        <div class="ann-item">
                            <h4><?php echo $ann['title']; ?></h4>
                            <p><?php echo $ann['content']; ?></p>
                            <span class="ann-date"><?php echo $ann['date']; ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
                <button class="view-all-btn">View All Updates <i data-lucide="chevron-right"></i></button>
            </aside>

            <!-- Row 2: Up Next & Statistics -->
            <div class="up-next-card bento-item glass animate-fade" style="--delay: 0.3s">
                <div class="card-header">
                    <i data-lucide="clock"></i>
                    <h2>Up Next</h2>
                </div>
                <?php $next = $devotions[1]; ?>
                <div class="next-info">
                    <div class="next-title-row">
                        <span class="topic-tag">Upcoming</span>
                        <h3><?php echo $next['title']; ?></h3>
                    </div>
                    <div class="timer-container">
                        <div class="timer-label">Starts in</div>
                        <div class="countdown" id="countdown">00:00:00</div>
                    </div>
                    <div class="assignment">
                        <i data-lucide="user-plus"></i>
                        <span>Responsible: <strong><?php echo $next['leader']; ?></strong></span>
                    </div>
                </div>
            </div>

            <div class="stats-card bento-item glass animate-fade" style="--delay: 0.4s">
                <div class="card-header">
                    <i data-lucide="bar-chart-3"></i>
                    <h2>Your Growth</h2>
                </div>
                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="stat-value">12</span>
                        <span class="stat-label">Streak</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-value">85%</span>
                        <span class="stat-label">Attendance</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-value">4</span>
                        <span class="stat-label">Led</span>
                    </div>
                </div>
                <div class="progress-container">
                    <div class="progress-label"><span>Weekly Goal</span> <span>75%</span></div>
                    <div class="progress-bar"><div class="progress-fill" style="width: 75%"></div></div>
                </div>
            </div>

            <!-- Row 3: Inspiration & Prayer Wall -->
            <div class="verse-card bento-item glass animate-fade" style="--delay: 0.5s">
                <div class="card-header">
                    <i data-lucide="quote"></i>
                    <h2>Inspiration</h2>
                </div>
                <div class="inspiration-content">
                    <p class="quote">"Faith is taking the first step even when you don't see the whole staircase."</p>
                    <p class="author">— Martin Luther King Jr.</p>
                </div>
            </section>

            <div class="prayer-wall-card bento-item glass animate-fade" style="--delay: 0.6s">
                <div class="card-header">
                    <i data-lucide="heart"></i>
                    <h2>Prayer Wall</h2>
                </div>
                <div class="prayer-list">
                    <div class="prayer-item">
                        <p>"Praying for the upcoming exams."</p>
                        <span>— Anonymous • 2h ago</span>
                    </div>
                    <div class="prayer-item">
                        <p>"Gratitude for the recovery of my grandmother."</p>
                        <span>— Marcus • 5h ago</span>
                    </div>.
                </div>
                <button class="add-prayer-btn"><i data-lucide="plus"></i> Add Request</button>
            </div>

            <!-- Row 4: Shortcuts & Resources -->
            <section class="shortcuts-card bento-item glass animate-fade" style="--delay: 0.7s">
                <div class="card-header">
                    <i data-lucide="zap"></i>
                    <h2>Quick Actions</h2>
                </div>
                <div class="shortcuts">
                    <button class="action-card glass">
                        <i data-lucide="file-text"></i>
                        <span>My Notes</span>
                    </button>
                    <button class="action-card glass">
                        <i data-lucide="music"></i>
                        <span>Hymnal</span>
                    </button>
                    <button class="action-card glass">
                        <i data-lucide="video"></i>
                        <span>Join Live</span>
                    </button>
                    <button class="action-card glass">
                        <i data-lucide="book-open"></i>
                        <span>Bible</span>
                    </button>
                </div>
            </section>

            <section class="resources-card bento-item glass animate-fade" style="--delay: 0.8s">
                <div class="card-header">
                    <i data-lucide="library"></i>
                    <h2>Learning Resources</h2>
                </div>
                <div class="resource-grid">
                    <div class="resource-item">
                        <div class="res-icon"><i data-lucide="headphones"></i></div>
                        <div class="res-info">
                            <h4>Morning Meditation</h4>
                            <p>10 min audio session</p>
                        </div>
                    </div>
                    <div class="resource-item">
                        <div class="res-icon"><i data-lucide="video"></i></div>
                        <div class="res-info">
                            <h4>Leadership Basics</h4>
                            <p>Short video guide</p>
                        </div>
                    </div>
                </div>
            </section>

        <?php elseif ($page === 'class'): ?>
            <header class="header-card bento-item animate-fade">
                <h1>My Class</h1>
                <p><?php echo $currentUser['class']; ?></p>
            </header>
            <section class="class-grid" style="grid-column: span 12; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;">
                <?php foreach ($data['students'] as $student): ?>
                    <div class="student-card glass animate-fade" style="padding: 20px; text-align: center;">
                        <img src="<?php echo $student['photo']; ?>" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 10px;">
                        <h3><?php echo $student['name']; ?></h3>
                        <p><?php echo $student['bio']; ?></p>
                    </div>
                <?php endforeach; ?>
            </section>

        <?php elseif ($page === 'chat'): ?>
            <header class="header-card bento-item animate-fade">
                <h1>Class Chat</h1>
            </header>
            <section class="chat-container glass" style="grid-column: span 12; height: 60vh; display: flex; flex-direction: column;">
                <div class="chat-messages" style="flex: 1; overflow-y: auto; padding: 20px;">
                    <?php foreach ($data['messages'] as $msg): 
                        $isMe = $msg['senderId'] === $currentUser['id'];
                        ?>
                        <div class="message <?php echo $isMe ? 'outgoing' : 'incoming'; ?> glass" style="margin-bottom: 15px; padding: 12px; width: fit-content; max-width: 80%; <?php echo $isMe ? 'margin-left: auto; background: var(--ios-accent); color: white;' : ''; ?>">
                            <p><?php echo $msg['text']; ?></p>
                            <small><?php echo $msg['timestamp']; ?></small>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="chat-input-bar glass" style="padding: 15px; display: flex; gap: 10px;">
                    <input type="text" placeholder="Type a message..." style="flex: 1; padding: 10px; border-radius: 20px; border: none; background: rgba(255,255,255,0.1); color: var(--ios-text);">
                    <button class="glass" style="padding: 10px 20px;">Send</button>
                </div>
            </section>

        <?php elseif ($page === 'schedule'): ?>
            <header class="header-card bento-item animate-fade">
                <h1>Devotion Schedule</h1>
            </header>
            <section class="schedule-timeline" style="grid-column: span 12;">
                <?php foreach ($devotions as $dev): ?>
                    <div class="schedule-item glass animate-fade" style="padding: 20px; margin-bottom: 20px; border-left: 4px solid var(--ios-accent);">
                        <h3><?php echo $dev['title']; ?> (<?php echo $dev['date']; ?>)</h3>
                        <p><strong>Leader:</strong> <?php echo $dev['leader']; ?></p>
                        <p><?php echo $dev['summary']; ?></p>
                        <span class="status" style="background: rgba(0,0,0,0.1); padding: 5px 10px; border-radius: 10px; font-size: 0.8rem;"><?php echo strtoupper($dev['status']); ?></span>
                    </div>
                <?php endforeach; ?>
            </section>

        <?php elseif ($page === 'profile'): ?>
            <header class="header-card bento-item animate-fade">
                <h1>My Profile</h1>
            </header>
            <section class="profile-card glass animate-fade" style="grid-column: span 12; padding: 40px; text-align: center;">
                <img src="<?php echo $currentUser['photo']; ?>" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;">
                <input type="text" value="<?php echo $currentUser['name']; ?>" class="glass" style="display: block; width: 300px; margin: 0 auto 10px; padding: 10px; text-align: center; font-size: 1.5rem; font-weight: bold; border: none; background: transparent;">
                <p><?php echo $currentUser['class']; ?></p>
                <textarea class="glass" style="width: 100%; max-width: 500px; height: 100px; margin-top: 20px; padding: 20px; background: transparent; border: none; color: var(--ios-text); text-align: center;"><?php echo $currentUser['bio']; ?></textarea>
                <button class="glass" style="margin-top: 20px; padding: 10px 40px;">Save Profile</button>
            </section>
        <?php endif; ?>
    </main>

    <script src="assets/js/main.js"></script>
    <script>
        // Simple Countdown
        function updateCountdown() {
            const el = document.getElementById('countdown');
            if (!el) return;
            const now = new Date();
            const tomorrow = new Date();
            tomorrow.setHours(24, 0, 0, 0);
            const diff = tomorrow - now;
            
            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            el.innerHTML = `${h}h ${m}m ${s}s`;
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
    </script>
</body>
</html>
