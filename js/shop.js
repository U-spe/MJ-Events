/**
 * =====================================================
 * MJ EVENTS & DESIGNS
 * Shopify-Style Form Data & UI Aggregator (shop.js)
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Core Elements
    const tierRadios = document.querySelectorAll('input[name="base-tier"]');
    const addonCheckboxes = document.querySelectorAll('input[name="addons[]"]');
    
    // UI Output Targets
    const mainPriceDisplay = document.getElementById("main-price-display");
    const btnPriceDisplay = document.getElementById("btn-price");
    const tierNameLabel = document.getElementById("tier-name-label");
    
    // Formspree Hidden Inputs
    const hiddenTotalField = document.getElementById("hidden-total");
    const hiddenAddonField = document.getElementById("hidden-addons");

    // Thumbnail Gallery Image Swapping Logic
    const mainImage = document.getElementById("primary-gallery-image");
    const thumbnails = document.querySelectorAll(".thumb-btn");

    thumbnails.forEach(btn => {
        btn.addEventListener("click", function() {
            // Remove active state from all
            thumbnails.forEach(t => t.classList.remove("active"));
            // Add active state to clicked
            this.classList.add("active");
            // Swap Main Image source
            const imgTarget = this.querySelector("img").src;
            // Replacing URL params to get high-res for main image
            mainImage.src = imgTarget.replace("&w=200", "&w=1000"); 
        });
    });

    // Formatting utility for currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    };

    /**
     * E-Commerce Configuration Calculation
     */
    function updateCheckoutCart() {
        let currentTotal = 0;
        let selectedAddons = [];

        // 1. Get Variant Tier selection
        tierRadios.forEach(radio => {
            if (radio.checked) {
                currentTotal += parseInt(radio.getAttribute("data-base-cost"));
                // Update the visual variant label
                tierNameLabel.textContent = radio.value;
            }
        });

        // 2. Aggregate Upsell Checkboxes
        addonCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                currentTotal += parseInt(checkbox.getAttribute("data-addon-price"));
                selectedAddons.push(checkbox.value);
            }
        });

        // 3. Render Prices to UI
        const formattedTotal = formatCurrency(currentTotal);
        mainPriceDisplay.textContent = formattedTotal;
        btnPriceDisplay.textContent = formattedTotal;

        // 4. Update Hidden Fields for Formspree Email Push
        hiddenTotalField.value = formattedTotal;
        hiddenAddonField.value = selectedAddons.length > 0 ? selectedAddons.join(", ") : "No Add-ons Selected";
    }

    // Event Listeners for Variant & Addon Changes
    tierRadios.forEach(radio => radio.addEventListener("change", updateCheckoutCart));
    addonCheckboxes.forEach(checkbox => checkbox.addEventListener("change", updateCheckoutCart));

    // Force date inputs to trigger floating labels cleanly
    const dateInput = document.getElementById('event-date');
    if(dateInput) {
        dateInput.addEventListener('focus', () => {
            document.querySelector('label[for="event-date"]').classList.add('active-label');
        });
        dateInput.addEventListener('blur', () => {
            if(!dateInput.value) {
                document.querySelector('label[for="event-date"]').classList.remove('active-label');
            }
        });
    }

    // Initialize Math on Load
    updateCheckoutCart();
});
