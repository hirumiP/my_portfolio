// Colorful Portfolio JavaScript with Amazing Animations

document.addEventListener('DOMContentLoaded', function() {
    // Create magical particle system
    createParticleSystem();
    
    // Create floating hearts
    createFloatingHearts();
    
    // Create bubble effects
    createBubbleEffects();
    
    // Add sparkle trail on mouse move
    createSparkleTrail();
    
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect with color change
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(255, 107, 107, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Smooth scrolling for navigation links with bounce effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add bounce effect to target section
                target.style.animation = 'bounceIn 0.8s ease';
                setTimeout(() => {
                    target.style.animation = '';
                }, 800);
            }
        });
    });

    // Magical scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const magicalAnimateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Add sparkle effect when element appears
                createSparkleEffect(entry.target);
            }
        });
    }, observerOptions);

    // Add animation to elements with magical effects
    document.querySelectorAll('.project-card, .education-item, .certificate-item, .stat-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.8)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        magicalAnimateOnScroll.observe(el);
    });

    // Contact form handling with success animation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:hirumipranethya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show magical success message
            showNotification('✨ Thank you for your message! Your email client should open now. ✨', 'success');
            
            // Create celebration effect
            createCelebrationEffect();
            
            // Reset form with animation
            this.style.animation = 'bounceOut 0.5s ease';
            setTimeout(() => {
                this.reset();
                this.style.animation = 'bounceIn 0.5s ease';
            }, 500);
        });
    }

    // Enhanced active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
                // Add glow effect to active link
                link.style.textShadow = '0 0 10px #ff6b6b';
            } else {
                link.style.textShadow = 'none';
            }
        });
    });

    // Magical skill tags hover effect
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.15) rotate(5deg)';
            this.style.boxShadow = '0 15px 30px rgba(255, 107, 107, 0.6)';
            
            // Create sparkle effect on hover
            createSparkleEffect(this);
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
        });
    });

    // Colorful scroll to top functionality
    function createScrollToTopButton() {
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '🚀';
        scrollButton.className = 'scroll-to-top magical-button';
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            display: none;
            z-index: 1000;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
            animation: pulse 2s infinite;
        `;
        
        scrollButton.addEventListener('mouseenter', () => {
            scrollButton.style.background = 'linear-gradient(45deg, #ff5252, #ff7979)';
            scrollButton.style.transform = 'translateY(-5px) scale(1.1)';
            scrollButton.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.6)';
        });
        
        scrollButton.addEventListener('mouseleave', () => {
            scrollButton.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
            scrollButton.style.transform = 'translateY(0) scale(1)';
            scrollButton.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
        });
        
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Create rocket launch effect
            createRocketEffect(scrollButton);
        });
        
        document.body.appendChild(scrollButton);
        
        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
    }

    // Initialize scroll to top button
    createScrollToTopButton();

    // Enhanced project cards with magical effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.05) rotateY(5deg)';
            this.style.boxShadow = '0 30px 60px rgba(255, 107, 107, 0.4)';
            
            // Add rainbow border effect
            this.style.border = '2px solid #ff6b6b';
            this.style.animation = 'rainbowBorder 2s linear infinite';
            
            // Create magical particles around the card
            createCardParticles(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.2)';
            this.style.animation = '';
            this.style.border = '2px solid rgba(255, 255, 255, 0.3)';
        });
    });

    // Magical section reveal animation
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                
                // Add section-specific effects
                if (entry.target.classList.contains('hero')) {
                    createHeroParticles();
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(100px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
        sectionObserver.observe(section);
    });

    // Add CSS for magical animations
    const style = document.createElement('style');
    style.textContent = `
        .section-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .hero {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .nav-link.active {
            color: #ff6b6b !important;
            transform: scale(1.1);
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        .magical-button:hover {
            animation: bounce 0.6s ease infinite !important;
        }
        
        @keyframes bounceOut {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1.1); opacity: 0; }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideInRight 0.5s ease;
        }
        
        .notification.success {
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        }
        
        .notification.error {
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    console.log('🎨 Colorful Portfolio with Amazing Animations Loaded! 🚀✨');
});

// Magical Functions

function createParticleSystem() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts';
    document.body.appendChild(heartsContainer);
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['💖', '💕', '💗', '🌸', '✨'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 12000);
    }, 2000);
}

function createBubbleEffects() {
    document.querySelectorAll('section').forEach(section => {
        const bubblesContainer = document.createElement('div');
        bubblesContainer.className = 'bubbles';
        section.style.position = 'relative';
        section.appendChild(bubblesContainer);
        
        for (let i = 0; i < 5; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 8 + 's';
            bubblesContainer.appendChild(bubble);
        }
    });
}

function createSparkleTrail() {
    let sparkleCount = 0;
    
    document.addEventListener('mousemove', (e) => {
        if (sparkleCount % 5 === 0) { // Create sparkle every 5th mouse move
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.position = 'fixed';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.fontSize = '16px';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        }
        sparkleCount++;
    });
}

function createSparkleEffect(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = (rect.left + rect.width/2) + 'px';
        sparkle.style.top = (rect.top + rect.height/2) + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.color = ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffcccb'][Math.floor(Math.random() * 4)];
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 50;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        sparkle.animate([
            { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${endX}px, ${endY}px) scale(1) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }
}

function createCelebrationEffect() {
    const colors = ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffcccb', '#ffe4e6'];
    const emojis = ['🎉', '🎊', '✨', '🌟', '💖', '🎈'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confetti.style.fontSize = '24px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';
        
        const angle = (Math.PI * 2 * i) / 20;
        const distance = 200;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        confetti.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
                opacity: 1 
            },
            { 
                transform: `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(1) rotate(720deg)`, 
                opacity: 0 
            }
        ], {
            duration: 1500,
            easing: 'ease-out'
        });
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 1500);
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 3000);
}

function createRocketEffect(button) {
    const rocket = document.createElement('div');
    rocket.innerHTML = '🚀';
    rocket.style.position = 'fixed';
    rocket.style.left = button.offsetLeft + 'px';
    rocket.style.top = button.offsetTop + 'px';
    rocket.style.fontSize = '30px';
    rocket.style.pointerEvents = 'none';
    rocket.style.zIndex = '10001';
    
    rocket.animate([
        { transform: 'translateY(0) scale(1) rotate(0deg)', opacity: 1 },
        { transform: 'translateY(-100vh) scale(0.5) rotate(360deg)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-in'
    });
    
    document.body.appendChild(rocket);
    
    setTimeout(() => {
        if (rocket.parentNode) {
            rocket.parentNode.removeChild(rocket);
        }
    }, 1000);
}

function createCardParticles(card) {
    const rect = card.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '✨';
        particle.style.position = 'fixed';
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        particle.style.fontSize = '16px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.color = '#ff6b6b';
        
        particle.animate([
            { transform: 'translateY(0) scale(0) rotate(0deg)', opacity: 1 },
            { transform: 'translateY(-50px) scale(1) rotate(360deg)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}
