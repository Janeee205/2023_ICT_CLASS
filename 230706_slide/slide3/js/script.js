const slideList = document.querySelector('.slide-list');
const arrows = document.querySelectorAll('.arrow-btn-group i');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let count = 1;

leftArrow.addEventListener('click', () => {
  count--;

  if (count < 0) {
    count = 2;
  }

  let xValue = -100 * count + 'vw';
  slideList.style.transform = `translateX(${xValue})`;
})

rightArrow.addEventListener('click', () => {
  count++;

  if (count > 2) {
    count = 0;
  }

  let xValue = -100 * count + 'vw';
  slideList.style.transform = `translateX(${xValue})`;
})

