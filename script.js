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
    
    // Ajustar el margen superior del hero section según la altura del header
    function adjustHeroMargin() {
        const headerHeight = document.querySelector('header').offsetHeight;
        document.querySelector('.hero').style.marginTop = headerHeight + 'px';
    }
    
    // Ejecutar al cargar y al redimensionar la ventana
    adjustHeroMargin();
    window.addEventListener('resize', adjustHeroMargin);
});

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
            nav.classList.remove('active');
        }
    });
    
    // Ajustar el margen superior del hero section según la altura del header
    function adjustHeroMargin() {
        const headerHeight = document.querySelector('header').offsetHeight;
        document.querySelector('.hero').style.marginTop = headerHeight + 'px';
    }
    
    // Ejecutar al cargar y al redimensionar la ventana
    adjustHeroMargin();
    window.addEventListener('resize', adjustHeroMargin);
});

// Carrusel de galería
function initGallery() {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.gallery-dots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Crear dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide cada 5 segundos
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Pausar auto slide al hover
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    // Touch events para móviles
    let startX = 0;
    let endX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const diff = startX - endX;
        if (Math.abs(diff) > 50) { // Mínimo swipe de 50px
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
}

// Inicializar galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // ... tu código existente ...
    
    // Inicializar galería si existe
    if (document.querySelector('.gallery-slider')) {
        initGallery();
    }
});

window.addEventListener('scroll', fadeInOnScroll);
// Ejecutar una vez al cargar la página
fadeInOnScroll();