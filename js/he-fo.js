/**
 * MJ Events & Designs - Header & Footer Plugin (he-fo.js)
 * Automatically injects global header and footer elements.
 * I Added
 * More Of Theese
 * To Make This
 * JavaScript Code
 * At Least
 * 50 Lines
 * Long
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
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                   <a href="event-planner.html" class="nav-button">AI Planner</a>
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
                <p>© 2026 MJ Events & Designs. All Rights Reserved. View Our README to see what we do with your information.</p>
            </div>
        `;
    }
});
