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
                    <li><a href="#">Buy Book</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
                <div class="header-sm-icons">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
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
                    <li><a href="#">Buy Book</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
                <div class="header-sm-icons">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
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
      <footer class="r-klan-footer" style="padding: 20px 0; text-align: center; background: #f4f4f4;">
        <div class="container">
          <p>&copy; 2026 R-Klan. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

// Define the custom tags
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);