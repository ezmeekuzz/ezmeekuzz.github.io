document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar_top');
        const navbarHeight = navbar.offsetHeight;
        if (window.scrollY > 350) {
            navbar.classList.add('fixed-top');
            document.body.style.paddingTop = navbarHeight + 'px';
        } else {
            navbar.classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });

    // Add smooth scrolling to all links
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
