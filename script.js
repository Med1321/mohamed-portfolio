
// Portfolio JavaScript

console.log("Mohamed Portfolio is running!");


// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const yourEmail = "your-email@example.com";

        const mailSubject = encodeURIComponent(subject);

        const mailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:" + yourEmail +
            "?subject=" + mailSubject +
            "&body=" + mailBody;

    });

}


// =================================
// 1. Navbar Scroll Effect
// =================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =================================
// 2. Back To Top Button
// =================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// 3. Reveal Sections On Scroll
// =================================

const revealElements = document.querySelectorAll(
    ".about-section, .skills-section, .projects-section, .contact-section"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});


// =================================
// 4. Dynamic Copyright Year
// =================================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// =================================
// 5. Close Mobile Navbar After Click
// =================================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(
                navbarMenu
            );

            bsCollapse.hide();

        }

    });

});
