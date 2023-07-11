/*
const gnbLi = document.querySelectorAll('.gnb > li');
const subMenu = document.querySelectorAll('.sub');
const gnbListA = document.querySelectorAll('.gnb > li > a')


gnbLi.forEach(function (li, index) {
  li.addEventListener('mouseover', function () {
    subMenu[index].style.display = "block";
    gnbListA[index].classList.add('on');
  })

  li.addEventListener('mouseleave', function () {
    subMenu[index].style.display = "none";
    gnbListA[index].classList.remove('on');
  })
})
*/

const menuItems = document.querySelectorAll('.gnb > li');

menuItems.forEach(function (item) {
  const subMenu = item.querySelector('.sub');

  item.addEventListener('mouseover', function () {
    subMenu.classList.add('active')
    this.querySelector('a').classList.add('on');
  })

  item.addEventListener('mouseleave', function(){
    subMenu.classList.remove('active');
    this.querySelector('a').classList.remove('on');
  })
})