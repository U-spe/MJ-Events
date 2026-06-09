/**
 * MJ Events & Designs - Header & Footer Plugin (he-fo.js)
 * Injects HTML structure and CSS dynamically.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Styles into the <head>
    const style = document.createElement('style');
    style.textContent = `
        /* Footer Container */
        #global-footer { background-color: #121212; color: #ffffff; padding: 80px 0 40px 0; font-family: 'Inter', sans-serif; }
        .global-footer-inner { display: grid; grid-template-columns: 1.5fr 1fr 1.2fr; gap: 60px; max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        /* Brand Column */
        .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 600; margin-bottom: 15px; }
        .footer-logo span { font-weight: 300; font-style: italic; color: #a3a3a3; }
        .footer-mission { font-size: 0.95rem; color: #a3a3a3; line-height: 1.6; margin-bottom: 30px; }
        .copyright-text { font-size: 0.75rem; color: #757575; }

        /* Links Column */
        .footer-heading { font-size: 0.95rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
        .footer-nav-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .footer-nav-list a { color: #a3a3a3; text-decoration: none; font-size: 0.9rem; }
        .footer-nav-list a:hover { color: #ffffff; }

        /* Newsletter Column */
        .newsletter-input { width: 100%; padding: 12px; background: #1a1a1a; border: 1px solid #333; color: white; border-radius: 4px; }
        .newsletter-submit-btn { width: 100%; padding: 12px; background: #ffffff; color: #121212; border: none; border-radius: 4px; font-weight: 600; cursor: pointer; margin-top: 10px; }
        
        @media (max-width: 900px) { .global-footer-inner { grid-template-columns: 1fr; } }
    `;
    document.head.appendChild(style);

    // 2. Inject Header
    const headerContainer = document.getElementById("global-header");
    if (headerContainer) {
        headerContainer.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <a href="index.html" class="logo">MJ Events <span>& Designs</span></a>
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

    // 3. Inject Footer
    const footerContainer = document.getElementById("global-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="global-footer-inner container">
                <div class="footer-brand-col">
                    <div class="footer-logo">MJ Events <span>& Designs</span></div>
                    <p class="footer-mission">Creating unforgettable moments, one celebration at a time.</p>
                    <p class="copyright-text">© 2026 MJ Events & Designs. All Rights Reserved.</p>
                </div>
                <div class="footer-links-col">
                    <h4 class="footer-heading">Studio Support</h4>
                    <ul class="footer-nav-list">
                        <li><a href="book.html">Make A Consultation</a></li>
                        <li><a href="cancel.html">Cancel Order</a></li>
                        <li><a href="terms.html">Terms Of Service</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-newsletter-col">
                    <h4 class="footer-heading">Join The Guestlist</h4>
                    <form action="https://formspree.io/f/mykajwzw" method="POST">
                        <input type="email" name="email" placeholder="Email Address" required class="newsletter-input">
                        <button type="submit" class="newsletter-submit-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        `;
    }
});
