(function($){
 $(window).scroll(function () {      
        if ($(window).scrollTop() > 50) {
            $('.navbar-desktop').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 50) {
            $('.navbar-desktop').removeClass('navbar-fixed');
        }
    });
})(jQuery);