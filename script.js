
document.getElementById('about-btn').addEventListener('click', function() {
    var additionalText = document.getElementById('tentang');
    if (additionalText.style.display === 'none' || additionalText.style.display === '') {
        additionalText.style.display = 'block';
        this.textContent = 'Lihat Lebih Sedikit';
        } else {
            additionalText.style.display = 'none';
            this.textContent = 'Lihat Selengkapnya';
        }
});

document.getElementById('btn').addEventListener('click', function() {
    var additionalText = document.getElementById('additional-text');
    if (additionalText.style.display === 'none' || additionalText.style.display === '') {
        additionalText.style.display = 'block';
        this.textContent = 'Lihat Lebih Sedikit';
        } else {
            additionalText.style.display = 'none';
            this.textContent = 'Lihat Selengkapnya';
        }
});
