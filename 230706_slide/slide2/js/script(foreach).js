// forEach, paramete(매개변수)

// forEach method : Array(배열)에서 사용가능한 메서드
// 배열 안의 값을 순차적으로 함수에게 전달

let buttons = document.querySelectorAll('.btn-group button');
let slideList = document.querySelector('.slide-list');


// forEach 파라미터
// 1. 배열을 반복한 값



// buttons.forEach(function (btn, index) {
//   btn.addEventListener('click', function() {
//     slideList.style.transform = 'translateX(-' + index + '00vw)';
//   })
// })


buttons.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    let xValue = -index * 100 + 'vw';
    // slideList.style.transform = 'translateX(' + xValue + ')';
    slideList.style.transform = `translateX( ${xValue} )`;
    console.log(btn, index)
  })
})




