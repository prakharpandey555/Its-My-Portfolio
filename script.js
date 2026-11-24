/* =================================
   1. TYPING ANIMATION
================================= */

const typingElement = document.querySelector(".typing-text");

const roles = [
    "Developer",
    "Tech Enthusiast",
    "AI & ML Student",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

    }

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentRole.length) {

        deleting = true;
        speed = 1200;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =================================
   2. SCROLL REVEAL ANIMATION
================================= */

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .section-heading, .about-card, .detail-box, .education-card, .skill-card , .project-card, .contact-form, .contact-info"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =================================
   3. ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("main section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =================================
   4. BACK TO TOP BUTTON
================================= */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =================================
   5. DYNAMIC COPYRIGHT YEAR
================================= */

document.querySelector("#year").textContent =
    new Date().getFullYear();


console.log("Prakhar Pandey Portfolio Loaded Successfully!");