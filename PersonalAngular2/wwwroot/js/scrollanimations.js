(function(){
 $(window).scroll(function () {      
        if ($(window).scrollTop() > 40) {
            $('.navbar-desktop').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 40) {
            $('.navbar-desktop').removeClass('navbar-fixed');
        }
    });
})();