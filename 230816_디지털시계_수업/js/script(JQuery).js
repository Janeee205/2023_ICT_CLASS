let now = new Date();
let hr = now.getHours();


setInterval(() => {
  let now = new Date();

  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // 시간을 두자리수로 만들기
  // 1. 조건문

  /*
  if (hr >= 10) {
    hnum = hr;
  } else {
    hnum = '0' + hr;
  }

  if (min >= 10) {
    mnum = min;
  } else {
    mnum = '0' + min;
  }

  if (sec >= 10) {
    snum = sec;
  } else {
    snum = '0' + sec;
  }

  document.querySelector('.phone-time').innerHTML = `${hnum} : ${mnum} : ${snum}`
*/

  // 2. padStart() method
  hr = String(hr).padStart(2, '0');
  min = String(min).padStart(2, '0');
  sec = String(sec).padStart(2, '0');

  // document.querySelector('.phone-time').innerHTML = `${hr} : ${min} : ${sec}`
  // document.querySelector('.phone-time').innerHTML = hr + ' : ' + min + ' : ' + sec;
  $('.phone-time').html(hr + ' : ' + min + ' : ' + sec);

}, 1000);


// 시간에 맞춰서 배경 이미지, 버튼 활성화


let btnList = $('.btn-list li')
let back = $('.wrapper')

console.log(btnList);


if (hr >= 6 && hr < 12) {
  back.addClass('morning');
  btnList.eq(0).addClass('on');
} else if (hr >= 12 && hr < 16) {
  back.addClass('afternoon');
  btnList.eq(1).addClass('on');
} else if (hr >= 16 && hr < 19) {
  back.addClass('evening');
  btnList.eq(2).addClass('on');
} else {
  back.addClass('night');
  btnList.eq(3).addClass('on');
}


// 버튼 클릭시 배경이미지, 기타등등 변경
btnList.forEach(function (item) {
  // 각 li a태그의 html text를 backTxt변수에 저장
  let backTxt = item.querySelector('a').innerHTML;

  // 각 버튼에 클릭 이벤트 추가
  item.addEventListener('click', function (e) {
    // a태그 링크이동 막기
    e.preventDefault();

    // on class remove
    btnList.forEach(function (btn) {
      btn.classList.remove('on');
    })

    // 현재 클릭된 요소에 on class add
    item.classList.add('on');
    // 기존에 class가 없으면 add, 있다면 기존것을 우측 class name으로 변경
    back.className = backTxt;
  })
})