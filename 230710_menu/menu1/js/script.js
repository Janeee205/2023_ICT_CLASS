// .gnb li(메인메뉴)에 hover 했을 때
$('.gnb > li').hover(function () {
  // display block
  // 호버된 자신(this)밑에 있는 ul태그를 find.
  // slideDown(500ms)
  // this : .gnb > li들 중에 hover된 애
  $(this).find('ul').slideDown(500);
  $(this).find('a').addClass('on');
  //.gnb li(메인메뉴)에 hover 되지 않았을때
  // 마우스가 떠났을 때(moveleave)
  // 콜백함수 : 앞에 함수가 실행되고, 또 다른 명령을 수행

}, function () {
  // hover 되지 않았을때
  $(this).find('ul').slideUp(500);
  $(this).find('a').removeClass('on');
})