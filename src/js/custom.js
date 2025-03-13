// Add your custom JavaScript code here

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
});
