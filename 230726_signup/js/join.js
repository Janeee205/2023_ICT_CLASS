

























// 정규식
let checkChar = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g;
let checkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
let checkNum = (/[^0-9]/g, '');
let checkPwd = /^[a-zA-Z0-9]+$/





$('#form2').on('submit', () => {
  if (!checkChar.test(idVal) || idVal.length < 6) {
    alert('아이디 다시 입력해라')
    $('.id input').focus()
    return false
  }

  if (!checkPwd.test(pwCheck) || pwCheck.length < 6) {
    alert('비밀번호 다시 입력해라')
    $('.id input').focus()
    return false
  }

  if (!checkEmail.test(emailVal)) {
    alert('이메일 다시 입력해라');
    $('.email input').focus()
    return false
  }
})






let idVal = $('.id input[type="text"]').val();
let pwCheck = $('.password input[type="password"]').val();
let emailVal = $('.email input[type="text"]').val();





$('.id input').on('focusout', function () {
  if (idVal.length == 0) {
    console.log("필수입력")
  }

  if (idVal.length < 5 || idVal.length > 20) {
    console.log("5~20")
  }

  else {
    alert('멋진 아이디네요!')
  }


})


