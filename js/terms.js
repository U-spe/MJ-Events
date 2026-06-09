/**
 * MJ Events & Designs - Legal Navigation Tracker (terms.js)
 */

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".terms-section");
    const navLinks = document.querySelectorAll(".terms-nav-link");

    // High-performance Intersection Observer to activate links on scroll
    const observerOptions = {
        root: null,
        rootMargin: "-15% 0px -65% 0px", // Precise viewport scanning bounding box
        threshold: 0
    };

    const legalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${targetId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => legalObserver.observe(section));

    // Elegant smooth scroll configuration for side tracking engine
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute("href");
            const targetElement = document.querySelector(targetHash);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
