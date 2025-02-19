document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Hover effect for project tiles
    document.querySelectorAll(".project-tile").forEach(tile => {
        tile.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
        });
        tile.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
