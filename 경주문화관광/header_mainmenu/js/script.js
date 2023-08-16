$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    variableWidth: true,
});

// slide
$('.submenu-list').hide();
$('.mainmenu-list > li').hover(function () {
    $(this).find('.submenu-list').stop().slideDown(400);
    $('.top-menu, .mainmenu, .submenu-list').css('backgroundColor', '#FFFFFF');
}, function () {
    $(this).find('.submenu-list').stop().slideUp(400);
    $('.top-menu, .mainmenu, .submenu-list').css('backgroundColor', 'transparent');
});