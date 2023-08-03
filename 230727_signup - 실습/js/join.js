// input focusin 되면 부모 .inputbox에 border-act class add

$('input').focusin(function () {
  $(this).parent('.inputbox').addClass('border-act')
})

$('input').focusout(function () {
  $(this).parent('.inputbox').removeClass('border-act')
})

let idvari = pwveri = pwchkveri = nameveri = birthveri = genderveri = phoneveri = addrveri = false;
let emailveri = true;



// 아이디
// .userid input에 focusout 됐을 때 입력된 값의 길이가 0이라면(조건)
// .userid warn에 내용을 작성(실행문)


$('.userid input').focusout(function () {
  let userId = $(this).val()

  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp = /^[a-z0-9]{5,8}$/;

  if (userId.length == 0) {
    $('.userid .warn').html('<span class="text-red"> 필수 정보입니다. </span>')
  } else if (!idExp.test(userId)) {
    $('.userid .warn').html('<span class="text-red"> 5~8자의 영문 소문자, 숫자만 사용 가능합니다. </span>')
  } else {
    idvari = true;
    $('.userid .warn').html('<span class="text-green"> 멋진 아이디네요! </span>.')
  }
})



// 비밀번호
// .userpw input focusout 됐을 때 입력된 값이 0이라면 (조건)
// .userpw warn에 내용을 작성(실행문)

$('.userpw input').focusout(function () {
  let userPw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자, 특수문자 포함

  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if (userPw.length == 0) {
    $('.userpw .warn').html('<span class="text-red"> 필수 정보입니다. </span>')
    $('.userpw .inputbox span').empty();
    $('.userpw .inputbox img').attr('src', 'images/m_icon_pw_step_01.png')
  } else if (!pwExp.test(userPw)) {
    $('.userpw .warn').html('<span class="text-red"> 8~20자 영문 대 소문자, 숫자,  특수문자를 사용하세요. </span>')
    $('.userpw .inputbox p').html('<span class="text-red"> 사용불가 </span>')
    $('.userpw .inputbox img').attr('src', 'images/m_icon_pw_step_10.png')
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
    $('.userpw .inputbox p').html('<span class="text-green"> 안전 </span>')
    $('.userpw .inputbox img').attr('src', 'images/m_icon_pw_step_04.png')
  }
})



// 비밀번호 재확인
// .userpw-chk input에  focusout 됐을때 입력된 값이 0이라면(조건)
// .userpw-chk .warn에 빨간색 글자로 필수 정보입니다. (실행문1)
// 우측 아이콘을 원래대로 변경

// .userpw input값이랑 .userpw-chk input이 같은가? (조건2)
// pwChkveri에 true
// .warn에 뜨는 경고메세지 화면에서 사라지게
// 우측 아이콘 이미지를 바꿔준다.

// 그렇지 않다면 else
// .userpw-chk .warn에 비밀번호가 일치하지 않습니다. (text-red)
// 우측 아이콘 이미지를 원래대로 변경(02)

$('.userpw-chk input').focusout(function () {
  let userPwChk = $(this).val();

  if (userPwChk.length == 0) {
    $('.userpw-chk .warn').html('<span class="text-red"> 필수 정보입니다. </span>');
    $('.userpw-chk .inputbox img').attr('src', 'images/m_icon_pw_step_02.png')
  } else if (userPwChk == $('.userpw input').val()) {
    pwchkveri = true;
    $('.userpw-chk .warn').empty();
    $('.userpw-chk .inputbox img').attr('src', 'images/m_icon_pw_step_07.png')
  } else {
    $('.userpw-chk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>');
    $('.userpw-chk .inputbox img').attr('src', 'images/m_icon_pw_step_02.png')
  }
})



// 이름
// .username input에  focusout 됐을때 입력된 값이 0이라면(조건)
// text-red 필수 정보입니다.

// else if
// 정규식 한글 최소 2~5글자 (조건2)
// text-red 한글로 2~5글자 사이로 작성하세요.

// else
// .warn에 들어있는 경고메세지를 지워준다.
// nameveri = true;


$('.username input').focusout(function () {
  let userName = $(this).val();
  let nameExp = /^[가-힣]{2,5}$/;

  if (userName.length == 0) {
    $('.username .warn').html('<span class="text-red"> 필수 정보입니다. </span>');
  } else if (!nameExp.text(userName)) {
    $('.username .warn').html('<span class="text-red"> 한글로 2~5글자 사이로 작성하세요. </span>');
  }
  else {
    $('.username .warn').empty();
  }

})



// 생년월일
// #year #month #date에 focusout 됐을 때
// #year의 value length가 4글자 아니라면 (조건1)
// .birth .warn에 text-red class '태어난 년도 4자리를 정확하게 입력하세요.'

// #month의 length가 0이라면 (조건2)
// .birth .warn에 text-red class '태어난 월을 선택하세요'

// #date월 length가 0이라면 (조건2)
// .birth .warn에 text-red class 태어난 일(날짜) 2자리를 정확하게 입력하세요.

// 년, 월, 일 값이 숫자가 아니라면 (조건4)
// .birth .warn text-red class '생년월일을 다시 확인해주세요.'

// 올 해 기준으로 나이가 100 초과라면 (조건5)
// .birth .warn text-red class '정말이세요?'


$('#year, #month, #date').focusout(function () {
  let year = $('#year').val();
  let month = $('#month').val();
  let date = $('#date').val();

  // 한국 날짜 및 시간 (한국 표준시)
  let now = new Date();
  // Date 객체의 getTime() 메서드는 1970년 1월 1일 00시 00분 00초 (UTC)
  // 세계표준시를 기준으로 경과한 밀리초를 반환한다.
  let nowStamp = now.getTime();
  // 현제 날짜 및 시간에서 현재 연도의 네자리 값을 변수에 할당
  now = now.getFullYear();

  // 사용자가 입력한 year, month, date값으로 Date 객체 생성
  let birth = new Date(year, month, date);
  birth = birth.getTime();




  if (year.length != 4) {
    $('.birth .warn').html('<span class="text-red"> 태어난 년도 4자리를 정확하게 입력하세요. </span>');
  } else if (month.length == 0) {
    $('.birth .warn').html('<span class="text-red"> 태어난 월을 선택하세요. </span>');

  } else if (date.length == 0 || date > 31 || date <= 0) {
    $('.birth .warn').html('<span class="text-red"> 태어난 일(날짜) 2자리를 정확하게 입력하세요. </span>');

  } else if (isNaN(year * month * date)) {
    // is not a number
    $('.birth .warn').html('<span class="text-red"> 생년월일을 다시 확인해주세요 </span>');
  } else if (now - year > 100) {
    $('.birth .warn').html('<span class="text-red"> 정말이세요? </span>');
    console.log(now - year > 100)

  } else if (nowStamp < birth) {
    $('.birth .warn').html('<span class="text-red"> 미래에서 오셨군요.^^ </span>');

  } else {
    $('.birth .warn').empty();
  }

})