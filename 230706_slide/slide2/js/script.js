// transform: translateX(-100vw);

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

let btnGroup = document.querySelector('.btn-group');

let slideList = document.querySelector('.slide-list');

console.log(slideList)

botton1 = () => {
  slideList.style.transform = 'translateX(0)';
}


// click이벤트 추가하는 방법
// 1. html onclick ="함수()";
// 2. 함수 생성 후, 이벤트대상.addEventListener('click', 함수)
// 3. 이벤트대상.addEventListener('click', function(){}) 콜백;



btn1.addEventListener('click', botton1);

btn2.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-100vw)';
})

btn3.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-200vw)';
})



// foreach 매개변수

// var transform1 = document.getElementsByTagName('span')[3].style.transform;

/*
btnGroup.foreach(btn){
  btn.style.transform = 'translateX(-'+ '00vw)'
}
*/