
const prevBtn = document.querySelector('.slide-arrow .prev');
const nextBtn = document.querySelector('.slide-arrow .next');
const slideList = document.querySelector('.slide-list');
const slideItem = document.querySelectorAll('.slide-list li');
const slideText = document.querySelector('.slide-text');
const buttons = document.querySelectorAll('.slide-dot-btn button');

let currentSlide = 0

setInterval(() => {
  if (currentSlide < slideItem.length - 1) {
    currentSlide++;
  }

  slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  slideText.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  btnbgcChange();
}, 5000)


btnbgcChange = () => buttons.forEach((btn, index) => {
  if (index == currentSlide) {
    btn.classList.add('is-active')
  } else {
    btn.classList.remove('is-active')
  }
})


prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  }
  slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  slideText.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  btnbgcChange();
})



nextBtn.addEventListener('click', () => {
  if (currentSlide < slideItem.length - 1) {
    currentSlide++;
  }
  slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  slideText.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)';
  btnbgcChange();
})