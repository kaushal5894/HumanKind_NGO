//jQuery to collapse the navbar on scroll
jQuery(window).scroll(function() {
    if (jQuery(".navbar").offset().top > 50) {
        jQuery(".navbar-fixed-top").addClass("top-nav-collapse");
        jQuery(".navbar-fixed-top").addClass("bg-menu");
        jQuery('#humankind-logo').attr("src", "images/rsz_fpart-logo.png");
    } else {
        jQuery(".navbar-fixed-top").removeClass("top-nav-collapse");
        jQuery(".navbar-fixed-top").removeClass("bg-menu");
        jQuery('#humankind-logo').attr("src", "images/fpart-logo.png");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(function() {
    jQuery(document).on('click', 'a.page-scroll', function(event) {
        var jQueryanchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
