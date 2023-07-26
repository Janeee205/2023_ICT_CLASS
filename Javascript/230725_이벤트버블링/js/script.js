// open버튼 클릭시 overlay 한테 class add
// overlay, 닫기 버튼 누르면 class remove

// 이벤트 버블링현상
// e.target : 유저가 실제로 누른 요소
// e.stopPropagation(); : 이벤트 버블링 일어나는 것을 막아준다.
// -> 잘 사용하지 않는 이유는 다른 개발자가 필요한 이벤트를 구현해 둔 것 까지 막아버릴 수 있기 때문에 예상치 못한 에러를 발생시킬 확률이 높아진다.
// -> 실제 클릭된 요소한테만 click event가 적용되도록 구현
// e.preventDefault(); : 이벤트 기본 동작을 막아준다.


document.querySelector('.open-btn').addEventListener('click', function () {
  document.querySelector('.overlay').classList.add('is-active');
})

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.overlay').classList.remove('is-active');
})

document.querySelector('.overlay').addEventListener('click', function (e) {
  if (e.target == document.querySelector('.overlay')) {
    document.querySelector('.overlay').classList.remove('is-active');
  }
})


/*
$('.open-btn').on('click', function () {
  $('.overlay').addClass('is-active');
})

$('.close-btn').on('click', function () {
  $('.overlay').removeClass('is-active');
})

$('.overlay').on('click', function (e) {
  if($(e.target).is('.overlay')){
    $('.overlay').removeClass('is-active');
  }
})
*/
