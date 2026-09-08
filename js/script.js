// ------------------------------------------------- Loader -------------------------------------------------
// Wait for the entire page (including images and stylesheets) to load
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");

  // Add the hidden class to trigger the CSS fade-out transition
  loader.classList.add("loader-hidden");

  // Optional: Remove the loader from the DOM completely after the transition (0.5s)
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
// ------------------------------------------------- Loader -------------------------------------------------

// ------------------------------------------------- Header Sticky -------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("rklanHeader");

  window.addEventListener("scroll", function () {
    // Dynamically get the header's height
    const headerHeight = header.offsetHeight;

    if (window.scrollY > 200) {
      header.classList.add("is-sticky");
      // Add padding to the body to replace the missing header space
      document.body.style.paddingTop = headerHeight + "px";
    } else {
      header.classList.remove("is-sticky");
      // Remove the padding when returning to the top
      document.body.style.paddingTop = "0";
    }
  });
});
// ------------------------------------------------- Header Sticky -------------------------------------------------

// ------------------------------------------------- Mobile Toggle -------------------------------------------------
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const toggleIcon = navToggle.querySelector("i");

navToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("active");

  if (isOpen) {
    toggleIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    toggleIcon.classList.replace("fa-xmark", "fa-bars");
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
const activeLink = document.querySelectorAll(
  ".r-klan-header .header-nav ul li a",
);

activeLink.forEach((link) => {
  if (link.href === window.location.href) link.classList.add("active");
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

// ------------------------------------------------- Testimonial Slider -------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelectorAll('.home-testimonial .row')[1];
  if (!track) return;
  
  const originalSlides = Array.from(track.querySelectorAll('.col'));
  const numOriginals = originalSlides.length;
  if (numOriginals === 0) return;

  // 1. Structure Initialization (Container > Viewport > Track)
  track.classList.add('slider-track');
  
  const container = document.createElement('div');
  container.className = 'slider-container';
  track.parentNode.insertBefore(container, track);

  const viewport = document.createElement('div');
  viewport.className = 'slider-viewport';
  
  // Nesting elements
  container.appendChild(viewport);
  viewport.appendChild(track);

  const nav = document.createElement('div');
  nav.className = 'slider-nav';
  nav.innerHTML = '<button class="prev-btn">&#10094;</button><button class="next-btn">&#10095;</button>';
  container.appendChild(nav);

  // 2. Clone Nodes for Seamless Infinite Loop
  originalSlides.forEach(slide => {
    track.insertBefore(slide.cloneNode(true), track.firstChild);
  });
  originalSlides.forEach(slide => {
    track.appendChild(slide.cloneNode(true));
  });

  const allSlides = Array.from(track.querySelectorAll('.col'));

  // 3. Variables
  let currentIndex = numOriginals; // Start at the first real slide
  let isAnimating = false;
  let isDragging = false;
  let startPos = 0, currentTranslate = 0, prevTranslate = 0;
  let autoPlayInterval;

  // 4. Core Logic
  function getActiveOffset() {
    return window.innerWidth >= 1024 ? 1 : 0; 
  }

  function getSlideWidth() {
    // Width of element + 30px (which strictly matches the CSS gap)
    return allSlides[0].offsetWidth + 30; 
  }

  function updateSliderPosition(animate = true) {
    const slideWidth = getSlideWidth();
    currentTranslate = -(currentIndex * slideWidth);
    prevTranslate = currentTranslate;

    track.style.transition = animate ? 'transform 0.4s ease-in-out' : 'none';
    isAnimating = animate;
    track.style.transform = `translateX(${currentTranslate}px)`;

    // Apply Active class
    allSlides.forEach(s => s.classList.remove('active-slide'));
    const activeTarget = currentIndex + getActiveOffset();
    if (allSlides[activeTarget]) allSlides[activeTarget].classList.add('active-slide');
  }

  // Seamless jump without animation at boundaries
  track.addEventListener('transitionend', () => {
    isAnimating = false;
    if (currentIndex < numOriginals) {
      currentIndex += numOriginals;
      updateSliderPosition(false);
    } else if (currentIndex >= numOriginals * 2) {
      currentIndex -= numOriginals;
      updateSliderPosition(false);
    }
  });

  // 5. Controls
  function moveNext() {
    if (isAnimating) return;
    currentIndex++;
    updateSliderPosition(true);
    resetAutoPlay();
  }

  function movePrev() {
    if (isAnimating) return;
    currentIndex--;
    updateSliderPosition(true);
    resetAutoPlay();
  }

  nav.querySelector('.next-btn').addEventListener('click', moveNext);
  nav.querySelector('.prev-btn').addEventListener('click', movePrev);

  // 6. Drag & Touch Logic
  function getPositionX(e) { return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX; }

  function touchStart(e) {
    if (isAnimating) return;
    isDragging = true;
    startPos = getPositionX(e);
    clearInterval(autoPlayInterval);
    track.style.transition = 'none';
  }

  function touchMove(e) {
    if (!isDragging) return;
    currentTranslate = prevTranslate + getPositionX(e) - startPos;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function touchEnd() {
    if (!isDragging) return;
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -50) currentIndex++;
    else if (movedBy > 50) currentIndex--;

    updateSliderPosition(true);
    startAutoPlay();
  }

  track.addEventListener('mousedown', touchStart);
  track.addEventListener('mousemove', touchMove);
  track.addEventListener('mouseup', touchEnd);
  track.addEventListener('mouseleave', touchEnd);
  track.addEventListener('touchstart', touchStart, { passive: true });
  track.addEventListener('touchmove', touchMove, { passive: true });
  track.addEventListener('touchend', touchEnd);

  // 7. Autoplay & Resize Reset
  function startAutoPlay() { autoPlayInterval = setInterval(moveNext, 3000); }
  function resetAutoPlay() { clearInterval(autoPlayInterval); startAutoPlay(); }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      track.style.transition = 'none';
      updateSliderPosition(false);
    }, 100);
  });

  setTimeout(() => {
    updateSliderPosition(false);
    startAutoPlay();
  }, 100);
});
// ------------------------------------------------- Testimonial Slider -------------------------------------------------