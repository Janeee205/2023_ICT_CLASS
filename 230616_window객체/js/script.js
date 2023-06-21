// alert(window.innerWidth)

// setTimeout(해야할 일, 지연시간);  단 한번만 실행됨


/*
setTimeout(function(){  
  // alert("인사가 3초 늦었습니다. 안녕하세요!")
  // location.href="http://naver.com"; 강제로 현재 홈페이지의 주소를 바꿈(redirect 리다이렉트)
}, 3000)
*/

// setInterval(해야할 일, 지연시간);  여러번 실행됨

/*
setInterval(function(){
  document.body.innerHTML = document.body.innerHTML + "⭐🌟";
}, 500);
*/



// 시계만들기

function chktime() {
  var now = new Date();

  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var msec = now.getMilliseconds();

  document.getElementById("si").innerHTML = addzero(hour);
  document.getElementById("bun").innerHTML = addzero(min);
  document.getElementById("cho").innerHTML = addzero(sec);
  document.getElementById("mcho").innerHTML = addzero2(msec);

}

chktime();

// num이 한자리수일때마다 앞에 0을 붙임
// addzero에게 재료를 줌
function addzero(num) {
  {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
}

function addzero2(num) {
  if (num < 10) { // 한자리수 거르기
    return "00" + num;
  } else if (num < 100) { // 10부터 99사이
    return "0" + num;
  } else {
    return num;
  }
}

setInterval(chktime, 1);


// 날짜 뽑기

var now = new Date();
var year = now.getFullYear();
var month = addzero(now.getMonth()+1);
var date = addzero(now.getDate());
var day = now.getDay();
var dayText=["일", "월", "화", "수", "목", "금", "토"];

alert(year + "-" + month + "-"  + date + "-" + dayText[day]+"요일");

















// length는 총 개수가 몇개인지 알고싶을때 쓴다.
// alert(document.getElementsByTagName("span").length); 개수반환

// var arr = [1, 2, 3, 4, 5, "a", true];
var text = "집에 가고 싶다."
//alert(text.length);
// alert(text.split(" ").length); // split으로 단어 개수 반환

document.getElementById("si").style.fontSize = "5em"
document.getElementById("si").style.fontWeight = "5em"

// location.href = "http://naver.com";  // redirect 비추천함

document.getElementById("saero").onclick = function () {
  location.reload();
};



