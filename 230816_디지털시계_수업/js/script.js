// setinterval로 계속 시간 갖고와야함
// 시간 가져오기
let hoursText = document.querySelector('.hours');
let minText = document.querySelector('.min');
let secText = document.querySelector('.sec');




// setInterval(getClock, 1000);


// 버튼 누를때 클래스 추가
let buttons = document.querySelectorAll('.buttons li');
let wrapper = document.querySelector('.wrapper');
let hand = document.querySelector('.right-contents');


setInterval(() => {
  let time = new Date();
  let hours = String(time.getHours()).padStart(2, 0); // 시
  let min = String(time.getMinutes()).padStart(2, 0); // 분
  let sec = String(time.getSeconds()).padStart(2, 0);  // 초
  hoursText.innerText = `${hours}`;
  minText.innerText = `${min}`;
  secText.innerText = `${sec}`;

  /*
  1. 06-11 까지 **morning** background-image
2. 12-15 까지 **afternoon** background-image
3. 16-19 까지 **evening** background-image
4. 20~ **night** background-image
*/
  if (6 <= hoursText.innerText <= 11) {
    wrapper.classList.add('morning');
    hand.classList.add('morning');
  } else {
    wrapper.classList.remove('morning');
    hand.classList.remove('morning');
  }
  if (12 <= hoursText.innerText <= 15) {
    wrapper.classList.add('');
    hand.classList.add('afternoon');
  } else {
    wrapper.classList.remove('afternoon');
    hand.classList.remove('afternoon');
  }
  if (16 <= hoursText.innerText <= 19) {
    wrapper.classList.add('evening');
    hand.classList.add('evening');
  } else {
    wrapper.classList.remove('evening');
    hand.classList.remove('evening');
  }
  if (20 <= hoursText.innerText) {
    wrapper.classList.add('night');
    hand.classList.add('night');
  } else {
    wrapper.classList.remove('night');
    hand.classList.remove('night');
  }




}, 1000);


buttons.forEach(function (btn) {



  btn.addEventListener('click', function () {
    btn.classList.add('active');

    // 버튼에 active 추가
    buttons.forEach(function (others) {
      if (btn != others && others.classList.contains('active')) {
        others.classList.remove('active');
      }
    })

    // 각각 클래스 추가
    if (btn.classList.contains('1')) {
      wrapper.classList.add('morning');
      hand.classList.add('morning');
    } else {
      wrapper.classList.remove('morning');
      hand.classList.remove('morning');
    }
    if (btn.classList.contains('2')) {
      wrapper.classList.add('afternoon');
      hand.classList.add('afternoon');
    } else {
      wrapper.classList.remove('afternoon');
      hand.classList.remove('afternoon');
    }
    if (btn.classList.contains('3')) {
      wrapper.classList.add('evening');
      hand.classList.add('evening');
    } else {
      wrapper.classList.remove('evening');
      hand.classList.remove('evening');
    }
    if (btn.classList.contains('4')) {
      wrapper.classList.add('night');
      hand.classList.add('night');
    } else {
      wrapper.classList.remove('night');
      hand.classList.remove('night');
    }
  })
})
