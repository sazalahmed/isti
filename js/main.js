$(function () {

    "use strict";

    //=========MENU FIX JS=========   
    if ($('.tf__main_menu').offset() != undefined) {
        var navoff = $('.tf__main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.tf__main_menu').addClass('menu_fix');
            } else {
                $('.tf__main_menu').removeClass('menu_fix');
            }
        });
    }


    //=======COUNTER JS=======
    $('.counter').countUp();


    //*=====PORTFOLIO SLIDER===== 
    $('.portfilio_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    //*=====TESTIMONIAL SLIDER===== 
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    //*=====PORTFOLIO 2 SLIDER===== 
    $('.portfilio_2_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nextArrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left prevArrow"></i>',
    });


    //=====venobox js===== 
    $('.venobox').venobox();


    //=====barfiller js===== 
    $(document).ready(function () {
        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
    });


    //======menu search js======
    $(".mobile_menu_icon").on("click", function () {
        $(".tf__main_2").toggleClass("show");
    });


    //=========MENU FIX JS=========   
    if ($('.tf__main_2').offset() != undefined) {
        var navoff = $('.tf__main_2').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.tf__main_2').addClass('menu_fix_2');
            } else {
                $('.tf__main_2').removeClass('menu_fix_2');
            }
        });
    }



});
