// 지역변수와 전역변수

//var Jueun = "김주은"

function DaeJeon() {
  var Jueun = "김주은"
}

//DaeJeon();
//alert(Jueun);

// function 위에 전역변수로 Jueun을 선언했기 때문에 함수 안에서도 사용가능
// function 안에 Jueun을 선언하면, 이는 지역변수이기 때문에 함수 밖에서 호출할 수 없음.
//    └─ Uncaught ReferenceError: Jueun is not defined


// prompt는 사용자가 입력한 값을 가져올 수 있다.
// 앞에 변수를 선언하여 값을 담는다.

/*
var birth = prompt("생년월일을 입력하셈. 예) 1995"); // 19950205, 950205, 95-02-05, 1995-0205
// alert(birth);
birth = parseInt(birth); // -> 숫자로 바꿔줌
var age = 2023-birth // parseInt를 이용해 숫자로 바꾸었기 때문에 계산 가능함

 alert("너의 나이는 " + age + "세 입니다.")
*/

/*
var lunch = confirm("밥 먹었니");
if(lunch){
  alert("배부르겠네");
} else alert("밥은 먹고 다녀라");
*/

function rand(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
  //                    └─ 0~1 사이의 랜덤한 수가 나옴
}

// rand(min: any, max: any): number  0~255 사이의 수

/*
setInterval(function(){
  var r = rand(0, 255);
  var g = rand(0, 255);
  var b = rand(0, 255);

  document.getElementsByTagName("body")[0].style.backgroundColor
  = "rgb("+r +","+ g +","+b+")";
}, 200);
*/


// function 떡볶이(떡, 소스){
//   떡을 익힌다.
//   소스를 넣는다.
//   섞으면서 졸인다.
//   접시에 담는다.
// }

// 떡볶이(밀떡, 고추장);
// 떡볶이(쌀떡, 간장);


/* 나머지 연산자 공부 */
// alert(7/2);

/* 증감 연산자 공부 */
// 지금까지 버튼을 누른 횟수 = 0;

// #btn이 눌릴때마다 이런 일을 할 것이다.
   // 버튼을 누를 횟수를 1 증가.
   // #num인 박스에 그 숫자를 입력한다.
// [바닐라 자바스크립트 문법]
var count = 0;
document.getElementById("btn").onclick = function(){
  count+=10;
  document.getElementById("num").innerHTML = count; // 누적된 숫자를 화면에 보여줌
}

// [제이쿼리 문법]
/*
var count = 0;
$("btn").click(function(){
  count++;
  $("#num").text(count);
});
*/


var a=3;
a = a+1; 
// a +=1;
// a++;
// 전부 같은 뜻

a += 3; // 3씩 증가