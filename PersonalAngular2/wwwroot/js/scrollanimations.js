(function(){
 $(window).scroll(function () {
        /* Check the location of each desired element */
        
        /*
        $('.article').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
        */
        
        if ($(window).scrollTop() > 40) {
            $('#nav-header').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 40) {
            $('#nav-header').removeClass('navbar-fixed');
        }
    });
})();