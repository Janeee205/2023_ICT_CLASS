// n초후에 코드 실행하는 함수 setTimeout()
let count = 5;

let timer = setInterval(() => {
 count--;

 let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
 document.querySelector('.count').style.backgroundColor = randomColor;
 document.querySelector('.num').innerHTML = count;

 if(count == 0){
  clearInterval(timer);
 }
 
}, 1000)
