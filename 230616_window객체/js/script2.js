
/*
var a = window.prompt("더하기 할 첫번째 값을 입력하시오.");
var b = window.prompt("더하기 할 두번째 값을 입력하시오.");

// prompt의 결과물은 string이다.
// number를 통해 숫자로 바꿔준다.

a = Number(a);
b = Number(b);

alert(a + b)
*/

// 7 나누기 3의 몫
// alert(parseInt(7/3));
// alert("나머지 = " + 7%3);



// ***** 최소, 최대값을 지정하고 그 사이의 임의의 정수를 추첨하는 함수 *****
function rand(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);  // 유용하게 쓰임

}

// alert(rand(1, 45));

// alert(   Math.floor(Math.random()*(50 - 3 + 1) + 3) );  // 내가 원하는 최대값은 곱하고, 최소값은 뺀다.



document.body.style.backgroundColor = "rgb( " + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")"