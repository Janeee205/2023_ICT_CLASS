// dropdown-btn을 클릭 했을 때 dropdown-menu한테  active class 추가
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class remove
// toggle

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownMenu = document.querySelector('.dropdown-menu')

dropdownBtn.addEventListener('click', function (e) {
  e.preventDefault()
  // dropdownMenu.classList.toggle('active');

  // 조건문으로 toggle 기능 구현
  // (소괄호)안에 있는 조건이 true(참)일시 중괄호 안에 있는 코드 실행
  // 조건이 false일 경우, else 구문 실행
  // active로 현재 버튼의 활성화 상태를 확인
  // 활성화 상태라면 true이므로 if중괄호 코드가 실행
  // 활성화 상태가 아니라면 false이므로 else구문 실행

  if (this.active) {
    dropdownMenu.classList.remove('active');
  } else {
    dropdownMenu.classList.add('active');
  }


  // not연산자 !
  // 버튼이 비활성화 상태라면 활성상태로
  // 활성상태 -> 비활성화상태

  this.active = !this.active;
})

