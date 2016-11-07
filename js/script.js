$(document).ready(function () {

    $(".hamburger").on("click", function () {
        $(".collapse").slideToggle("fast", "swing");
    });
    $(".btn-learn-more").click(function () {
        scrollTo(".portfolio");
    });
    $(".btn-portfolio").click(function () {
        scrollTo(".portfolio");
    });
    $(".btn-details").click(function () {
        scrollTo(".culture");
    });

    $(".collapse a").click(function (e) {
        e.preventDefault();
        if ($(".hamburger").css("display") == "block") {
            $(".collapse").hide();
        }
        scrollTo("." + $(this).attr("id"));
    });
    $(".collapse a").on("touchstart", function () {
        $(this).css("color", "#777777");
    });
    $(".collapse a").on("touchend", function () {
        $(this).css("color", "");
    });
    $(".btn, .footer-item a").on("touchstart", function () {
        $(this).css("filter", "brightness(80%)");
    });
    $(".btn, .footer-item a").on("touchend", function () {
        $(this).css("filter", "");
    });
    var isCollapsed = $(window).width() < 768;
    var didResize;
    var didScroll = false;

    $(window).resize(function (event) {
        didResize = true;
    });
    setInterval(function () {
        if (didResize) {
            if ($(window).width() > 767) {
                $('.collapse').removeAttr('style');
                $('.menu').removeAttr('style');
                isCollapsed = false;
            } else {
                isCollapsed = true;
            };
            didResize = false;
            return isCollapsed;
        }
    }, 250);
    setInterval(function () {
        if (isCollapsed) {
            $(window).on("scroll", function () {
                didScroll = true;
            });
        }
    }, 250);

    setInterval(function () {
        if (didScroll && isCollapsed) {
            didScroll = false;
            showMenuOnScrollTop();
        }
    }, 250);

});
var lastScrollTop = 0;
var delta = 20;
var navbarHeight = $('menu').outerHeight();


function showMenuOnScrollTop() {
    var scrollTop = $(this).scrollTop();

    if (Math.abs(lastScrollTop - scrollTop) <= delta)
        return;
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {

        $('.menu').slideUp(function () {
            $(".collapse").hide();
        });


    } else {
        if (scrollTop + $(window).height() < $(document).height()) {
            $('.menu').slideDown();
        }
    }
    lastScrollTop = scrollTop;

}

function scrollTo(destination) {
    $('html, body').animate({
        scrollTop: $(destination).offset().top
    }, 500);
};