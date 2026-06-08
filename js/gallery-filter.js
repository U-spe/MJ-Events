/**
 * MJ Events & Designs - Interactive Gallery Filtering Module
 * Manages masonry grid layout transformations and real-time category parsing.
 */

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryCards = document.querySelectorAll(".matrix-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Shift the active styling highlight state across buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // 2. Identify the target event class selection parameters
            const selectedFilter = button.getAttribute("data-filter");

            // 3. Cycle structural states through elements instantly
            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (selectedFilter === "all" || cardCategory === selectedFilter) {
                    card.classList.remove("hidden");
                    card.classList.add("visible");
                } else {
                    card.classList.remove("visible");
                    card.classList.add("hidden");
                }
            });
        });
    });
});
