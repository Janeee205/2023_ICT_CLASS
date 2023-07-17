// find() : 자식 밑 하위태그 찾을때
// children() : 자식요소만 찾을때

// ul을 따로 만들었다면
// index
// eq()

$('.main-menu li, .submenu-wrapper').hover(function () {
  // hover시 실행할 함수
  $('.submenu-wrapper').stop().slideDown(500);

}, function () { //mouseleave 되었을 때 실행할 함수
  $('.submenu-wrapper').stop().slideUp(500);

})


$('.submenu-list > li').hover(function () {
  let i = $(this).index();
  $('.main-menu').find('a').eq(i).addClass('on');

}, function () {
  let i = $(this).index();
  $('.main-menu').find('a').eq(i).removeClass('on');
})