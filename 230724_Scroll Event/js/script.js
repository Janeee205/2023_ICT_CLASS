// AOS Animate On Scroll

// 1. 유저가 스크롤을 얼마나 내렸는지 파악
// window : 현재 html 페이지 (document랑 같은 개념)
// scroll 이벤트에는 관습적으로 window를 부착한다.


// 현재 페이지에서 얼마나 스크롤 했는지 px단위 : scrollY
// 세로 스크롤 : scrollY / 가로 스크롤 : scrollX
// console.log(window.scrollY + 'px');

// 강제로 스크롤바를 특정 위치로 이동 => window.scrollTo(x, y)
// console.log(window.scrollTo(0, 300));

// 현재 페이지에서 100px이상 스크롤 됐을 때
// nav 태그의 배경색 변경

window.addEventListener('scroll', function () {

  if (window.scrollY >= 100) {
    document.querySelector('nav').style.backgroundColor = 'red';
  } else {
    document.querySelector('nav').style.backgroundColor = '#a5e7ff';
  }



})

// 스크롤창이 끝까지 됐을때 alert창으로 '스크롤창!'
document.querySelector('.lorem').addEventListener('scroll', function () {
  //  scrollTop, clientHeight, scrollHeight
  // scrollTop : 스크롤된 양
  let 스크롤양 = document.querySelector('.lorem').scrollTop;

  // clientHeight : 박스가 화면에 보이는 높이값
  let 높이 = document.querySelector('.lorem').clientHeight;

  // scrollHeight : 박스에 스타일로 지정된 높이값이 아니라 스크롤 가능한 높이값
  let 스크롤높이 = document.querySelector('.lorem').scrollHeight;

  console.log(스크롤양, 높이, 스크롤높이);


    if(스크롤양 == 1023){
      alert('스크롤!');
    }
})

