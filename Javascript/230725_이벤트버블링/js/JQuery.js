$('.open-btn').on('click', function(){
  $('.overlay').addClass('is-active');
})

$('.close-btn').on('click',function(){
  $('.overlay').removeClass('is-active');
})

$('.overlay').on('click',function(e){
  // e.target과 .overlay가 일치하면 코드진행
  if($(e.target).is('.overlay')){
    $('.overlay').removeClass('is-active');
  }
})