
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
