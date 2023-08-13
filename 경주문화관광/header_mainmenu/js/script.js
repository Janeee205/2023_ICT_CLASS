
$('.submenu-list').hide();
$('.mainmenu-list > li').hover(function () {
    $(this).find('.submenu-list').stop().slideDown(400);
    // $('.top-menu, .mainmenu').css('backgroundColor', '#FFFFFF');
}, function () {
    $(this).find('.submenu-list').stop().slideUp(400);
    // $('.top-menu, .mainmenu').css('backgroundColor', 'transparent');
});



const backgroundList = document.querySelector('.background-list');
const slideItem = document.querySelectorAll('.background-list li');
console.log('개수 ' + slideItem.length);
let currentSlide = 0

setInterval(() => {
    if (currentSlide < slideItem.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0
    }
    backgroundList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
    console.log(currentSlide);
}, 3000)



// let cur = 0;
// let len = $('.slide-item').length;

// function sliding(dir) {
//     cur = cur + dir
//     if (cur >= len) {
//         cur = 0
//     } else if (cur < 0) {
//         cur = len - 1;
//     }
//     $('.slide-item').eq(cur).siblings('.slide-item').stop().fadeOut();
// }

// sliding(0);
// let auto = setInterval(sliding, 5000, 1);
