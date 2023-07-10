const slideList = document.querySelector('.slide-list');
const slideItems = document.querySelectorAll('.slide-list li')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
// console.log(slideItems.length);
let buttons = document.querySelectorAll('.dot-btn-group button')
console.log(buttons.length);


let currentSlide = 0;

nextBtn.addEventListener('click', function () {
  // slideItem 배열 length의 -1보다 값이 작을 때
  if (currentSlide < slideItems.length - 1) {
    currentSlide++;
    slideList.style.transform = `translateX(-${currentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function () {
  if (currentSlide > 0) {
    currentSlide--;
    slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  }
})

buttons.forEach(function(btn, index){
console.log(btn, index)


})