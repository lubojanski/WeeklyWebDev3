$(document).ready(function () {

    $(".hamburger").on("click", function () {
        $(".collapse").slideToggle("fast", "swing");
    });

    $(".btn-learn-more").click(function () {
        scrollTo(".portfolio")
    });
    $(".btn-portfolio").click(function () {
        scrollTo(".portfolio")
    });
    $(".btn-details").click(function () {
        scrollTo(".culture")
    });

    $(".collapse > ul > li > a").click(function (e) {

        e.preventDefault();

        if ($(".hamburger").css("display") == "block") {
            $(".collapse").hide();
        }
        scrollTo("." + $(this).attr("id"));

    });
    var didResize;
    $(window).resize(function (event) {
        didResize = true;
    });
    setInterval(function () {
        if (didResize) {
            showNav();
            didResize = false;
        }
    }, 250);


    var didScroll;
    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

});


    var lastScrollTop = 0;
    var delta = 20;
    var navbarHeight = $('menu').outerHeight();


    function hasScrolled() {
        var scrollTop = $(this).scrollTop();

        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return;
        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {

            $('.menu').slideUp();
        } else {
            if (scrollTop + $(window).height() < $(document).height()) {
                $('.menu').slideDown();
            }
        }
        lastScrollTop = scrollTop;
    }

function showNav() {
    if ($(window).width() > 760) {
        $('.collapse').removeAttr('style');
    };

};
function scrollTo(destination) {
    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 500);
};