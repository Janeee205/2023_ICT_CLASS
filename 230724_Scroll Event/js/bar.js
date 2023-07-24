// progress bar
// 페이지 내에서 사용자가 현재 얼마만큼 읽었는지 그 값을 UI로 표현
// 스크롤 높이, 현재 스크롤 값, 화면 높이 값
// 스크롤바를 1% 내리면 bar width값도 1% 증가

window.addEventListener('scroll', function(){
  // html, css에서 bar를 어떤 위치에 어떻게 보여줄건지 디자인
  // window 스크롤 이벤트 추가


let 스크롤양 = document.documentElement.scrollTop;
let 높이 = document.documentElement.clientHeight;
let 스크롤높이 = document.documentElement.scrollHeight;

let progress = (스크롤양 / (스크롤높이 - 높이)) * 100;

console.log(progress)

document.querySelector('.line').style.width = progress + '%';

})