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
                    <a href="shop.html" class="nav-button">Make Your Event</a>
                </div>
            </nav>
        `;
    }

    // 2. Inject Footer
    const footerContainer = document.getElementById("global-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="global-footer-inner container">
                
                <!-- Column 1: Brand Info -->
                <div class="footer-brand-col">
                    <div class="footer-logo">
                        MJ Events <span>& Designs</span>
                    </div>
                    <p class="footer-mission">Creating unforgettable moments, one celebration at a time.</p>
                    <p class="copyright-text">© 2026 MJ Events & Designs. All Rights Reserved. View Our README to see what we do with your information.</p>
                </div>

                <!-- Column 2: Client Support & Policies -->
                <div class="footer-links-col">
                    <h4 class="footer-heading">Studio Support</h4>
                    <ul class="footer-nav-list">
                        <li><a href="book.html">Make A Consultation</a></li>
                        <li><a href="cancel.html">Cancel Order</a></li>
                        <li><a href="terms.html">Terms Of Service</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                </div>

                <!-- Column 3: Newsletter Formspree Integration -->
                <div class="footer-newsletter-col">
                    <h4 class="footer-heading">Join The Guestlist</h4>
                    <p class="newsletter-subtext">Subscribe for exclusive design insights, structural inspiration, and studio updates.</p>
                    
                    <form action="https://formspree.io/f/mykajwzw" method="POST" class="footer-newsletter-form">
                        <input type="email" name="email" placeholder="Email Address" required class="newsletter-input">
                        <button type="submit" class="newsletter-submit-btn">Subscribe</button>
                    </form>
                </div>

            </div>
        `;
    }
});
