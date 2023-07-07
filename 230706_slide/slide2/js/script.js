const buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

buttons.forEach((btn, index) => {

  btn.addEventListener('click', () => {

    buttons.forEach(btn => {
      btn.classList.remove('active')
    })

    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
    btn.classList.toggle('active');

  })
})