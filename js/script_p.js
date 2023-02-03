$(function () {
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 100;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }

    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 2500,
        delay: 400,
    });
    ScrollReveal().reveal('.manifest-top', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.manifest-right', { delay: 350, origin: 'right' });
    ScrollReveal().reveal('.manifest-btn', { delay: 700, origin: 'right', interval: 200 });
    ScrollReveal().reveal('.manifest-left', { delay: 350, origin: 'left' });
    ScrollReveal().reveal('.manifest-bottom', { delay: 200, origin: 'bottom' });

    //  Stykey Header  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 2300) {
            $('.bg-design').addClass('change_bg');
        }
        else {
            $('.bg-design').removeClass('change_bg');
        }
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 2300) {
            $('.bg-design').addClass('bg-designx');
        }
        else {
            $('.bg-design').removeClass('bg-designx');
        }
    });
});