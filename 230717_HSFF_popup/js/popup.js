const modalCloseBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal');

modalCloseBtn.addEventListener('click', function(){
  modal.style.display = 'none';
})