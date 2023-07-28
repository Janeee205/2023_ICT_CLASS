

document.querySelectorAll('label').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    let chImg = this.querySelector('.checkbox-img')

    chImg.classList.toggle('checked')


    if (chImg.classList.contains('checked')) {
      this.querySelector('input[type="checkbox"]').checked = true;
    } else {
      this.querySelector('input[type="checkbox"]').checked = false;
    }

  })
})






/*
 
$('.total label').on('click', function () {
  if ($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', true);
  } else {
    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').removeAttr('checked');
  }
})
 
*/



