// input에 focusin 되면 부모 .inputbox에 border-act class add

$('input').focusin(function () {
  $(this).parent('.inputbox').addClass('border-act');
})

$('input').focusout(function () {
  $(this).parent('.inputbox').removeClass('border-act')
})


// 필수 항목인 모든 변수에 false 값 할당 후 각 해당 조건을 충족하면 true로 변경.
// 마지막 필수항목에 해당하는 변수가 모두 true라면 submit, 아니라면 제출되지 못하게 막는다.

let idvari = pwveri = pwchkveri = namevari = birthvari = gendervari = phonevari = addveri = false;
// 메일은 선택사항이므로 true
let emailveri = true;


// 아이디
// .userid input에 focusout 됐을 때 입력된 값의 길이가 0이라면 (조건)
// .userid .warn에 text-red class '필수 정보입니다.'

// else if(!정규식.test(userID))
// .user .warn에 text-red class
// '5~8자의 영문 소문자, 숫자만 사용 가능합니다.

// else (위 두 조건에 해당하지 않을 때)0이 아니고 정규식에 맞게 잘 작성
// idveri = true;
// .userid warn에 text-green class' 멋진 아이디네요!'