document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Log clicked project
    document.querySelectorAll(".project-tile a").forEach(tile => {
        tile.addEventListener("click", function () {
            console.log(`Navigating to ${this.textContent}`);
        });
    });
});
