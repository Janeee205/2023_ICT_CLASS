// n초후에 코드 실행하는 함수 setTimeout()
/*
let count = 1;

let timer = setInterval(() => {
 count++;

 let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
 document.querySelector('.count').style.backgroundColor = randomColor;
 document.querySelector('.num').innerHTML = count;

 if(count == 10){
  clearInterval(timer);
  document.querySelector('.count').classList.add('is-active');
 }
 
}, 1000)
*/

let plusCount = 1;

let plusTimer = setInterval(function(){
  plusCount++;
  document.querySelector('.num').innerHTML = plusCount;
 let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
 document.querySelector('.count').style.backgroundColor = randomColor;

  // 조건문으로 count가 10이 되면
  // count plus 멈추고, 박스가 화면상에서 사라지게 한다.


  if(plusCount == 10){
    clearInterval(plusTimer);
    document.querySelector('.count').classList.add('is-active');
  }

}, 1000)