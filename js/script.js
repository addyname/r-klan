// ------------------------------------------------- Header Sticky -------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("rklanHeader");

  window.addEventListener("scroll", function() {
    // Dynamically get the header's height
    const headerHeight = header.offsetHeight;
    
    if (window.scrollY > 200) {
      header.classList.add("is-sticky");
      // Add padding to the body to replace the missing header space
      document.body.style.paddingTop = headerHeight + 'px';
    } else {
      header.classList.remove("is-sticky");
      // Remove the padding when returning to the top
      document.body.style.paddingTop = '0';
    }
  });
});
// ------------------------------------------------- Header Sticky -------------------------------------------------

// ------------------------------------------------- Mobile Toggle -------------------------------------------------
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const toggleIcon = navToggle.querySelector("i");

navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    
    if (isOpen) {
        toggleIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        toggleIcon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Method 2
// const navToggle = document.getElementById("navToggle");
// const mobileNav = document.getElementById("mobileNav");
// const toggleIcon = navToggle.querySelector("i");

// navToggle.addEventListener("click", () => {
//   mobileNav.classList.toggle("active");

//   // Toggle both icon classes simultaneously
//   toggleIcon.classList.toggle("fa-bars");
//   toggleIcon.classList.toggle("fa-xmark");
// });

// ------------------------------------------------- Mobile Toggle -------------------------------------------------

// ------------------------------------------------- Active Link -------------------------------------------------
const activeLink = document.querySelectorAll('.r-klan-header .header-nav ul li a')

  activeLink.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
}); 
// ------------------------------------------------- Active Link -------------------------------------------------

// ------------------------------------------------- Hero Slider -------------------------------------------------
let slideIndex = 1;
let previousIndex = 1; // Tracks the last slide to determine direction
let slideInterval; // Variable to hold the autoplay timer
const autoPlayTime = 4000; // Time between slides in milliseconds (4000 = 4 seconds)

showSlides(slideIndex);
startAutoplay(); // Start the autoplay when the page loads

// Start the autoplay timer
function startAutoplay() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, autoPlayTime);
}

// Reset the autoplay timer when the user interacts
function resetAutoplay() {
  clearInterval(slideInterval);
  startAutoplay();
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  resetAutoplay(); // Reset timer on dot click
}

function changeSlide(n) {
  showSlides((slideIndex += n));
  // Note: resetAutoplay() is not called here directly because it's called
  // via dragEnd or currentSlide to avoid duplicate resets.
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".hero-slides img.slide");
  let dots = document.querySelectorAll(".slider-dots .dot");

  if (slides.length === 0) return;

  // Handle looping limits
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Figure out the direction
  let isNext = true;
  if (slideIndex === 1 && previousIndex === slides.length) {
    isNext = true; // Looping forward from last to first
  } else if (slideIndex === slides.length && previousIndex === 1) {
    isNext = false; // Looping backward from first to last
  } else if (slideIndex < previousIndex) {
    isNext = false; // Normal backward movement
  }

  // Remove ALL animation classes from all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide-next", "active-slide-prev");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  // Apply the correct directional class
  if (isNext) {
    slides[slideIndex - 1].classList.add("active-slide-next");
  } else {
    slides[slideIndex - 1].classList.add("active-slide-prev");
  }

  dots[slideIndex - 1].classList.add("active-dot");

  // Update previousIndex for the next time the function runs
  previousIndex = slideIndex;
}

/* DRAG AND SWIPE FUNCTIONALITY */

const sliderContainer = document.querySelector(".hero-slides");
let startPos = 0;
let isDragging = false;

function dragStart(e) {
  isDragging = true;
  clearInterval(slideInterval); // Pause autoplay while the user is dragging
  sliderContainer.classList.add("active-drag");
  startPos = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}

function dragEnd(e) {
  if (!isDragging) return;
  isDragging = false;

  sliderContainer.classList.remove("active-drag");

  const endPos = e.type.includes("mouse")
    ? e.pageX
    : e.changedTouches[0].clientX;
  const moveDistance = endPos - startPos;
  const threshold = 50;

  if (moveDistance < -threshold) {
    changeSlide(1); // Next
    resetAutoplay();
  } else if (moveDistance > threshold) {
    changeSlide(-1); // Previous
    resetAutoplay();
  } else {
    // If they clicked but didn't drag far enough, just resume the timer
    startAutoplay();
  }
}

sliderContainer.addEventListener("dragstart", (e) => e.preventDefault());

// Mouse Events
sliderContainer.addEventListener("mousedown", dragStart);
sliderContainer.addEventListener("mouseup", dragEnd);
sliderContainer.addEventListener("mouseleave", dragEnd);

// Touch Events
sliderContainer.addEventListener("touchstart", dragStart, { passive: true });
sliderContainer.addEventListener("touchend", dragEnd);

// ------------------------------------------------- Hero Slider -------------------------------------------------
