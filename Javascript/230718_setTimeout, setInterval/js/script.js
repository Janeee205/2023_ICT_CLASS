// n초후에 코드 실행하는 함수 setTimeout()

setTimeout(function () {
  document.querySelector('.count').classList.add('is-active');
  clearInterval(rgbBgcChange);
  clearInterval(countdown);
}, 5000)

// n초마다 코드를 실행하고 싶을때 setInterval()
// setInterval(function(){}, 5000)

// setTimeout() : n초 후에 코드 실행
// setInterval() : n초 마다 코드를 실행하는 함수

// Hex(16진수) 코드로 랜덤 컬러 변경
// 16진수 hex값 앞에 #붙여서 사용
// Math.random() : 0이상 1미만의 부동 소수점 난수를 생성
// Math.round: 소수점 이하의 값을 반올림해서 정수로 변환
// 16진수로 표현하려면 0x를 표현하고자 하는 숫자 앞에 붙여준다.
// ffffff : RGB 255 255 255 (white) -> ff : 255
// toString(16) : 16진수로 변환

/*
let hexBgcChange = setInterval(function () {
  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  document.querySelector('.count').style.backgroundColor = randomColor;
}, 1000)
*/

// RGB 값으로 랜덤 컬러 변경
// 최솟값, 최댓값을 지정하고 그 사이에서 랜덤한 값(정수)을 만드는 함수
// rand라는 함수에 최소, 최댓값을 매개변수로 받는다.
// (max - min + 1) 최소, 최대 값 범위 내에서 랜덤한 값을 얻기 위함
// (255 - 0 + 1) + 0 = 256
// 1을 더해주지 않으면 255 미만이기 때문에 254까지 랜덤수를 가져온다.
// (20 - 10 + 1) + 10 = 21

function rand(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min)
}

let rgbBgcChange = setInterval(() => {
  let r = rand(0, 255);
  let g = rand(0, 255);
  let b = rand(0, 255);
  document.querySelector('.count').style.backgroundColor =
    'rgb(' + r + ',' + g + ',' + b + ')';

}, 1000);


let timer = 5;
let countdown = setInterval(() => {
  document.querySelector('.timer').innerHTML = timer;
  console.log(timer)
  timer--;
}, 1000)