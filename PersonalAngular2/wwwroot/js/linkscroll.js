(function(){
    $(document).on('click','.searchbychar', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        if ($(target).length){
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500);
        }
    });
})();