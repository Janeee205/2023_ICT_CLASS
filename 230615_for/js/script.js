
// 반복한 횟수 iteration count
// 시작값; 조건식; 증감식
// 조건식 확인 후, 조건 실행 후, 마지막에 증감식 실행
// i는 0으로 시작해서 반복할때마다 1씩 증가하며, i가 5보다 작은동안은 계속 반복한다.

/*
var x = "";
for(i=0; i<5; i++){
  x = x + "*";
}

alert(x);
*/

// n번 반복하는 for문 공식
// for(i=0; i<n; i++){

// }

// 0부터 100까지의 자연수를 모두 더한 값 구하기
sum = 0;
// i<101; 혹은 i<=100;
for (i = 1; i < 101; i++) {
  // 더할 수는 총 100개다
  // 수는 계속 증감한다.
  // i도 증감함
  sum += i;
}

// alert(sum);




//**********연습문제**********

// 5부터 10까지의 합
// 5+6+7+8+9+10

var sum = 0;

// for(i=5; i<=10; i++){
//   sum += i;
// }

// alert(sum);

for (i = 10; i >= 5; i--) {
  sum += i;
  // console.log("i의 값 + " + i + ",  sum의 값 + " + sum);
}
// alert(sum);


var t = "";
for (i = 10; i >= 5; i--) {
  if (i != 5) {
    t = t + i + "/";
    console.log("t의 값 + " + t + ",  i의 값 + " + i);
  } else {
    t = t + i;
  }
}

// alert(t);




// 이중 for문을 이용하여 피라미드 쌓기

// ㅁ
// ㅁㅁ
// ㅁㅁㅁ
// ㅁㅁㅁㅁ
// ㅁㅁㅁㅁㅁ

var pyramid = "";
for (i = 1; i <= 5; i++) { // 층수
  var floor = "";
  for (j = 1; j <= i; j++) {// 층"수"
    floor = floor + "ㅁ";
  }
  pyramid = pyramid + floor + "\n";
}

// alert(pyramid);



// 전체 9층이며, 각 층에는 10개의 가구가 존재한다.
// 호실 번호를 이중for문으로 만들기

// i는 i<=9까지
// j는 10까지




/*
var hosil=[[]];

for(i=1; i<=9; i++){
  for(j=1; j<=10; j++){
  //  i+"0"+j;   // j가 10보다 작을때
  //  i+j        // j가 10보다 작지않을때
    if(j<10){
      result[i-1][j-1] = i+"0"+j
    } else {
      result[i-1][j-1] = ""+i+j; // 앞에 쌍따옴표와 i를 더하면 문자열로써 더함
    }
  }
  
}

다시

*/

var result = "";
for (i = 1; i <= 10; i++) {
  if (i == 6) {
    break;
  } else {
    result = result + i + " ";
    console.log(result);
  }
}
// alert(result);



// 1 2 3 4 ... 100 까지 중 3의 배수는 삭제
var num = "";
for (i = 1; i <= 100; i++) {
  if(i % 3 == 0){
    continue; // 모른척 넘어가준다
  } else{
    num = num + i + " ";
  }
}

alert(num);





