// Menú móvil
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Animación de elementos al hacer scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = function() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

// Manejo de menús desplegables en móviles
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    // Toggle para menús desplegables en móviles
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            link.addEventListener('click', function(e) {
                if (this.parentElement.classList.contains('dropdown')) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        });
    }
    
    // Toggle para el menú móvil
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Cerrar menús al hacer clic fuera de ellos
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

window.addEventListener('scroll', fadeInOnScroll);
// Ejecutar una vez al cargar la página
fadeInOnScroll();