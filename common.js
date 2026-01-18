// common.js
// Tailwind config
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { serif: ['Cormorant Garamond', 'serif'], sans: ['Inter', 'sans-serif'] },
            colors: { brand: { gold: '#C5A059', dark: '#0A0A0A', panel: '#111111', border: '#262626' } },
            animation: { 'marquee': 'marquee 25s linear infinite', 'slow-pan': 'pan 20s ease-in-out infinite alternate' },
            keyframes: {
                marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } },
                pan: { '0%': { transform: 'scale(1) translate(0, 0)' }, '100%': { transform: 'scale(1.1) translate(-2%, -2%)' } }
            }
        }
    }
};

// Common functions
function setLanguage(lang) {
    localStorage.setItem('sucila_lang', lang);
    updateUI(lang);
}

function updateUI(lang) {
    // This will be overridden in each page with their translations
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.id === `lang-${lang}`));
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    // updateUI will be called in each page
});