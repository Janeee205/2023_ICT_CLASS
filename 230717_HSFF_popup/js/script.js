
/************************** 메인메뉴 **************************/
// ********** jQuery **********

/*
$('.gnb-main-item').hover(function(){
  // gnb-main-item에 hover 시, .sub class를 찾아서 slideDown();

  $(this).find('.sub').stop().slideDown();
  $(this).child('a').addClass('active');
}, function(){
  // hover 되지 않았을 때

  $(this).find('.sub').stop().slideUp();
  $(this).child('a').removeClass('active');
})
*/

// ********** vanilla JS **********

const gnbItems = document.querySelectorAll('.gnb-main-item');

gnbItems.forEach(function (item) {
  let subMemu = item.querySelector('.sub');

  item.addEventListener('mouseover', function () {
    subMemu.classList.add('active');
    this.querySelector('a').classList.add('active');
    this.querySelector('span').classList.add('is-active');
  })

  item.addEventListener('mouseleave', function () {
    subMemu.classList.remove('active');
    this.querySelector('a').classList.remove('active');
    this.querySelector('span').classList.remove('is-active');

  })


})

/************************** slideImg **************************/
// ********** vanilla JS **********

let slideList = document.querySelector('.slide-list');
let buttons = document.querySelectorAll('.slide-btn li');
// console.log(buttons);

buttons.forEach(function (btn, index) {
  // console.log(btn, index);

  btn.addEventListener('click', function () {

    let xValue = -index * 100 + 'vw';

    slideList.style.transform = `translateX(${xValue})`;
    
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active');
    })
    
    this.classList.add('active');
    
  })
})



/************************** sidebar **************************/
let sideBar = document.querySelector('.sidebar')
let openBtn = document.querySelector('.gnb-open-btn');
let closeBtn = document.querySelector('.sidebar-btn');

openBtn.addEventListener('click', function(){
  sideBar.classList.add('active');
})


closeBtn.addEventListener('click', function(){
  sideBar.classList.remove('active');
})
