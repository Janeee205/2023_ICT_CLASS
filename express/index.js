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



/*********************
 * 서버 재실행 자동화 *
 ********************

 서버 종료시 => ctrl + c

-g(global)로 컴퓨터 전역에서 이용 가능하게 설치

npm install -g nodemon
nodemon index.js


*****   powershell 보안오류 뜰 시   *****

1. powershell 관리자 모드로 실행, executionpolicy

2. Restricted 뜨면, set-executionpolicy unrestricted 입력

3. 실행 정책을 변경하시겠습니까? -> y

4. 이후 터미널에서   nodemon index.js 재입력
*/

/************************************
 * 재 실행시 cd express 로 폴더 이동 *
 *  nodemon index.js 입력          *
 **********************************/



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

// 폴더 내 모든 정적파일 제공(js, css, images, fonts)
app.use(express.static(__dirname))

/*
서버에 GET요청으로 정보 받아오기
유저가 localhost:7000으로 접속하면 send, sendFile
app.get('경로', function(){})
requests(요청), response(응답)
slash / 메인경로 (localhost:7000)
*/

app.get('', function (requests, response) {
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

// POST
// body-parser -> 요청 데이터해석을 도와주는 라이브러라
// npm install body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// input 태그 값을 서버에 전송하려면 name 속성 추가

// app.post('', function*(){})
// input에 작성된 내용은 requests 파라미터가 갖고 있는 것
/*
app.post('/add', function (requests, response) {
response.send('전송완료!');
console.log(requests.body);
console.log(requests.body.id);
console.log(requests.body.pw);
})
*/
// 서버한테 정보를 보내주는 코드
// 서버에 보낸 정보를 영구 저장하려면 DB에 저장해야 한다.

/*
 url 이름 작명법
1. URL 명사로 작성 추천 /명사
2. 하위 문서를 나타낼 때 / slash(하위폴더)
3. 파일 확장자 사용X(.html, .css 등)
4. 띄어쓰기 대신 (-) 사용
5. 자료 하나당 하나의 URL 사용
6. URL을 봤을 때 어떤 페이지인지 알 수 있어야 한다.
*/



/************************************
 * MongnDB 설치필요                 *
 * npm install mongodb@3.6.4       *
 **********************************/

const MongoClient = require('mongodb').MongoClient;


// 데이터를 저장할 변수 하나 선언
let db;

// Database access에서 만든 아이디 : 비밀번호
MongoClient.connect('mongodb+srv://admin:qewr1324@cluster0.yb4lr5p.mongodb.net/?retryWrites=true&w=majority', function (error, client) {
  // 커넥션 에러의 99.9%가 url오타
  // mongodb+srv://admin:qewr1324@cluster0.yb4lr5p.mongodb.net/?retryWrites=true&w=majority

  if (error) {
    return console.log(error)
  }

  db = client.db('data')
  app.listen('7070', function () {
    console.log('success')
  })

})

// ★★★★★★★ mongoDB에 데이터 넣기 ★★★★★★★

app.post('/add', function (requests, response) {
  console.log(requests.body)
  response.send('전송 완료!')

  db.collection('post').insertOne({ _id : 1, 아이디: requests.body.id, 비밀번호: requests.body.pw }, function (error, result) {
    console.log('db에 저장완료!')
  })

  // 새로운 데이터가 저장 됐을 때 total collection에 있는 totalData + 1
  // .updateOne({변경 할 데이터}, {$inc : {수정값}})
  // update operator(연산자) $set, $inc(증가) 등 여러가지
  // {$set : {totalData : 변경 할 값}}
  // {$inc : {totalData : 기존값에 더해줄 값}}
  db.collection('total').updateOne({name : 'dataLength'}, {$inc : {totalData : 1}}, function(error, result){
    if(error){
      return console.log(error);
    }
  })
})



//  /add로 접속하면 GET 요청으로 DB에 저장된 데이터를 보여준다.
//
// .html -> .ejs로 확장자만 바꿔서 사용하면 된다.

/*******************
 * npm install ejs *
 *******************/

app.set('view engine', 'ejs');

app.get('/add', function(requests, response){
  // post라는 collection에 저장된 데이터를 꺼낸다.
  db.collection('post').find().toArray(function(error, result){
    console.log(result)
    response.render('data.ejs', {log : result})
  })

})