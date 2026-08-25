document.addEventListener('DOMContentLoaded', function () {
    // Restore theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // Handle page navigation control button clicks
    const controls = document.querySelectorAll('.control');
    controls.forEach(function (button) {
        button.addEventListener('click', function () {
            const currentActive = document.querySelector('.active-btn');
            if (currentActive) {
                currentActive.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            const currentSection = document.querySelector('.active');
            if (currentSection) {
                currentSection.classList.remove('active');
            }

            const target = document.getElementById(button.dataset.id);
            if (target) {
                target.classList.add('active');
            }
        });
    });

    // Toggle light/dark mode and persist preference
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
});
