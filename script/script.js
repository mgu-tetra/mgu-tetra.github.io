document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.section-title, .dept-card, .ticker-container');

    // Add class for initial state
    revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => scrollObserver.observe(el));


    /* --- 2. 3D Tilt & Active Lighting (Liquid Glass Physics) --- */
    const cards = document.querySelectorAll('.dept-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Mouse position relative to element
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate center relative position (-1 to 1) for rotation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // X rotation is based on Y position (tilt up/down), Y rotation based on X position (tilt left/right)
            // Max rotation: 8 degrees
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            // Apply styles
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        });
    });


    /* --- 3. Magnetic Button Effect (Nav Links) --- */
    const magneticBtns = document.querySelectorAll('.nav-link, .tab-item');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Move the button slightly towards the cursor (Magnetic)
            // Divide by factor (e.g. 5) to dampen the movement
            btn.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0, 0)`;
        });
    });


    /* --- 4. Hero Parallax & Header Scroll --- */
    const logoBox = document.querySelector('.logo-box');
    const heroImg = document.querySelector('.hero img');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Header Logo Reveal
        if (scrolled > 100) {
            logoBox.classList.add('is-visible');
        } else {
            logoBox.classList.remove('is-visible');
        }

        // Hero Parallax (Move down slower than scroll)
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroImg.style.opacity = 1 - (scrolled / 500); // Fade out
        }
    });

});