// Add your custom JavaScript code here

function playVideo() {
    document.querySelector('.video-thumbnail').style.display = 'none';
    const videoElement = document.getElementById('local-video');
    videoElement.style.display = 'block';
    videoElement.play();
}

function playDaVinciVideo() {
    const thumbnail = document.querySelector('.video-thumbnail');
    const video = document.getElementById('da-vinci-video');
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
}

function playVideo(videoId) {
    const video = document.getElementById(videoId);
    const thumbnail = video.previousElementSibling;
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
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

    // Removed Intersection Observer for Da Vinci Section Images
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fly-in-image");

    function checkVisibility() {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                img.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once to check if images are already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fade-in-image");

    function checkVisibility() {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                img.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once to check if images are already in view
});



document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.secondary-navbar .nav-item');

    navItems.forEach(navItem => {
        const link = navItem.querySelector('.nav-link');
        const modal = navItem.querySelector('.modal-container');
        const closeModal = modal?.querySelector('.close-modal');

        if (link && modal) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                modal.classList.toggle('active');
            });

            closeModal?.addEventListener('click', function () {
                modal.classList.remove('active');
            });

            document.addEventListener('click', function (e) {
                if (!modal.contains(e.target) && !link.contains(e.target)) {
                    modal.classList.remove('active');
                }
            });
        }
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

const ctx = document.getElementById('lineChart').getContext('2d');
let chartData = {
    "1Y": { labels: ["2020", "2021", "2022", "2023", "2024", "2025"], data: [8216, 14573, 26912, 17465, 22840, 31129], min: 3000, max: 33000, step: 4000 },
    "6M": { labels: ["Oct 2024", "Nov 2024", "Dec 2024", "Jan 2025", "Feb 2025", "Mar 2025"], data: [3800, 5280, 8750, 4800, 7600, 9980], min: 1000, max: 12000, step: 2000 },
    "3M": { labels: ["Jan 1-15", "Jan 16-31", "Feb 1-15", "Feb 16-28", "Mar 1-15", "Mar 16-31"], data: [1200, 1500, 2000, 3800, 1600, 4980], min: 1000, max: 6000, step: 1000 },
    "1M": { labels: ["Mar 1", "Mar 6", "Mar 11", "Mar 16", "Mar 21", "Mar 26"], data: [700, 580, 850, 800, 600, 980], min: 500, max: 1000, step: 100 }
};

let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: chartData["1Y"].labels,
        datasets: [{
            label: 'Procedures',
            data: chartData["1Y"].data,
            borderColor: '#737CF4',
            borderWidth: 2,
            pointBackgroundColor: '#737CF4',
            pointRadius: 5,
            fill: true,
            backgroundColor: 'rgba(115, 124, 244, 0.2)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                min: chartData["1Y"].min,
                max: chartData["1Y"].max,
                ticks: {
                    stepSize: chartData["1Y"].step
                },
                grid: { display: false }  // Disabled Y-axis gridlines
            },
            x: {
                grid: { display: false }  // Disabled X-axis gridlines
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Procedures: ${tooltipItem.raw}`;
                    }
                }
            }
        }
        
    }
});

function updateChart(timeframe) {
    lineChart.data.labels = chartData[timeframe].labels;
    lineChart.data.datasets[0].data = chartData[timeframe].data;
    lineChart.options.scales.y.min = chartData[timeframe].min;
    lineChart.options.scales.y.max = chartData[timeframe].max;
    lineChart.options.scales.y.ticks.stepSize = chartData[timeframe].step;
    lineChart.update();
}
