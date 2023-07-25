for(let i=0; i<$('.tab-item').length; i++){
  $('.tab-item').eq(i).on('click', function(){
    $('.tab-item').removeClass('is-active');
    $('.tab-content').removeClass('is-active');

    $(this).addClass('is-active');
    $('.tab-content').eq(i).addClass('is-active');
  })
}