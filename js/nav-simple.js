// Simple navigation handler - just mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const navLinks = document.querySelectorAll('[data-nav-link]');
    
    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu?.classList.toggle('hidden');
        });
    }
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
        });
    });
});
