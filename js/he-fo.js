/**
 * MJ Events & Designs - Header & Footer Plugin (he-fo.js)
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Header
    const headerContainer = document.getElementById("global-header");
    if (headerContainer) {
        headerContainer.innerHTML = `
            <nav class="navbar" id="main-nav">
                <div class="container">
                    <a href="#" class="logo">MJ Events <span>& Designs</span></a>
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

    // 2. Scroll Detection Logic
    const navbar = document.getElementById("main-nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Inject Footer
    const footerContainer = document.getElementById("global-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-logo">MJ Events <span>& Designs</span></div>
                    <p>Creating unforgettable moments, one celebration at a time.</p>
                    <p>© 2026 MJ Events & Designs. All Rights Reserved.</p>
                </div>
            </footer>
        `;
    }
});
