// Skrip JavaScript Baru untuk Menu Hamburger yang menggunakan kelas 'open'
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        // Toggle kelas 'hidden' untuk menampilkan/menyembunyikan menu
        mobileMenu.classList.toggle('hidden');
        
        // Toggle kelas 'open' untuk animasi hamburger ke 'X'
        menuBtn.classList.toggle('open'); 

        // Atur aria-expanded
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
        menuBtn.setAttribute('aria-expanded', !isExpanded);
    });
});