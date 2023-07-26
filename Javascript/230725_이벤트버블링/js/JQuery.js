$('.open-btn').on('click', function () {
  $('.overlay').addClass('is-active');
})

$('.close-btn').on('click', function () {
  $('.overlay').removeClass('is-active');
})

$('.overlay').on('click', function (e) {
  // e.target과 .overlay가 일치하면 코드진행
  // if($(e.target).is('.overlay')){
  //   $('.overlay').removeClass('is-active');

  if (!$(e.target).is('.overlay')) {
    console.log('값이 다르다.')
  } else {
    $('.overlay').removeClass('is-active');
  }

  // console.log($(e.target));
  // console.log(e.target);

})


// 바닐라 JS와 JQuery에서 e.target이 동작하는 방식이 다르다.
// JS에서 e.target은 이벤트가 발생한 요소 자체를 가르킨다.

// JQuery에서는 이벤트가 발생한 요소를 객체로 반환한다.
// JQuery에서 객체를 비교할때 == 부등호가 아니라 .is() 메서드를 사용한다.
// $(선택요소).is(비교할 요소)
// 값을 확인한 후 Boolean true, false를 반환한다.
// != 같지 않다 / !를 사용해서 .is() 메서드의 결과를 부정

// JS의 == 부등호는 객체의 내용이 아닌 참조(화살표로 값을 가리킴)를 비교하므로
// 값이 같아도 false를 반환한다.
// 객체가 가지고 있는 실제 값(데이터), 객체가 저장되어 있는 메모리 주소(참조)
// 객체를 변수에 할당하면 그 변수에는 객체 값이 아니라 메모리 주소가 저장된다.

// 스프레드 연산자 ...
// 얕은 복사(shallow Copy), 깊은 복사(deep copy)
// 깊은 복사를 할 때에는 점 세개 ... 를 붙여야 한다.
// 구조분해 