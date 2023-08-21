// label 클릭시 
// 클릭된 label의 자식인 checkbox-img에 checked class toggle

$('label').on('click', function (e) {
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');


  // 클릭된 label의 자식인 checkbox-img에
  // checked라는 class가 포함되어 있다면
  // input type = "checkbox"의 속성 checked

  if ($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img.checked라는 클래스가 있을때
    $(this).children('input[type="checkbox"]').attr('checked', true)
  } else {
    $(this).children('input[type="checkbox"]').removeAttr('checked')
  }
})



// .total을 체크하면 .agree을 all check
// .total을 언체크하면 .agree을 전부 uncheck

// .total .checkbox-img가 .checked클래스를 가지고 있는지 확인
// .agree안 .checkbox-img에 checked class add
// .agree안 input checkbox를 ckecked ture

// .total .checked-img가 .checked class를 가지고 있지 않다면
// .agree안 .checkbox-img에 checked class remove
// .agree안 input checkbox를 ckecked false

$('.total label').on('click', function () {
  if ($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', true);
  } else {
    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').removeAttr('checked');
  }
})


// .agree label 안 checkbox가 모두 체크 상태라면 모두 동의 버튼도 체크로 변경
// 하나라도 체크되지 않은 값이 있다면 모두 동의 버튼 '체크' -> '언체크'
$('.agree label').on('click', function () {

  // 전체 체크박스 갯수
  let len = $('.agree .checkbox-img').length;
  // 체크 된 체크박수 갯수
  let chklen = $('.agree .checked').length;
  // 언체크
  let unchk = len - chklen;

  // console.log(len)
  // console.log('체크된 놈' + chklen)

  // 조건이 참이라면
  // .total label .checkbox-img checked class add
  // .total label input checkbox checked true

  // 조건이 참이 아니라면
  // .total label .checkbox-img checked class remove
  // .total label input checkbox checked removeAttr
  if (unchk == 0) {
    $('.total label .checkbox-img').addClass('checked');
    $('.total label input[type="checkbox"]').attr('checked', true);
  } else {
    $('.total label .checkbox-img').removeClass('checked');
    $('.total label input[type="checkbox"]').removeAttr('checked');
  }

  /*
if ((len - chklen) > 0) {
  $('.total label').find('.checkbox-img').removeClass('checked');
  $('.total label').find('input[type="checkbox"]').removeAttr('checked');
} else{
  $('.total label').find('.checkbox-img').addClass('checked');
  $('.total label').find('input[type="checkbox"]').attr('checked', true);
}
*/

})

// 확인버튼을 클릭했을때 필수사항을 모두 체크했는지
// 확인해서 모두 체크했으면 submit()

// 하나라도 체크하지 않은게 있다면 submit()을 막고
// .req-alert 텍스트를 보여준다.
// .req label submit



$('#submit').on('click', function (e) {
  let req = $('.req .checkbox-img').length;
  let chkreq = $('.req .checked').length;
  let unchk = req - chkreq;


  if (unchk == 0) {
    $('form1').submit();
  } else {
    e.preventDefault();
    $('.req-alert').css('visibility', 'visible');
  }
})

// 취소버튼 클릭시 네이버 사이트로 이동
$('#cancel').on('click', function () {
  location.href = 'https://www.naver.com/';
})