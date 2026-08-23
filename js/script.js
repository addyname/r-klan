// Mobile Toggle
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    // Select the FontAwesome <i> element inside the toggle button
    const toggleIcon = navToggle.querySelector('i'); 

    navToggle.addEventListener('click', function() {
        // 1. Toggle the dropdown menu
        mobileNav.classList.toggle('active');

        // 2. Change the icon based on the menu state
        if (mobileNav.classList.contains('active')) {
            // Menu is open: Change to 'X' icon
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            // Menu is closed: Change back to hamburger icon
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });
// Mobile Toggle

let slideIndex = 1;
let previousIndex = 1; // Tracks the last slide to determine direction

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".hero-slides img.slide");
  let dots = document.querySelectorAll(".slider-dots .dot");
  
  if (slides.length === 0) return;

  // Handle looping limits
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  
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

/* =========================================
   DRAG AND SWIPE FUNCTIONALITY
   ========================================= */

const sliderContainer = document.querySelector(".hero-slides");
let startPos = 0;
let isDragging = false;

function dragStart(e) {
  isDragging = true;
  sliderContainer.classList.add('active-drag');
  startPos = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function dragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  
  sliderContainer.classList.remove('active-drag');
  
  const endPos = e.type.includes('mouse') ? e.pageX : e.changedTouches[0].clientX;
  const moveDistance = endPos - startPos;
  const threshold = 50;

  if (moveDistance < -threshold) {
    changeSlide(1); // Next
  } else if (moveDistance > threshold) {
    changeSlide(-1); // Previous
  }
}

sliderContainer.addEventListener('dragstart', (e) => e.preventDefault());

// Mouse Events
sliderContainer.addEventListener('mousedown', dragStart);
sliderContainer.addEventListener('mouseup', dragEnd);
sliderContainer.addEventListener('mouseleave', dragEnd); 

// Touch Events
sliderContainer.addEventListener('touchstart', dragStart, { passive: true });
sliderContainer.addEventListener('touchend', dragEnd);