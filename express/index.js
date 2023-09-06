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
// localhost:7000/login 으로 접속시 보여줄 화면 => login.html
// app.get('/login', function (requests, response) {
//   response.sendFile(__dirname + '/login/login.html')
// })


/*
app.get('/add', function (requests, response) {
  db.collection('post').find().toArray(function (error, result) {
    // console.log(result)
    response.render('data.ejs', { log: result })
  })

})
*/



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
/*
form에서 /add 경로로 post 요청을 하면, 
DB에서 total collection을 찾아서
해당 collection에 있는 총 데이터 수
totalDataLength라는 변수에 그 값을 저장
post라는 collection에 새로운 데이터가 들어올 경우
_id 값을 totalDataLength에 1 증가한 값
total collection의 totalData + 1
*/

app.post('/add', function (requests, response) {
  console.log(requests.body)
  response.send('전송 완료!')


  /*
    db에서 total collection 총 데이터 수 꺼내오기.
    데이터를 전부 찾고 싶다면 find(), 하나만 찾고 싶으면 findOne();
    name이 totalData인 데이터를 찾아달라는 쿼리문
  */
  db.collection('total').findOne({ name: 'dataLength' }, function (error, result) {
    // total collection에 있는 총 데이터 수
    console.log("result.totalData : " + result.totalData);
    let totalDataLength = result.totalData;

    db.collection('post').insertOne({ _id: totalDataLength + 1, 아이디: requests.body.id, 비밀번호: requests.body.pw }, function (error, result) {
      console.log('db 저장완료!')
    })

    /*
    새로운 데이터가 저장 됐을 때 total collection에 있는 totalData + 1
    .updateOne({변경 할 데이터}, {$inc : {수정값}})
    update operator(연산자) $set, $inc(증가) 등 여러가지
    {$set : {totalData : 변경 할 값}}
    {$inc : {totalData : 기존값에 더해줄 값}}
    */

    db.collection('total').updateOne({ name: 'dataLength' }, { $inc: { totalData: 1 } }, function (error, result) {
      if (error) {
        return console.log(error);
      }
    })

  })
})



//  /add로 접속하면 GET 요청으로 DB에 저장된 데이터를 보여준다.
// .html -> .ejs로 확장자만 바꿔서 사용하면 된다.

/*******************
 * npm install ejs *
 *******************/

app.set('view engine', 'ejs');

app.get('/add', function (requests, response) {
  // post라는 collection에 저장된 데이터를 꺼낸다.
  db.collection('post').find().toArray(function (error, result) {
    // console.log(result)
    response.render('data.ejs', { log: result })
  })

})



// delete 버튼 눌렀을때
app.delete('/delete', function (requests, response) {
  console.log(requests.body)
  requests.body._id = parseInt(requests.body._id);

  db.collection('post').deleteOne({ _id: requests.body._id }, function (error, result) {
    if (error) {
      console.log(error)
    }
    console.log('삭제완료!!')
  })

  // 성공적으로 끝났음을 Ajax에게 알림
  // HTTP response status codes
  // 2xx -> 요청성공
  // 4xx -> 고객 문제로 요청 실패
  // 5xx -> 서버 문제로 요청 실패
  response.status(200).send({ measage: '성공!' })

})


/*
  데이터마다 고유의 아이디값이 있다
  아이디값을 파라미터로 사용한다

  url에 데이터가 가지고 있는 _id 값을 파라미터로 받는다.
  각 페이지에 보여줄 내용이 다르기때문에 내용에 따라서 경로 변경(_id)
  /info/1  /info/2  
  url 파라미터 == 함수 파라미터
  '/info/:id' : 콜론 뒤에 아무 문자나 입력 했을때
*/
app.get('/info/:id', function (requests, response) {
  // params.id : url 파라미터중 id 값
  // 'post' collection에서 params.id 값에 해당하는 데이터 찾아오기
  // 데이터 찾을때  requests.params.id String => int로 형변환
  // 'post' collection에 _id 값이 int기 때문


  db.collection('post').findOne({ _id: parseInt(requests.params.id) }, function (error, result) {

    // console.log(result)
    response.render('info.ejs', { data: result })

  })
})

// 수정하기 연결
// params로 받은 _id 값 db collection post에서 가져오기
app.get('/edit/:id', function (requests, response) {

  db.collection('post').findOne({ _id: parseInt(requests.params.id) }, function (error, result) {

    console.log(result)

    response.render('edit.ejs', { data: result })
  })
})



/*
계정 수정가능하게 하기
HTML form 태그에서는 GET, POST요청만 가능!
PUT, DELETE 요청을 하고싶다면 외부 라이브러리 설치
*/

/*******************************
 * npm install method-override *
 *******************************/

const methodOverride = require('method-override');
app.use(methodOverride('_method'))

app.put('/edit', function (requests, response) {

  // {바꿀요소}, {바꿔줄 값}
  db.collection('post').updateOne({ _id: parseInt(requests.body._id) }, { $set: { 아이디: requests.body.id, 비밀번호: requests.body.pw } }, function (error, result) {
    console.log('수정 완료!')
    // 해당 요청이 완료되면 /add라는 경로로 redirection
    // /add. 라는 url 경로로 다시 이동
    response.redirect('/add');
  })
})



// 로그인 기능구현
// 1. join.ejs 파일 생성
// 2. 회원가입 폼 작성
// 3. db.collection('login')에 join.ejs 파일에 있는 input value값 저장

app.get('/join', function (requests, response) {
  response.render('join.ejs')
})

app.post('/join', function (requests, response) {

  db.collection('total').findOne({ name: 'dataLength' }, function (error, result) {
    console.log(result.totalData)

    let totalDataLength = result.totalData;

    db.collection('login').insertOne({ _id: totalDataLength + 1, name: requests.body.name, id: requests.body.id, pw: requests.body.pw }, function (error, result) {
      console.log('login collection에 저장완료!')
    })

    db.collection('total').updateOne({ name: 'dataLength' }, { $inc: { totalData: 1 } }, function (error, result) {
      if (error) {
        return console.log(error);
      } response.redirect('/login');
    })
  })

})



// 회원가입, 로그인을 구현 할 수 있는 여러가지 방법 중
// Session을 사용하여 기능 구현(가장 많이 사용하는 방법)
// 유저가 로그인 하면 Session ID 하나 발급
// 서버측도 가지고 있고, 유저도 컴퓨터에 그 값을 가진다.
// Session ID : 유저가 로그인 할 때 작성한 정보

// 로그인을 위해 라이브러리 설치
/**********************************
 * 1. npm install passport
 * 2. npm install passport-local
 * 3. npm install express-session
 **********************************/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

// app.use (미들웨어)
// 서버와 요청 사이에 중간에서 실행하고 싶은 코드가 있을 때 사용한다.
// passport 라이브러리 : 미들웨어 제공
app.use(session({ secret: 'secret', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (requests, response) {
  response.render('login.ejs');
})

// 유저가 로그인 페이지에서 로그인 했을 때
// 데이터를 비교해서 일치하면 응답, 
// 중간에 응답하기 전에 일치하지 않는다면 
// /fail 이라는 경로로 이동한다

app.post('/login', passport.authenticate('local', {
  failureRedirect: '/fail'
}), function (requests, response) {
  response.redirect('/')
})

// 로그인 실패 했을 때  /fail 경로에서 보여줄 화면
app.get('/fail', function (requests, response) {
  response.send('<h1>로그인 실패!</h1>');
})

// localStrategy로 아이디, 비밀번호 값의 일치여부
passport.use(new LocalStrategy({
  // 유저가 입력한 아이디, 비밀번호에 필드 이름설정
  usernameField: 'id',
  passwordField: 'pw',
  // 사용자의 로그인 세션 유지 여부
  session: true,
  // 아이디, 비밀번호 외에 다른정보를 추가로 검증하고 싶을 때
  // req 매개변수 값을 콜백함수로 전달
  passReqToCallback: false

  // 콜백함수에서 유저 아이디 / 비밀번호 검증
}, function (userID, userPW, done) {
  db.collection('login').findOne({ id: userID }, function (error, result) {
    // result가 없을 경우 = 유저가 입력한 userID 값과 db에 일치하는 값이 없을 경우
    // done() => 파라미터 3개 받는다.
    // done(서버에러, db데이터, 에러메세지)
    if (!result) {
      return done(null, false, { message: '없는 아이디임' })
    }

    if (userPW == result.pw) {
      return done(null, result)

    } else {
      return done(null, false, { message: '비밀번호 불일치' })
    }
  })

}))

// 로그인 성공 -> 세션정보 만들고,
// 씨리얼라이즈유저 : 유저 정보를 암호화
passport.serializeUser(function (user, done) {
  done(null, user.id)
})



// 해당 세션 데이터를 login collection에서 찾는다.
passport.deserializeUser(function (id, done) {
  db.collection('login').findOne({ id: id }, function (error, result) {
    done(null, result)
  })
})



// 로그인 한 사람만 접속할 수 있는 경로 /mypage
app.get('/mypage', getLogin, function (requests, response) {
  console.log(requests.user)
  response.render('mypage.ejs', { info: requests.user })
})



// 로그인 여부를 판단하는 미들웨어
function getLogin(requests, response, next) {
  if (requests.user) {
    next();
  } else {
    response.send('<h3>로그인 먼저 하세요!😥</h3>')
  }
}



app.post('/logout', function (requests, response) {
  requests.session.destroy();
  console.log('로그아웃!')
  response.redirect('/login');
})





// -------------------------------------------------------------------------
// 0. 서버란?
// 서버 : 요청한 정보를 보내주는 프로그램

// HTTP 요청 방식 네가지
// 1. GET(읽기)
// 2. POST(쓰기)
// 3. PUT(수정)
// 4. DELETE(삭제)

// Node.js : Javascript runtime
// Javascript는 프로그래밍적 연산을 하기 위한 언어가 아니고, HTML을 조작하기 위해 만들어진 언어다.
// Javascript는 브라우저가 해석한다. (크롬, 사파리, 엣지, 파이어폭스 등) => 그래서 별도의 설치없이 이용 가능!
// 크롬 브라우저 V8 엔진에서 브라우저 환경 외에 다른 환경에서도 Javascript를 사용할 수 있도록 Node.js를 만들었다.

// Node.js 장단점
// 장점 : 가벼운 요청부터 먼저 처리
// 단점 : 이미지, 동영상, 연산 처리가 필요한 서비스를 개발해야 될 경우 속도가 떨어지고, 라이브러리도 부족하다.
// 이에 최적화된 언어 = python(빅데이터, 데이터 시각화 등)


// 1. Node.js express 서버 구축하는 방법
// Express 라이브러리로 서버 구축
// 폴더 생성 -> cd로 해당 폴더로 경로 이동
// cd 폴더명
// cd(Change Directory), cd .., ls

// npm init => package.json 파일 생성된다.
// npm init 후 쭉 엔터 entry point 부분에 작성된 파일명과
// package.json 파일에 작성된 "main": "index.js", 파일명이 동일해야 한다.
// 다른 이름으로 파일 생성 했을 경우, package.josn 에서 파일명 수정!

// npm install express  => node_modules 생성된다.
// npm : 라이브러리를 설치하기 위한 도구
// npm은 Node.js를 설치하면 자동으로 같이 설치되기 때문에 별도의 설치 필요 X
// node_modules : 라이브러리 사용할 때 필요한 것들이 담긴 폴더


// 서버 종료 => ctrl + c

// 서버 재실행 자동화 (nodemon)
// -g(global)로 컴퓨터 전역에서 이용 가능하도록 설치
// npm install -g nodemon

// 서버 실행
// nodemon index.js

// powershell 보안 에러
// 에러 원인 : Restricted일 때 허가된 script외에 막아버리기 때문에 에러가 발생한다.

// 검색 -> powershell(관리자 권한으로 실행)
// executionpolicy
// set-executionpolicy unrestricted => enter
// y => enter

// 서버한테 정보를 보내주는 코드
// 서버에 보낸 정보를 영구 저장 하려면 DB(Data Base)에 저장

// url 이름짓기
// 1. URL 명사로 작성 추천 '/명사'
// 2. 하위 문서를 나타낼 때 / slash (하위폴더 나누듯이 사용)
// 3. 파일 확장자 사용 X (.html, .css 등)
// 4. 띄어쓰기 대신 (-) 사용
// 5. 자료 하나당 하나의 URL 사용
// 6. URL을 봤을 때 어떤 페이지인지 알 수 있어야 한다.


// 서버에 GET, POST, PUT, DELETE 요청하는 방법
// DB CRUD (Create(생성), Read(읽기), Update(수정), Delete(삭제))
// insert, find, update, delete
// insertOne, findOne, updateOne, deleteOne
