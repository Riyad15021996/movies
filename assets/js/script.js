/* (function($) {
    'use strict' */


/*
========================================
    Preloader
========================================
*/
$(window).on('load', function() {
    $('#preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
});


/* responsive menu  */

jQuery(document).ready(function() {
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });
});


/* ===============================================
        AddClass menu js
   ===============================================
*/

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navigation-area").addClass("shrinkheader");
    } else {
        $(".navigation-area").removeClass("shrinkheader");
    }
});



/* 
=====================================================
    Start active menu
======================================================
*/

var sections = jQuery('section'),
    nav = jQuery('nav'),
    nav_height = nav.outerHeight();

jQuery(window).on('scroll', function() {
    var cur_pos = jQuery(this).scrollTop();

    sections.each(function() {
        var top = jQuery(this).offset().top - nav_height,
            bottom = top + jQuery(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            jQuery(this).addClass('active');
            nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
        }
    });
});

/* 
========================================
    SearchBar
========================================
*/

$(document).ready(function() {
    $('.search-open').on('click', function() {
        $('.search-bar').addClass('active');
        $('.search-close, .close-toggle-body').addClass('open');
    });
    $('.search-close, .close-toggle-body').on('click', function() {
        $('.search-bar').removeClass('active');
        $('.search-close, .close-toggle-body').removeClass('open');
    });
});

/* 
========================================
    Sidebar
========================================
*/

$(document).ready(function() {
    $('.cta-open').on('click', function() {
        $('.toggle-bar').addClass('active');
        $('.icon-close, .close-toggle-body').addClass('open');
    });
    $('.icon-close, .close-toggle-body').on('click', function() {
        $('.toggle-bar').removeClass('active');
        $('.icon-close, .close-toggle-body').removeClass('open');
    });
});


/* 
========================================
    Movies Tab
========================================
*/

$('ul.tabs li').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
});


/* 
========================================
    video
========================================
*/

$('.video-play-btn').magnificPopup({
    type: 'iframe',
});



/* 
========================================
    slick slide
========================================
*/


/* Hero Slider */

function mainSlider() {
    var BasicSlider = $('.banner-slider');
    BasicSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: false,
        asNavFor: '.banner-image-slider',
        arrows: true,
        prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
        nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false, } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();

$('.banner-image-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.banner-slider',
    dots: false,
    arrows: false,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        { breakpoint: 600, settings: { dots: false, arrows: false, slidesToShow: 3, } }
    ]
});




/* Category */

$('.category-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: false,
    arrows: true,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
});

/* upcoming */

$('.upcoming-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: false,
    arrows: true,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
});

/* Movies Slider */

$('.movie-slider-click').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.movie-image-slider',
    vertical: true,
    centerMode: true,
    focusOnSelect: true,
});
$('.movie-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.movie-slider-click',
    fade: true,
    arrows: false,
    dots: false,
});



/* Trailer */

$('.trailer-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: false,
    arrows: true,
    nextArrow: '<i class="las la-long-arrow-alt-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left"></i>',
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
});

/*
========================================
    Parallax
========================================
*/

jarallax(document.querySelectorAll('.parallax'), {
    speed: 0.3,
});

/* 
========================================
    Webseries
========================================
*/
$('.imageloaded').imagesLoaded(function() {
    // init Isotope
    var $grid = $('.webseries-grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // filter active class
    $('.filter-button-group button').on('click', function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    });
});


/*
    ========================================
    Scroll to top
    ========================================
    */
if ($('#scroll-top').length) {
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function() {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function(evt) {
            $('html, body').animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }
    scrollToTop();
}


/* 
========================================
    Wow Animation
========================================
*/

new WOW().init();



/* 
========================================
    console error Avoid
========================================
*/
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/* })(jQuery); */