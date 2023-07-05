const profile = document.querySelector('.profile-wrapper');
const dropdownMenu = document.querySelector('.dropdown-menu');

profile.addEventListener('click', function(){
  dropdownMenu.classList.toggle('is-active');
})