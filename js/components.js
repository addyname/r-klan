class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="rklanHeader" class="r-klan-header">
        <div class="container">
          <div class="row">
            <div class="logo-col">
              <figure class="r-klan-logo">
                <a href="index.html"><img src="images/r-klan-logo.png" alt="R-Klan Logo" /></a>
              </figure>
            </div>

            <div class="desktop-nav">
              <div class="nav-col">
                <nav class="header-nav">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Our Cause</a></li>
                    <li><a href="reviews.html">Reviews</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>
                <div class="header-sm-icons">
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            
            <button class="nav-toggle" id="navToggle">
              <i class="fa-solid fa-bars"></i>
            </button>
            
            <div class="mobile-nav" id="mobileNav">
              <div class="nav-col">
                <nav class="header-nav">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Our Cause</a></li>
                    <li><a href="reviews.html">Reviews</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                  </ul>
                </nav>
                <div class="header-sm-icons">
                  <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    // Replace this with your actual footer HTML
    this.innerHTML = `
      <footer id="rKlanFooter" class="r-klan-footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <figure class="footer-logo">
              <a href="index.html"
                ><img src="images/r-klan-footer-logo.png" alt="R-Klan Logo"
              /></a>
            </figure>
            <div class="footer-sm-icons">
              <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/" target="_blank"#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="col">
            <nav class="footer-nav">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Our Cause</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div class="col">
            <p><a class="footer-address" href="https://www.google.com/maps" target="_blank">Address will come here,<br>Address will come here,</a></p>
            <p><a class="footer-ph-no" href="tel:123-456-7890" target="_blank">(123) 456-7890</a></p>
            <p><a class="footer-email" href="mailto:info@r-klan.com" target="_blank">info@r-klan.com</a></p>
          </div>
        </div>
        <div class="row">
          <p class="footer-copyright">© 2026 R-Klan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    `;
  }
}

// Define the custom tags
customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);
