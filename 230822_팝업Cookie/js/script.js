// Cookie
// 1. 클라이언트
// 2. 서버 - Cookie, section
// 둘 다 텍스트 형태의 문자로 저장

// 쿠키를 저장하도록 할지 / 말지 => 정보가 서버에 저장됨
// 사용자가 해당 사이트에서 어떤 행동을 했는지
// Cookie : 일정기간동안 데이터 값을 브라우저가 내부에 값을 저장한 것
// 쿠키가 저장되는 방식 name = value 방식

// 개발자 도구 => Application -> Cookies
// 만료기간을 넣어서 쿠키가 자동 만료 되도록 코드를 작성(UTC)
// setCookie, getCookie
// 1. setCookie : 쿠키 값을 설정하는 함수
// 2. getCookie : 쿠키 값을 가져오는 함수

// local storage를 이용해서 구현 할 수도 있다.

// 이름, 값, 시간
function setCookie(name, value, hours) {
  // 빈 문자열로 변수 초기화 => 쿠키 만료시간
  let expires = '';

  // 만약에 hours라는 값이 있다면(true)
  if (hours) {
    // date라는 변수 안에 현재 시간을 가지는 Date객체를 생성
    let date = new Date();

    // 24시간동안 보이지 않아야하므로 현재시간에 24시간뒤인 만료시점을 더한다.
    // date에 만료시점을 setTime한다

    // 밀리초계산
    // date 값을 현재시간 + hours(ms) 더한 값으로 set 한다.
    // 쿠키 만료시간이 hours더한 시간 만큼 뒤로 설정된다.
    // 시간을 밀리초(ms)로 변환
    // hour(시간) * 60(분) * 60(초) * 1000(밀리초)
    // Javascript에서 시간을 다룰 때 일반적으로 밀리초(ms)로 계산한다.
    // Date 객체가 밀리초(ms) 단위로 시간을 나타내기 때문에 
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))

    // ;(세미콜론)
    // 쿠키 설정은 문자열 네임과 벨류로 구성
    // 각각 옵션과 값을 세미콜론으로 구분한다.
    // toUTCString() : Date 객체의 시간 => UTC 형태의 문자열로 반환

    expires = '; expires' + date.toUTCString();
  }
}

