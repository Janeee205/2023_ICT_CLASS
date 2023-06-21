/*
 var app = document.getElementById('app');
var app2 = document.getElementById('app2')
var text = "월요일 싫어"
var text2 = "수업중"
// console.log(app); // 잘 나오는지 확인
// app.innerHTML();
// app.innerText();
app.textContent = text;
app2.textContent = text2;

// 메모리에 변수를 만들어서 저장하고 거기에 텍스트 저장
// 최근은 var보다는 let을 많이 씀
for(let i=0; i<10; i++){
  console.log(i);
}
*/


// 버튼을 눌렀을때, 값이 증가한다.
// 버튼을 변수저장
const btnInc = document.getElementById('increase');
const btnDec = document.getElementById('decrease');
const content = document.getElementById('content');

// console.log(btnInc); 오류 없는지 확인
// number라는 변수에 id-number 저장
// const 는 상수이므로 변하지 않음

let originNum = 0;
// console.log(number);
// number id - element 변수저장
// btnInc 눌렀을때 숫자증가

btnInc.addEventListener('click', () => calculate(originNum, content, true));
// incNum = incNum + 1;
// number.textContent = incNum;

btnDec.addEventListener('click', () => calculate(originNum, content, false));

const money = 100;
// 함수 재활용 (중복되는 내용을 따로 빼기)
// const func = function(){} -es5방식l
// const func2 = () =>{}   // fat arrow function, 굳이 function을 안써도 됨, 리턴을 자동으로 함

// 함수정의
// function calculate(number, content, check) {
const calculate = (number, content, check) => {
  if (check === true) { // 자바스크립트로 두 값이 같은지 확인할때 === 씀
    // == 같다, === 타입체크 한다.
    // if(check) 윗줄과 동일
    number = number + money;
  } else {
    if (number > 0) {
      number = number - money; // number가 0 이하로 내려가지 않도록 함
    }
  }
  content.textContent = number + "원";
  originNum = number;
}

// 실행, 실행을 어디서 하고있는지 본다.
// calculate(incNum);


