const gnbIconBtn = document.querySelector('.gnb-icon-btn');
const sideBar = document.querySelector('.sidebar');
const overLay = document.querySelector('.overlay');
const arrow = document.querySelector('.menu-title-arrow');
const li = document.querySelector('.side-menu-item');

gnbIconBtn.addEventListener('click',function(){
  sideBar.classList.add('is-active');
  overLay.classList.add('is-active');
})


overLay.addEventListener('click',function(){
  sideBar.classList.remove('is-active');
  overLay.classList.remove('is-active');
})


arrow.addEventListener('click',function(){
  li.style.display = 'block';
  document.querySelector('.menu-title-wrapper i').style.color = 'yellow';
  
})

function closeMenu(){
  li.style.display = 'none';
  document.querySelector('.menu-title-wrapper i').style.color = 'gray';
}

arrow.addEventListener('click', closeMenu);