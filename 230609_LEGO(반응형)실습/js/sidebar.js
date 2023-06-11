const gnbIconBtn = document.querySelector('.gnb-icon-btn');
const sideBar = document.querySelector('.sidebar');
const overLay = document.querySelector('.overlay');
const arrow = document.querySelector('.menu-title-arrow');
const li = document.querySelector('.li-wrapper');
const titleIcon = document.querySelector('.menu-title-wrapper i');
const rotateArrow = document.querySelector('.fa-rotate-180');

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
  titleIcon.style.color = 'yellow';
  arrow.innerHTML = "<i class='fa-solid fa-chevron-down fa-rotate-180'>";
})

function closeMenu(){
  li.style.display = 'none';
  titleIcon.style.color = 'gray';
  rotateArrow.innerHTML = 'arrow';
}

rotateArrow.addEventListener('click', closeMenu);