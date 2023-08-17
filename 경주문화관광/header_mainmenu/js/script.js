// mainmenu
$('.submenu-list').hide();

$('.mainmenu-item').hover(function () {
    $(this).find('.submenu-list').stop().slideDown(400);
    $('.global-header').css('backgroundColor', '#fbfbfb');
    $('.global-header').css('transition', 'none');
    $('.top-menu, .top-menu a').css('color', '#000');
    $(".top-right-menu img").attr("src", "images/topIcon.png");
    $('.mainmenu-item>a').css('color', '#000');
    $('.mainmenu h1 span').css('color', '#000');
    $(".mainmenu h1 img").attr("src", "images/logo.png");
    $(".menu-buttons a, i").css('color', '#000');
    $(".menu-buttons img").attr("src", "images/home-black2.png");

}, function () {
    $(this).find('.submenu-list').stop().slideUp(200);
    $('.global-header').css('backgroundColor', 'transparent');
    $('.global-header').css('transition', '1000ms', 'ease-in-out');
    $('.top-menu, .top-menu a').css('color', '#fff');
    $(".top-right-menu img").attr("src", "images/topIcon_white.png");
    $('.mainmenu-item>a').css('color', '#fff');
    $('.mainmenu h1 span').css('color', '#fff');
    $(".mainmenu h1 img").attr("src", "images/white-logo.png");
    $(".menu-buttons a, i").css('color', '#fff');
    $(".menu-buttons img").attr("src", "images/home-white.png");
});


// 오늘 날짜 가져오기
let date = new Date();
let month = date.getMonth() + 1
let day = date.getDate()

// 요일넣기
let todayweek = date.getDay();
let week = ['일', '월', '화', '수', '목', '금', '토'];

let todayLabel = week[todayweek];

// '0' 붙여 두자릿수로 만들기
if (month >= 10) {
    mnum = month;
} else {
    mnum = '0' + month;
}

if (day >= 10) {
    dnum = day;
} else {
    dnum = '0' + day;
}

$('.month').html(mnum);
$('.date').html(dnum);
$('.week').html(todayLabel);


// list버전(overfliw hidden안됨)
$('.slider > .img-item:gt(0)').hide();
setInterval(() => {
    $('.slider .img-item:first-child').fadeTo(1000, 0)
        .next('.img-item').fadeTo(1000, 1)
        .end(1000).appendTo('.slider')
}, 5000);







// imgslide
// $('.slider > li:gt(0)').hide();
// setInterval(() => {
//     $('.slider li:first-child').fadeOut()
//         .next('li').fadeIn()
//         .end().appendTo('.slider')
// }, 1000);


// 이미지가 뒤늦게 커짐...
// $('.slider > img:gt(0)').hide();
// setInterval(() => {
//     $('.slider img:first-child').fadeOut("2000")
//         .next('img').fadeIn("2000")
//         .end(1000).appendTo('.slider')
// }, 5000);


// $('.slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     infinite: true,
//     // fade: true,
//     // cssEase: 'linear',
//     dots: false,
//     arrows: false,
//     variableWidth: true,
// });