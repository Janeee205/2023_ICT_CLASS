// for(let i=0; i<$('.tab-item').length; i++){
//   $('.tab-item').eq(i).on('click', function(){

//   })
// }

// 함수로 구현

function tabOpen(num) {
  $('.tab-item').removeClass('is-active');
  $('.tab-content').removeClass('is-active');

  $('.tab-item').eq(num).addClass('is-active');
  $('.tab-content').eq(num).addClass('is-active');
}

// 이벤트리스너 1개
document.querySelector('.tab-list').addEventListener('click', function (e) {

  // e.target 클릭된 요소가 버튼(tab-item) 0이라면
  // if (e.target == document.querySelectorAll('.tab-item')[0]) {
  //   tabOpen(0);
  // } else if ( e.target == document.querySelectorAll('.tab-item')[1]  ){
  //   tabOpen(1);
  // }

  // dataset을 써보자
  // html에 유저는 볼 수 없게 몰래 정보를 숨겨둘 수 있다.
  // data-자료이름="값"
  // dataset.자료이름
  // 지금 클릭한 버튼에 숨겨져있는 dataset.id를 tabOpen함수의 매개변수
  let num = e.target.dataset.id-1
  tabOpen(num);

  console.log(num);

})