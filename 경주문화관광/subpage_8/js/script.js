

/*********************
 * 회원가입 폼 script *
 ********************/


let idveri = pwveri = pwchkveri = nameveri = birthveri = genderveri = phoneveri = addrveri = emailveri = false;
// let emailveri = true;

// Essention Infomation
let essenInfo = '<span class="text-red"> 필수 정보입니다. </span>';


// 아이디
document.querySelector('.userid input').addEventListener('focusout', function () {
  let userId = this.value;
  let idExp = /^[a-z0-9]{5,8}$/;
  let idWarn = document.querySelector('.userid .warn');

  if (userId.length == 0) {
    // 필수 정보입니다.
    idWarn.innerHTML = essenInfo
  } else if (!idExp.test(userId)) {
    // 정규식에 맞지 않을때
    idWarn.innerHTML = '<span class="text-red"> 5~8자의 영문 소문자, 숫자만 사용 가능합니다. </span>';
  } else {
    idveri = true;
    idWarn.innerHTML = '<span class="text-green"> 멋진 아이디네요! </span>';
  }
})


// 비밀번호
let userPw = document.querySelector('.userpw input');

userPw.addEventListener('focusout', function () {
  let userPwVal = userPw.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;
  let pwWarn = document.querySelector('.userpw .warn');
  let pwText = document.querySelector('.userpw .pw-text');
  let pwImg = document.querySelector('.userpw .pw-img');

  if (userPwVal.length == 0) {
    pwWarn.innerHTML = essenInfo;
    pwText.innerHTML = '';
    pwImg.src = 'images/signup/m_icon_pw_step_01.png';
  } else if (!pwExp.test(userPwVal)) {
    pwWarn.innerHTML = '<span class="text-red"> 8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요. </span>';
    pwText.innerHTML = '<span class="text-red"> 사용불가 </span>';
    pwImg.src = 'images/signup/m_icon_pw_step_10.png';
  } else {
    pwveri = true;
    pwWarn.innerHTML = '';
    pwText.innerHTML = '<span class="text-green"> 안전 </span>';
    pwImg.src = 'images/signup/m_icon_pw_step_04.png';
  }
})


// 비밀번호 재확인
document.querySelector('.userpw-chk input').addEventListener('focusout', function () {
  let userpwChk = this.value;
  let pwChkWarn = document.querySelector('.userpw-chk .warn');
  let pwChkText = document.querySelector('.userpw-chk .pw-text');
  let pwChkImg = document.querySelector('.userpw-chk .pw-img');

  if (userpwChk.length == 0) {
    pwChkWarn.innerHTML = essenInfo;
    pwChkText.innerHTML = '';
    pwChkImg.src = 'images/signup/m_icon_pw_step_01.png';
  } else if (userpwChk == userPw.value) {
    pwchkveri = true;
    pwChkWarn.innerHTML = '';
    pwChkText.innerHTML = '<span class="text-green"> 안전 </span>';
    pwChkImg.src = 'images/signup/m_icon_pw_step_07.png';
  } else {
    pwChkWarn.innerHTML = '<span class="text-red">비밀번호가 일치하지 않습니다.</span>';
    pwChkImg.src = 'images/signup/m_icon_pw_step_02.png';
  }
})


// 이름
document.querySelector('.username input').addEventListener('focusout', function () {
  let userName = this.value;
  let nameExp = /^[가-힣]{2,5}$/;
  let nameWarn = document.querySelector('.username .warn');

  if (userName.length == 0) {
    nameWarn.innerHTML = essenInfo;
  } else if (!nameExp.test(userName)) {
    nameWarn.innerHTML = '<span class="text-red"> 한글로 2~5글자 사이로 작성하세요. </span>';
  } else {
    nameveri = true;
    nameWarn.innerHTML = '';
  }
})

// 이메일
// 다시 수정
document.querySelector('.usermail input').addEventListener('focusout', function () {
  let usermail = this.value;
  let mailSelect = document.querySelector('.usermail select');
  let mailSelectVal = mailSelect.options[mailSelect.selectedIndex].value;

  console.log('mailSelect');

  let mailWarn = document.querySelector('.usermail .warn');
  let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  if (usermail == 0) {
    mailWarn.innerHTML = essenInfo;
  } else if (!mailExp.test(usermail)) {
    mailWarn.innerHTML = '<span class="text-red"> 이메일 주소를 다시 확인 해주세요. </span>';
  } else {
    emailveri = true;
    mailWarn.innerHTML = '';
  }

})







/********************
 * 우편번호 api 연결 *
 *******************/

function sample6_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ''; // 주소 변수
      var extraAddr = ''; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === 'R') {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== '') {
          extraAddr = ' (' + extraAddr + ')';
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample6_extraAddress").value = extraAddr;

      } else {
        document.getElementById("sample6_extraAddress").value = '';
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('sample6_postcode').value = data.zonecode;
      document.getElementById("sample6_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample6_detailAddress").focus();
    }
  }).open();
}
