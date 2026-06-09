/**
 * MJ Events & Designs - Consultation System Manager (book.js)
 */

document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("event-date");
    const bookingForm = document.getElementById("consultation-booking-form");
    const submitButton = bookingForm ? bookingForm.querySelector(".booking-submit-btn") : null;

    if (dateInput) {
        // Generates an localized ISO string token to calculate calendar minimum validation bounds
        const targetDate = new Date();
        const tomorrow = new Date(targetDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const targetISOString = tomorrow.toISOString().split("T")[0];
        dateInput.setAttribute("min", targetISOString);
    }

    if (bookingForm && submitButton) {
        bookingForm.addEventListener("submit", () => {
            // UI confirmation to manage user expectations on Formspree redirect routes
            submitButton.textContent = "Processing Blueprint Registration...";
            submitButton.style.opacity = "0.75";
            submitButton.style.pointerEvents = "none";
        });
    }
});
