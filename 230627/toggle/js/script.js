// 토글컨테이너 변수에 담기
// 토글컨테이너를 클릭했을때 active클래스 추가/삭제
let check = false;

const toggle = document.querySelector('.toggle-container');
toggle.addEventListener('click', (e) => {
  // input이 자체적으로 갖고 있는 이벤트를 취소
  e.preventDefault();

  // toggle container를 클릭했을때 active클래스 추가/삭제
  toggle.classList.toggle('active');
  const input = e.currentTarget.querySelector('input');
  input.checked = check;


  // true, false 뒤집어줌
  check = !check;
  console.log(check);

})