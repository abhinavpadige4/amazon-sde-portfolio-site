// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active navigation highlighting (if we had a nav)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a'); // Placeholder for future nav
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        // This would highlight active nav links if we had a nav
        // navLinks.forEach(link => {
        //     link.classList.remove('active');
        //     if (link.getAttribute('href').substring(1) === current) {
        //         link.classList.add('active');
        //     }
        // });
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
    
    // Preload images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.src.includes('placeholder')) {
            img.loading = 'lazy';
        }
    });
    
    // Add focus outlines for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
});