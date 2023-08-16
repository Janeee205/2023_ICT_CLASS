


setInterval(() => {
  let now = new Date();

  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // 시간을 두자리수로 만들기
  // 1. 조건문
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




  // 2. padStart() method





}, 1000);