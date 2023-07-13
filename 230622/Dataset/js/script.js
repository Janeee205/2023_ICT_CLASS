const container = document.querySelectorAll('.container')

container.forEach(item => {
  // console.log(item);
  // item이 부모, container
  // container[0], container[1], container[2]
  // 부모에서 bar를 찾고,
  const bar = item.querySelector('.bar');
  // 부모에서 number를 찾고,
  const number = item.querySelector('.number');

  // bar.data-number -> 자바스크립트는 못알아듣는다.
  // bar.dataset.number -> 자바스크립트가 알아듣는다.
  // bar-number의 값을 가져와서 dataNumber 할당
  const dataNumber = bar.dataset.number;

  // number에 숫자 변경/삽입
  number.textContent = dataNumber;

  // bar 그래프의 width 값으로 퍼센트 표현
  bar.style.width = dataNumber + '%';


  // ------------ 애니메이션 ------------
  let index = 0;
  let interval;

  // interval에 setInterval 할당
  // setInterval은 정해진 시간마다 반복하는 메소드
  interval = setInterval(() => {
    index++;  // 1씩 증가
    if (index <= dataNumber) {  // dataNumber보다 작거나 같을때까지 반복한다.
      bar.style.width = index + '%';  // bar의 길이를 index  % 할당
      number.textContent = index;
    }
    // 더이상 작동하지 말라고 취소해줌
    // clearInterval(interval);
  }, 20)  // 0.02초마다 반복한다.
})

// console.log(bar.dataset.number);

/*
// data-number, dataset.number
const dataNumber = bar.dataset.number;
// number에 숫자 변경/삽입
number.textContent = dataNumber;
// bar 그래프의 width 값으로 퍼센트 표현
bar.style.width = dataNumber + '%';

console.log(dataNumber);
*/