/**
 * =====================================================
 * MJ EVENTS & DESIGNS
 * Contact Form Interaction Logic (contact.js)
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Accordion Exclusive Open Logic (Optional UX enhancement: closing others when one opens)
    const accordions = document.querySelectorAll(".faq-accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", (e) => {
            // Only trigger if they clicked the summary
            if (e.target.tagName === "SUMMARY") {
                accordions.forEach((otherAccordion) => {
                    // Close all other accordions
                    if (otherAccordion !== accordion && otherAccordion.hasAttribute("open")) {
                        otherAccordion.removeAttribute("open");
                    }
                });
            }
        });
    });

    // Form Submission UX handling (Optional: prevent rapid double-clicks)
    const contactForm = document.getElementById("studio-contact-form");
    const submitBtn = contactForm.querySelector(".submit-action-btn");

    if(contactForm) {
        contactForm.addEventListener("submit", () => {
            // Temporarily change button state to show processing
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none";
            
            // Note: Formspree handles the redirect/success page automatically, 
            // so we just let the default form action continue.
            setTimeout(() => {
                // Revert button state after 3 seconds in case they use the back button
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = "1";
                submitBtn.style.pointerEvents = "auto";
            }, 3000);
        });
    }
});
