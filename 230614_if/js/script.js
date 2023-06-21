// [if 조건에 따라 코드를 실행할지 말지
// 맑으면 true, 비오면 false
var weather = true;
if (!weather) {
  //  alert("우산챙겨!!!")
}

// 기온이 4도 이하인 경우 외투 챙기기
var temp = 23;
if (temp <= 4) {
  //  alert("외투챙겨!!!");
}

// [훈련생의 점수기준 판별 프로그램]
var score = 54;
if (score >= 60) {
  //  alert("합격!!!");
} else {
  //  alert("불합격!!!")
}

// [100분위 점수를 학점으로 변환하는 프로그램]
var jumsu = 81;
var hakjum;
if (jumsu >= 90) {
  hakjum = "A";
} else if (jumsu >= 80) {
  hakjum = "B";
} else if (jumsu >= 70) {
  hakjum = "C";
} else if (jumsu >= 60) {
  hakjum = "D";
} else {
  hakjum = "F";
}

// alert(hakjum);


// [and 조건을 위한 연습 : 졸업이 가능한가]
// 외국인의 경우 어학점수는 반영하지 않음
// 외국인의 경우 어학은 영어, 국어 중 하나의 점수가 60점 이상

var foreigner = true; // 내국인 : false, 외국인 : true
var english = 68; // 어학점수 60 이상
// var korean = 61;
var credit = 120; // 120학점 이상
var engineer = true; // 취득 : true, 미취득 : false

/*
if (credit >= 120 && engineer) {
  if (!foreigner && english >= 60 || korean >= 60) {
    alert("congratulations!!!");
  }

  else {
    alert("축하합니다! 드디어 졸업!!");
  }

} else {
  alert("졸업요건을 만족하지 못함...");
}
*/

/*
// 외국인과 내국인을 가르기
if (foreigner == true) {  // 조건절(condition)
  if (credit >= 120 && engineer)
    alert("congratulations!!!");
  else {
    alert("졸업요건을 만족하지 못함...");
  }
  // 외국인 졸업자격
} else {
  // 내국인 졸업자격
  if (english >= 60 && credit >= 120 && engineer)
    //     68 >= 60 &&    120 >= 120 && true
    alert("축하합니다! 드디어 졸업!!");
  else {
    alert("졸업요건을 만족하지 못함...");
  }
}
*/


/* [부동산 알아보기]
새 직장을 얻어서 직장 근처에 집을 얻고싶다.

주말마다 여가생활 해야함, 주차가 가능한 집이어야함 (필수)
직장으로부터 반경 10키로 이내에 있는 집이어야함 (필수)
엘레베이터 필수 (필수)

전용면적 20평 이상이거나 주변 상가가 반경 1키로 이내에 있었으면 좋겠다 (옵션)

*/
// var company = 14;     // 직장거리
// var parking = true;   // 주차여부
// var elevator = false; // 엘베여부
// var area = 21;        // 면적
// var shop = 0.8;       // 상가와의 거리

var house = [
  { // 배열의 첫번째 덩어리
    company: 14,
    parking: true,
    elev: false,
    area: 21,
    shop: 0.8
  },

  {
    company: 9,
    parking: true,
    elev: true,
    area: 24,
    shop: 1.5
  },

  {
    company: 2,
    parking: true,
    elev: false,
    area: 22,
    shop: 0.2
  },

  {
    company: 8,
    parking: true,
    elev: true,
    area: 21,
    shop: 0.5
  },

  {
    company: 12,
    parking: true,
    elev: true,
    area: 22,
    shop: 0.3
  },

];


/*
if (company <= 10 && parking && elevator && (area >= 20 || shop <= 1)) {
  alert("계약가능");
} else {
  alert("계약불가능");
}




if (house[3].company <= 10 && house[3].parking && house[3].elev && 
  (house[3].area >= 20 || house[3].shop <= 1)) {
  alert("계약가능");
} else {
  alert("계약불가능");
}
*/
