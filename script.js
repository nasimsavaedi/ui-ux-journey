const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // عوض کردن آیکون بین ماه و خورشید
    if (body.classList.contains('dark-mode')) {
        themeIcon.src = 'moon.svg';
    } else {
        themeIcon.src = 'sun.svg';
    }
});