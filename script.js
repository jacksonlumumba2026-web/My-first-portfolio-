function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth'
    });
}

function contactMe() {
    alert("Email me at: jacksonlumumba275@gmail.com");
}

function openProject() {
    alert("Project link coming soon!");
}

// Scroll animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".project-card").forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

// Dark mode
function toggleMode() {
    document.body.classList.toggle("light-mode");
}
