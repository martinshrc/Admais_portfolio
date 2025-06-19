tailwind.config = {
    theme: {
        extend: {
            colors: {
                'royal-blue': '#0052D4',
                'tech-cyan': '#00C9FF',
                'graphite': '#1A1A1A',
                'graphite-light': '#2B2B2B',
                'snow-white': '#EAEAEA',
            },
            backgroundImage: {
                'gradient-blue': 'linear-gradient(90deg, #0052D4 0%, #00C9FF 100%)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}

// Scroll reveal animation
const fadeInElements = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Este evento garante que o script só vai rodar depois que todo o HTML da página for carregado.
document.addEventListener('DOMContentLoaded', function () {

    // LÓGICA PARA O FUNCIONAMENTO DO MENU MOBILE
    const menuButton = document.getElementById('mobile-menu-button');
    const mainNav = document.getElementById('main-nav');

    if (menuButton && mainNav) {
        menuButton.addEventListener('click', () => {
            mainNav.classList.toggle('hidden');
        });
    }


    // LÓGICA PARA FECHAR O MENU AO CLICAR EM UM LINK
    // 1. Encontra todos os links <a> que estão dentro do menu <nav id="main-nav">
    const navLinks = document.querySelectorAll('#main-nav a');

    // 2. Para cada link encontrado, adiciona um ouvinte de clique
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 3. Quando um link é clicado, adiciona a classe 'hidden' de volta ao menu para fechá-lo.
            // Usei .add() em vez de .toggle() porque quero que ele sempre feche.
            mainNav.classList.add('hidden');
        });
    });

    // LÓGICA PARA A ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA
    const fadeSections = document.querySelectorAll('.fade-in-section');

    if (fadeSections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeSections.forEach(section => {
            observer.observe(section);
        });
    }

});

// Form submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.');
        form.reset();
    });
}

// Plexus animation for hero section
const heroSection = document.querySelector('.hero-section');
let angle = 0;

function animatePlexus() {
    angle += 0.2;
    const x = Math.cos(angle) * 5;
    const y = Math.sin(angle) * 5;
    heroSection.style.backgroundPosition = `${x}px ${y}px`;
    requestAnimationFrame(animatePlexus);
}

animatePlexus();

