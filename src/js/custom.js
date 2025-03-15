// Add your custom JavaScript code here

function playVideo() {
    document.querySelector('.video-thumbnail').style.display = 'none';
    const videoElement = document.getElementById('local-video');
    videoElement.style.display = 'block';
    videoElement.play();
}

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event listener to a button
    document.querySelector('.additional-procedures-btn').addEventListener('click', function() {
        alert('Additional Procedures button clicked!');
    });

    // Add more custom JavaScript code here
    // Example: Toggle class on navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar-custom');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animation observer setup
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Trigger at 50% visibility
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Services Section
                if (entry.target.classList.contains('services-procedures-heading')) {
                    entry.target.classList.add('services-heading-animate');
                    // Buttons will animate automatically through CSS selectors
                } 
                // Achieve Section
                else if (entry.target.classList.contains('achieve-section-col')) {
                    entry.target.classList.add('achieve-col-animate');
                } else if (entry.target.classList.contains('achieve-section-button')) {
                    entry.target.classList.add('achieve-btn-animate');
                }
                // Milestone Section
                else if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('milestone-animate');
                }
                // Follow Section
                else if (entry.target.classList.contains('follow-left')) {
                    entry.target.classList.add('follow-left-animate');
                } else if (entry.target.classList.contains('follow-right')) {
                    entry.target.classList.add('follow-right-animate');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that need animations
    document.querySelectorAll(
        '.services-procedures-heading, .services-procedures-img, '+ 
        '.additional-procedures-btn, .achieve-section-col, '+ 
        '.achieve-section-button, .timeline-item, '+ 
        '.follow-left, .follow-right'
    ).forEach(element => {
        observer.observe(element);
    });

    // Slider functionality for Services & Procedures section on mobile
    const sliders = document.querySelectorAll('.services-slider');
    sliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const items = slider.querySelectorAll('.slider-item');
        const prevButton = slider.querySelector('.slider-nav .prev');
        const nextButton = slider.querySelector('.slider-nav .next');
        let currentIndex = 0;

        function updateSlider() {
            const offset = -currentIndex * (50 + 10); // Adjust offset for two items per screen with spacing
            track.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : Math.ceil(items.length / 2) - 1;
            updateSlider();
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex < Math.ceil(items.length / 2) - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });
    });
});

// Animation Observer
document.addEventListener('DOMContentLoaded', function() {
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Services Section
                if (entry.target.classList.contains('services-procedures-heading')) {
                    entry.target.classList.add('services-heading-animate');
                } else if (entry.target.classList.contains('services-procedures-img')) {
                    entry.target.classList.add('services-img-animate');
                } else if (entry.target.classList.contains('additional-procedures-btn')) {
                    entry.target.classList.add('services-btn-animate');
                }
                // Achieve Section
                else if (entry.target.classList.contains('achieve-section-col')) {
                    entry.target.classList.add('achieve-col-animate');
                } else if (entry.target.classList.contains('achieve-section-button')) {
                    entry.target.classList.add('achieve-btn-animate');
                }
                // Milestone Section
                else if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('milestone-animate');
                }
                // Follow Section
                else if (entry.target.classList.contains('follow-left')) {
                    entry.target.classList.add('follow-left-animate');
                } else if (entry.target.classList.contains('follow-right')) {
                    entry.target.classList.add('follow-right-animate');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    // Observe all elements that need animations
    document.querySelectorAll(
        '.services-procedures-heading, .services-procedures-img, '+ 
        '.additional-procedures-btn, .achieve-section-col, '+ 
        '.achieve-section-button, .timeline-item, '+ 
        '.follow-left, .follow-right'
    ).forEach(element => {
        animationObserver.observe(element);
    });
});
