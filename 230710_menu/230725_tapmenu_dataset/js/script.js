// n번째 li 클릭시 n번째 tab-content를 보여준다
// display none -> block

// 코드를 확장성 있게 작성해야함
for(let i=0; i<$('.tab-item').length; i++){
  $('.tab-item').eq(i).on('click', function(){
  $('.tab-item').removeClass("is-active");
  $('.tab-content').removeClass("is-active");

  $(this).addClass("is-active");
  $('.tab-content').eq(i).addClass("is-active");
  })
}


