const popupcloseBtn = document.querySelector('.close-btn button');
const popup = document.querySelector('.popup');

// Javascript 기본함수
// n초 후에 코드실행
// setTimeout : 파라미터를 두개 받음
// 1. 콜백함수 / 2. ms 단위
// setTimeout(function(){}, 5000)

/*
popupcloseBtn.addEventListener('click', function(){
  setTimeout(function(){
    popup.style.display = 'none';
  }, 3000)
})
*/

setTimeout(function(){
  popup.style.display = 'none';
}, 3000)



// 쿠키를 이용한 시간 설정으로 팝업창을 일정시간동안 보이지 않게 하기
// 사용자가 팝업창을 그냥 닫았는지, '하루 열지 않기'에 체크를 하고 닫았는지 확인
// setCookie00() : 00시 기준으로 쿠키값 초기화
// setCookie24() : 24시간 후에 쿠키값 초기화
