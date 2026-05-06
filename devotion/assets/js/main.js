document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Theme Switching
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.theme-icon-moon');
    const sunIcon = document.querySelector('.theme-icon-sun');
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        } else {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        }
    }

    // Chat functionality (Simulated)
    const chatInput = document.querySelector('.chat-input-bar input');
    const chatButton = document.querySelector('.chat-input-bar button');
    const chatContainer = document.querySelector('.chat-messages');

    if (chatButton && chatInput && chatContainer) {
        chatButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    function sendMessage() {
        const text = chatInput.value.trim();
        if (text) {
            const msgDiv = document.createElement('div');
            msgDiv.className = 'message outgoing glass animate-fade';
            msgDiv.innerHTML = `
                <div class="msg-content">${text}</div>
                <div class="msg-meta">Just now</div>
            `;
            chatContainer.appendChild(msgDiv);
            chatInput.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }

    // Scroll reveal for bento items
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.classList.add('animate-fade');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bento-item').forEach(item => {
        observer.observe(item);
    });
});
