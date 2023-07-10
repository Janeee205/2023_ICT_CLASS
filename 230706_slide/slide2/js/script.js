const buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

buttons.forEach((btn, index) => {

  btn.addEventListener('click', () => {

    // buttons.forEach(btn => {
    //   btn.classList.remove('active')
    // })

// buttons라는 배열을 한 번 더 돌면서 모든 버튼이 가지고 있는 active class remove
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active')
    })

    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translateX(${xValue})`;
    // 클릭된 버튼에만 active class add
    btn.classList.toggle('active');

  })
})