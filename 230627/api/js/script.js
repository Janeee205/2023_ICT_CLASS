/***********************************************************************
동기와 비동기
동기 : 순서대로 실행
  ex) 1번줄부터 마지막줄까지 실행
비동기 : 자신만의 실행순서를 갖고있음 (setInterval/setTimeout)
  ex) 서버에서 오는 데이터, 거리에 따라 전송속도가 달라 대기 시간이 필요하다
***********************************************************************/
/*
console.log('실행!');

setTimeout(() => {
  console.log('1초뒤에 실행!');
}, 1000)

setTimeout(()=> {
  console.log('3초뒤에 실행!');
}, 3000)

setTimeout(()=> {
  console.log('2초뒤에 실행!');
}, 2000)
*/

//promise 안에 약속(Promise)을 담음
// promise는 비동기처리 -> 동기처럼 순서를 기다리기 위해서
/*
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('응답을 받았습니다.')
  }, 2000)
})

// promise -> then 을 통해 데이터를 받아오거나, catch로 에러를 받아온다.
promise.then(result => console.log(result)).catch(reject => console(reject));
*/

//fetch - 서버로부터 데이를 받아올때 사용하는 API
let users = [];

// let todo = fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
let todo = fetch('https://jsonplaceholder.typicode.com/users')
todo
  .then(response => response.json())
  .then(json => {
    // user의 email주소를 출력
    // 이름 h2로
    json.forEach(item => {
      const name = document.createElement('p');
      // console.log(item);
      // img.src = item.url;
      // item. 뒤에 가져오고 싶은 데이터를 입력
      name.textContent = item.name;
      app.appendChild(name);
    })
  });

// console.log(posts);
const app = document.getElementById('app');

// posts.forEach(post => {
//   console.log(post);
// })