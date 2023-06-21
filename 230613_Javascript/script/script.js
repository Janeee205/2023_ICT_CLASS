/*  [자바스크립트의 특징]
1. 자바스크립트는 컴파일이 필요없는 인터프리터 언어이다.
2. 그 어떤 플랫폼이라도 브라우저만 있으면 정상 작동된다.
3. 작성한 순서대로 실행한다.
(다른 언어는 끝까지 읽고 실행)
*/


/*

주어;
주어.속성;
주어.주어.속성;

주어.함수();
주어.함수(재료);

주은;
주은.재산;
주은.왼팔.두께;
주은.신체조건.키 = 156;

주은.집에가라();

*/



document.getElementById('caution').addEventListener('click', function(){
  alert('ㅎㅇ \'나\'는 \n김\n주\n은');
})


// var 변수명, 최초 선언시에만 var 씀, 숫자나 문자, 무엇이든 담는다.
// = 이퀄은 "~을 담는다." 라는 뜻



/*

var a = "Hi!";
var b = 6;

var c = a+b;

// 문자열-숫자 = NaN(not a number)
alert(c);

*/


// var aaa = "You want my A to the Z But you won't 어림없지"; // 변수 선언
// aaa = 3; // 변수에 값을 대입
// alert(aaa) // 변수의 내용 확인


// window.close();




/* 배열에서 첫번째 값을 불러오려면 '0'을 호출해야한다.

array를 선언하고 값을 넣는 여러가지 방법이 있다.
          0번째, 1번째, 2번째, 3번째 (index number)
var arr = [20, 35, 40, 50];  // array

var arr = [] -> 배열에 미리 데이터를 넣지 않아도 됨.

var arr = Array(4);

var arr = [];
arr[0] = 20;
arr[1] = 35;

arr = 40;  <- undefined 나옴. 몇번째 배열에 넣는지 모름.

 alert(arr[0]);

*/


//  array에 꼭 숫자만 들어갈 필요가 없다.
/*
var JUEUN = [156, 68, "여자", false, null, -6];
alert("김주은의 키는 " + JUEUN[0] + " 입니다.")
alert("김주은의 몸무게는 " + JUEUN[1] + " 입니다.")
alert("김주은의 성별은 " + JUEUN[2] + " 입니다.")
alert("김주은의 시력은 " + JUEUN[5] + " 입니다.")
*/

// 객체형 변수를 만들때는 중괄호를 쓴다.
// var 변수명 = {속성형:속성값}
var JueunKim = { 
  height: 156, 
  weight: 68, 
  gender: "여자", 
  marriage: false, 
  house: null,
  friends: ["배소연", "김민정", "박선아", "이한솔"]
};

// alert("주은의 친구 : " + JueunKim.friends[2])



/*
var lotto = [];
for(i=0; i<6; i++){
  var rand= Math.floor(Math.random()*(45-1+1)+1);
  lotto[i] = rand;
}

alert(lotto);
*/


// 건물은 5층짜리
// 1~4층까지는 세개의 원룸이 있다.
// 5층은 주인세대 1세대만 있음.

// *****이중배열*****
var renthouse = [
  ["배주현", "강슬기", "손승완"],
  ["박수영", "김예림", "유지민"],
  ["김민정", "닝닝", "지젤"],
  ["김연아", "이영지", "Zendaya"],
  ["김주은"]
];

var floor; //층
var ho; //호실


// i는 '층', j는 '호실'로 이용한다.
for (i = 0; i < 5; i++) {
  // renthouse[1][2]; // 카리나 찾기
  for (j = 0; j < renthouse[i].length; j++) {// 0층을 수색할때 i호실이 몇개있는지
    if (renthouse[i][j] == "유지민") { // 배열의 값과 동일한 값이 나올때까지 반복한다.

      floor = i + 1;
      ho = j + 1;

      break;
    }
  }
}

// alert("유지민은 " + floor + "0" + ho + "호에 묵고있다.")