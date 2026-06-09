/**
 * MJ Events & Designs - Cancellation Engine (cancel.js)
 */

document.addEventListener("DOMContentLoaded", () => {
    const cancelForm = document.getElementById("order-cancel-form");
    const submitBtn = cancelForm ? cancelForm.querySelector(".cancel-submit-btn") : null;

    if (cancelForm && submitBtn) {
        cancelForm.addEventListener("submit", () => {
            // Immediate processing status feedback to prevent multi-submit bugs
            submitBtn.textContent = "Processing System Cancellation...";
            submitBtn.style.opacity = "0.8";
            submitBtn.style.pointerEvents = "none";
            submitBtn.style.background = "#555555";
        });
    }
});
