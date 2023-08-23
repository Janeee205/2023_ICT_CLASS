
// 처음에 버튼 비활성화
$('#submit').attr('disabled', true);


$('.alert').on('click', function () {
  $('.alert').css('line-height', '0');

  if ($('#id').val().length == 0) {
    $('#id').focus();
  }
})


let countInput = $('input');
// console.log(countInput);
// console.log($('input')[1])
// console.log($('input').eq(1).val())

$('input').on('focusout', function () {

  // console.log($('#id').val())
  // console.log($('#pw').val())


  // 아이디와 비번 모두 값이 없다면
  // line-height 값 주고
  // 버튼 막기
  if ($('#id').val().length == 0 && $('#pw').val().length == 0) {
    $('.alert').css('line-height', '51px');
  }
  else if ($('#id').val().length || 0 && $('#pw').val().length == 0) {
    $('#submit').attr('disabled', true);
    $('.show-password').css('display', 'block')
  }
  else {
    $('.show-password').css('display', 'block')
    $('#submit').attr('disabled', false);
  }


  // console.log(item.val().length)

  /*
    for (let i = 0; i < countInput.length; i++) {
  
      if ($('input').eq(i).val().length == 0) {
        $('.alert').css('line-height', '51px');
        $('#submit').attr('disabled', true);
      }
  
  
      // 하나라도 0이 아니라면
      // else if (!$('input').eq(i).val().length == 0) {
      else if ($('#id').val().length == 0 || $('#pw').val().length == 0) {
        $('.alert').css('line-height', '0');
      }
      else {
        $('.show-password').css('display', 'block')
        $('#submit').attr('disabled', false);
      }
    }
      */
})

// 비밀번호 보이기/감추기
$('.show-password').on('click', function () {
  $('#pw').attr('type') === 'password' ? $('#pw').attr('type', 'text') : $('#pw').attr('type', 'password');
});


// 모드 바꾸기
$('.changeBg').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('dark');

  // if ($('.changeBg').hasClass('night')) {
  //   $('.wrapper').css('background', 'yellow')
  // }
})