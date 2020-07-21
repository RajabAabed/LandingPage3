$(function () {
    new WOW().init();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,

            }
        }
    });
    var ss = 1;
    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 3216) {
            if (ss == 1) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                ss = 2;
            }
        }
    });


    $('.nav-link').on('click', function () {
        $('.navbar-nav.ml-auto').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
    });

})
