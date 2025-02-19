// You can add any interactive features or JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is loaded and ready!');
    // Example: Add a smooth scroll to navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
