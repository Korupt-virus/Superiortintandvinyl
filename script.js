/**
 * Superior Tint & Vinyl - JavaScript
 * Lightweight interactivity: mobile menu, FAQ accordion, gallery lightbox
 * No dependencies - vanilla JavaScript only
 */

document.addEventListener('DOMContentLoaded', function() {
    // ==========================================================================
    // MOBILE NAVIGATION
    // ==========================================================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    // Toggle mobile menu
    function toggleMobileMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu
    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }

    // Event listeners for mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ==========================================================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ==========================================================================
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target === '#') return;
            
            smoothScroll(target);
            closeMobileMenu();
        });
    });

    // ==========================================================================
    // FAQ ACCORDION
    // ==========================================================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            this.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active');
        });

        // Add keyboard support for FAQ
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // ==========================================================================
    // GALLERY LIGHTBOX
    // ==========================================================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let galleryImages = [];

    // Initialize gallery
    function initGallery() {
        galleryImages = Array.from(galleryItems).map(item => ({
            src: item.getAttribute('data-src'),
            alt: item.querySelector('img').getAttribute('alt')
        }));
    }

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        lightboxClose.focus();
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        body.style.overflow = '';
        
        // Return focus to clicked gallery item
        if (galleryItems[currentImageIndex]) {
            galleryItems[currentImageIndex].focus();
        }
    }

    // Update lightbox image
    function updateLightboxImage() {
        if (galleryImages[currentImageIndex]) {
            lightboxImage.src = galleryImages[currentImageIndex].src;
            lightboxImage.alt = galleryImages[currentImageIndex].alt;
        }
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
        updateLightboxImage();
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
        updateLightboxImage();
    }

    // Initialize gallery if elements exist
    if (galleryItems.length > 0 && lightbox) {
        initGallery();

        // Add click listeners to gallery items
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
            
            // Add keyboard support
            item.setAttribute('tabindex', '0');
            item.setAttribute('role', 'button');
            item.setAttribute('aria-label', `View image: ${item.querySelector('img').getAttribute('alt')}`);
            
            item.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                }
            });
        });

        // Lightbox controls
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', prevImage);
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', nextImage);
        }

        // Close lightbox when clicking outside image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation for lightbox
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        });
    }

    // ==========================================================================
    // STICKY HEADER ON SCROLL
    // ==========================================================================
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // ==========================================================================
    // FORM ENHANCEMENTS
    // ==========================================================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Form validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        // Real-time validation
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                clearFieldError(this);
            });
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate all required fields
            requiredFields.forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show success message or submit form
                showFormMessage('Thank you! We\'ll get back to you soon.', 'success');
                
                // Reset form after short delay
                setTimeout(() => {
                    contactForm.reset();
                }, 2000);
                
                // Here you would typically submit the form data
                // For now, we'll just show the success message
                console.log('Form would be submitted here');
            } else {
                showFormMessage('Please fill in all required fields correctly.', 'error');
            }
        });
    }

    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        clearFieldError(field);
        
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else if (field.type === 'tel' && value && !isValidPhone(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            isValid = false;
        }
        
        return isValid;
    }

    // Show field error
    function showFieldError(field, message) {
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.color = '#ff6b6b';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    // Clear field error
    function clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    // Show form message
    function showFormMessage(message, type) {
        let messageElement = contactForm.querySelector('.form-message');
        
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'form-message';
            messageElement.style.padding = '1rem';
            messageElement.style.borderRadius = '8px';
            messageElement.style.marginTop = '1rem';
            messageElement.style.fontWeight = '500';
            contactForm.appendChild(messageElement);
        }
        
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        
        if (type === 'success') {
            messageElement.style.backgroundColor = 'rgba(72, 187, 120, 0.1)';
            messageElement.style.color = '#48bb78';
            messageElement.style.border = '1px solid rgba(72, 187, 120, 0.3)';
        } else {
            messageElement.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
            messageElement.style.color = '#ff6b6b';
            messageElement.style.border = '1px solid rgba(255, 107, 107, 0.3)';
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Phone validation (basic US format)
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // ==========================================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================================================
    
    // Only add animations if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.service-card, .package-card, .feature-item, .review-card, .gallery-item'
        );
        
        animateElements.forEach(el => {
            observer.observe(el);
        });

        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .service-card,
            .package-card,
            .feature-item,
            .review-card,
            .gallery-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ==========================================================================
    // PERFORMANCE OPTIMIZATIONS
    // ==========================================================================
    
    // Lazy load images that aren't already lazy loaded
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        // Observe images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ==========================================================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==========================================================================
    
    // Skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--gold-gradient);
        color: var(--black);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 9999;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content id if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }

    // Announce page changes for screen readers
    function announcePageChange(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // ==========================================================================
    // UTILITY FUNCTIONS
    // ==========================================================================
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Apply throttling to scroll events
    const throttledScroll = throttle(function() {
        // Scroll-based functionality here
    }, 100);

    window.addEventListener('scroll', throttledScroll);

    console.log('Superior Tint & Vinyl website loaded successfully!');
});
