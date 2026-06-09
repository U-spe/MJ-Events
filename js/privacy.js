/**
 * MJ Events & Designs - Privacy Policy Reading Tracker Engine (privacy.js)
 */

document.addEventListener("DOMContentLoaded", () => {
    const privacySections = document.querySelectorAll(".privacy-section");
    const navigationLinks = document.querySelectorAll(".privacy-nav-link");

    // Dynamic Viewport Intersection Tracker
    const scrollObserverOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Optimizes active state transitions as sections pass mid-screen
        threshold: 0
    };

    const readingEngineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSectionId = entry.target.getAttribute("id");
                
                navigationLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${activeSectionId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, scrollObserverOptions);

    privacySections.forEach(section => readingEngineObserver.observe(section));

    // Smooth Navigation Controls
    navigationLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
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
