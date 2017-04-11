jQuery(document).ready(function () {
    var menu = jQuery('#navigationBar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if (jQuery(window).scrollTop() >= origOffsetY) {
            jQuery('#navigationBar').addClass('navbar-fixed-top');
            jQuery('#navigationBar').addClass('bg-menu');
            jQuery('#humankind-logo').attr("src", "images/rsz_11fpart-logo.png");
            //$('.content').addClass('menu-padding');
        } else {
            jQuery('#navigationBar').removeClass('navbar-fixed-top');
            jQuery('#navigationBar').removeClass('bg-menu');
            jQuery('#humankind-logo').attr("src", "images/rsz_fpart-logo.png");
            //$('.content').removeClass('menu-padding');
        }
    }
    document.onscroll = scroll;
});