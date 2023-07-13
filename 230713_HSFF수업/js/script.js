// jQuery

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

// vanilla JS

const gnbItems = document.querySelectorAll('.gnb-main-item li');

gnbItems.forEach(function(item){
  let subMemu = item.querySelector('.sub');
  item.addEventListener('mouseover', function(){
    subMemu.classList.add('active');
    this.querySelector('a').classList.add('on');
  })
})