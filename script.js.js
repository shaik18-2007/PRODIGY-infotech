// Detect scroll event to change navbar style
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // If the page is scrolled down, add 'scrolled' class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
