// Express 라이브러리 사용해서 서버 구축
// 폴더 생성 -> cd로 해당 폴더로 경로 이동
// cd, cd .., ls



/****************
 * node.js 설명 *
 ***************

서버 : 요청한 정보를 보내주는 프로그램
HTTP 요청 방식 네가지

1. GET (읽기)
2. POST (쓰기)
3. PUT (수정)
4. DELETE (삭제)

Node.js
Javascript runtime

Javascript는 프로그래밍적 연산을 하기 위한 언어가 아니라
html요소를 조작하기 위해 만들어진 언어
Javascript 언어는 브라우저가 해석한다. (크롬, 사파리, 파이어폭스, 엣지 등)

크롬 브라우저에 v8엔진에서 브라우저 환경 외에 다른 환경에서도 사용할 수 있도록
node.js를 만들었다.

// Node.js 장단점
// 장점 : 가벼운 요청부터 먼저 처리
// 단점 : 이미지, 동영상, 연산처리가 필요한 서비스를 개발해야 할 경우 속도도 떨어지고 라이브러리도 부족
*/



/******************
 * express설치방법 *
 ******************

express 폴더 하나 만들고 터미널 열어서 

1. npm init  
계속엔터 is this ok까지

2. npm install express

3. package.json에 있는   "main": "index.js" 대로 index.js생성

4. 실행하기 -> cd express 폴더로 이동, node index.js
   터미널 창에 콘솔로그 찍힘

5. 브라우저 열고 http://localhost:7000/ 로 접속

6. 재실행 하고싶으면 ctrl + c 서버접속 끊고 node index.js 명령어 재입력
*/



const express = require('express');
const app = express();

/*
port : 컴퓨터에는 외부 네트워크랑 통신할 수 있는 여러개의 구멍이 있는데,
그 중 내가 몇번째 port로 접속할건지 지정

listen이라는 함수를 서버로 열어준다
listen(param1, param2)
param1 : 서버를 띄울 포트 번호
param2 : 실행할 코드

내 컴퓨터에서 7000포트로 진입
콜백함수 안에 있는 코드 실행
localhost:7000(port number)
*/
app.listen(7000, function () {
  console.log('7000번 포트')
})



/*
서버에 GET요청으로 정보 받아오기
유저가 localhost:7000으로 접속하면 send, sendFile
app.get('경로', function(){})
requests(요청), response(응답)
slash / 메인경로 (localhost:7000)
*/
app.get('/', function (requests, response) {
  response.sendFile(__dirname + '/index.html')
})

app.get('/test', function (requests, response) {
  response.send('Test 페이지입니다.');
})

// 로그인 연결
app.get('/login', function (requests, response) {
  response.sendFile(__dirname + '/login/login.html')
})

// 지도 연결
app.get('/map', function (requests, response) {
  response.sendFile(__dirname + '/map/map.html')
})



/*********************
 * 서버 재실행 자동화 *
 ********************

 서버 종료시 => ctrl + c

-g(global)로 컴퓨터 전역에서 이용 가능하게 설치

npm install -g nodemon
nodemon index.js


*****   powershell 보안오류 뜰 시   *****

1. powershell 관리자 모드로 실행

2. Restricted 뜨면, set-executionpolicy unrestricted 입력

3. 실행 정책을 변경하시겠습니까? -> y

4. 이후 터미널에서   nodemon index.js 재입력
*/



/*****************
 * 지도 api 연결 *
 ****************

카카오 개발자 가입 후, 어플리케이션 등록
https://developers.kakao.com/console/app/960928/config/appKey

아래 링크에서 '지도를 띄우는 코드 작성' 참조하여 코드 복사
https://apis.map.kakao.com/web/guide/

좌표는 아래 링크에서 가져온다
https://apis.map.kakao.com/web/sample/addMapClickEventWithMarker/
*/
