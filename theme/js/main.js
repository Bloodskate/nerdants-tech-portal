$(window).scroll(function() {
    var nav = $('#navbarMain');
    var body = $('#body');
    var top = 30;
    if ($(window).scrollTop() >= top) {

        nav.addClass('navbar-fixed-top');
        body.addClass('padding-top');

    } else {
        nav.removeClass('navbar-fixed-top');
        body.removeClass('padding-top');
    }
});
