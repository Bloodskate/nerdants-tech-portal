$(window).scroll(function() {
    var nav = $('#navbarMain');
    var top = 50;
    if ($(window).scrollTop() >= top) {

        nav.addClass('navbar-fixed-top');

    } else {
        nav.removeClass('navbar-fixed-top');
    }
});
