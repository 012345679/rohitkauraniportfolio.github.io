// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Scroll Reveal Animation
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Initial styling for animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});

revealOnScroll();


// Button Click Animation
const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
}


// Simple Typing Effect for Hero Subtitle
const subtitle = document.querySelector(".hero h2");
const text = subtitle.textContent;
subtitle.textContent = "";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();
