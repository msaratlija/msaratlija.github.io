$(document).ready(function() {
    navigation();
    applySmoothScrooling();
    smoothScroolingUrl();
    navigationCollapse();
});


var navigationPosition;
var navigationActiveLi;

function navigation() {

    navigationPosition = $('.scroll-down').offset().top;
    navigationActiveLi = $('#about').offset().top;

    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    $(window).on('scroll', function() {
        navigationOnScroll();
        var hashUrl = $('.nav .active a').attr('href');
        if (typeof hashUrl != 'undefined')
            window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
    });
    navigationOnScroll();
}

function navigationOnScroll() {
    if ($(window).scrollTop() > navigationPosition) {
        $('body').addClass('fixed');
    } else {
        $('body').removeClass('fixed');
    }

    if ($(window).scrollTop() <= navigationActiveLi) {
        $('ul.nav.navbar-nav>li').removeClass('active');
        $('#li-active').addClass('active');
    }

}

function applySmoothScrooling() {
    $("a.page-scroll").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            var $anchor = $(this);
            $('html, body').animate({
                //scrollTop: $(hash).offset().top
                scrollTop: $($anchor.attr('href')).offset().top
            }, 300, function() {
                event.preventDefault();
                window.location.hash = hash;
            });
        }
    });

}

function navigationCollapse() {
    $('.navbar li a').click(function(event) {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    });
}

function smoothScroolingUrl() {
    var hashUrl = window.location.hash;

    if ($("a[href=" + "'" + hashUrl + "'" + "]").length > 0) {
        $("a[href=" + "'" + hashUrl + "'" + "]").trigger('click');
    }
}