document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Clickable project tiles
    document.querySelectorAll(".project-tile").forEach(tile => {
        tile.addEventListener("click", function () {
            const link = this.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
    });
});
