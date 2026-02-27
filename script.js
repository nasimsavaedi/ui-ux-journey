function flipCard() {
    document.getElementById('main-card').classList.toggle('flipped');
}

const body = document.body;
document.getElementById('theme-toggle').addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.getElementById('theme-icon').src = body.classList.contains('dark-mode') ? 'moon.svg' : 'sun.svg';
});