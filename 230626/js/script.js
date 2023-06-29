// 버튼을 변수에 담고
// 버튼을 눌렀을때
// 그 안의 텍스트 내용을 console.log로 출력

/*
const start = document.getElementById('start');
const stop = document.getElementById('stop');

start.addEventListener('click', () => {
  console.log(start.innerHTML);
})

stop.addEventListener('click',() =>{
  console.log(stop.innerHTML);
})
*/

// stop.addEventListener('click',(e) =>{
//   console.log(e.currentTarget.text);
// })




// title, plus, minus 버튼을 변수에 담고
// addEventListener를 각각 버튼마다 이벤트를 걸어주고,
// plus/minus 를 누를때 폰트크기를 증감시킨다. 

const title = document.getElementById('title');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const change = document.getElementById('change');
let index = 16;

plus.addEventListener('click', () => {
  title.style.fontSize = `${index}px`;
  index++;
  console.log(title.innerHTML);
})

minus.addEventListener('click', () => {
  title.style.fontSize = `${index}px`;
  index--;
  console.log(title.innerHTML);
})

change.addEventListener('click', () => {
  setTimeout(() => {


    if (title.classList.contains('active')) {
      title.classList.remove('active');
      console.log('active 삭제')
    } else {
      title.classList.add('active');
      console.log('active 추가')
    }

  }, 700);
})