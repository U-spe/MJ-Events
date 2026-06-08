/**
 * MJ Events & Designs - Header & Footer Plugin (he-fo.js)
 * Automatically injects global header and footer elements.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Header
    const headerContainer = document.getElementById("global-header");
    if (headerContainer) {
        headerContainer.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <a href="#" class="logo">
                        MJ Events <span>& Designs</span>
                    </a>
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="#" class="nav-button">Book Now</a>
                </div>
            </nav>
        `;
    }

    // 2. Inject Footer
    const footerContainer = document.getElementById("global-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="container">
                <div class="footer-logo">
                    MJ Events <span>& Designs</span>
                </div>
                <p>Creating unforgettable moments, one celebration at a time.</p>
                <p>© 2026 MJ Events & Designs. All Rights Reserved.</p>
            </div>
        `;
    }
});
