const wrapper = document.getElementById('wrapper');
// 글로벌 변수, 전역변수 : 스크립트 전체 영역을 쓴다는 의미
let count = 0;

const addSnow = () => {
  let size = (Math.random() * (5 - 1) + 1) + 'px';
  let blur = (Math.random() * (5 - 1) + 1) + 'px';
  const span = document.createElement('span');
  // snow에 snow라는 클래스 삽입

  span.classList.add('snow');


  //innerWidth 화면의 총 길이
  // 최대값과 최소값 사이의 수를 랜덤으로 생성하는 공식
  //Math.randon() * (최대값 - 최소값) + 최소값
  // mdn Math.randon()
  span.style.left = Math.random() * (window.innerWidth - 1) + 1 + 'px';
  span.style.width = size;
  span.style.height = size;
  span.style.opacity = Math.random();
  span.style.filter = `blur(${blur})`;
  // animation-delay
  span.style.animationDelay = (Math.random() * (10 - 1) + 1) + 's';
  span.style.animationDuration = (Math.random() * (12 - 2) + 2) + 's';


  // wrapper에 삽입
  wrapper.appendChild(span);

  if (count < 200) {
    count++;
    window.requestAnimationFrame(addSnow);
  }
}
window.requestAnimationFrame(addSnow);