
const prevBtn = document.querySelector('.slide-arrow .prev');
const nextBtn = document.querySelector('.slide-arrow .next');
const slideList = document.querySelector('.slide-list');
const slideItem = document.querySelectorAll('.slide-list li');
const slideText = document.querySelector('.slide-text')

let currentSlide = 0

setInterval(() => {
  if (currentSlide > 0) {
    currentSlide--;
  }
  slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  slideText.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';

}, 3000)

prevBtn.addEventListener('click', () => {

  if (currentSlide > 0) {
    currentSlide--;
  }
  slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  slideText.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';

})



nextBtn.addEventListener('click', () => {
  if (currentSlide < slideItem.length - 1) {
    currentSlide++;
  }
  slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  slideText.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
})