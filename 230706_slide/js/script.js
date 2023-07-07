// transform: translateX(-100vw);

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

let btnGroup = document.querySelector('.btn-group');

let slideList = document.querySelector('.slide-list');

console.log(slideList)

btn1.addEventListener('click', function(){
  slideList.style.transform = 'translateX(0)';
})

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