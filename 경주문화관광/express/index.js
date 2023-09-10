
/**
 * 회원가입시 데이터 입력하지 않아도 db로 넘어가는 문제가 있음
 * 회원가입 script.js의 마지막 summit버튼 부분에서
 * e.preventDefault() 때문에 데이터를 넘기지 못하므로 주석처리 하였음
 */

const express = require('express');
const app = express();

app.listen(7000, function () {
    console.log('7000번 포트')
})

// 폴더 내 모든 정적파일 제공(js, css, images, fonts)
// 폴더명 다를시 변경해야함
app.use(express.static(__dirname))
app.use(express.static("./subpage_8"))
app.use(express.static("./subpage_8/js"))
app.use(express.static("./subpage(로그인)"))


// ***************** 링크연결 *****************
app.set('view engine', 'ejs');

app.get('', function (requests, response) {
    response.sendFile(__dirname + '/index.html')
})


// 회원가입
app.get('/join', function (requests, response) {
    response.render('join.ejs')
})



// body-parser -> 요청 데이터해석을 도와주는 라이브러리
// 설치 : npm install body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require('mongodb').MongoClient;

// 데이터를 저장할 변수 하나 선언
let db;

// Database access에서 만든 아이디 : 비밀번호
MongoClient.connect('mongodb+srv://admin:qewr1324@cluster0.yb4lr5p.mongodb.net/?retryWrites=true&w=majority', function (error, client) {

    if (error) {
        return console.log(error)
    }

    db = client.db('data')
    app.listen('7080', function () {
        console.log('success')
    })

})


// 
// 

/*************************
 * 회원가입 폼 데이터 저장
 * db명 gyeongju_join
 ************************/

// 회원가입 폼 작성시 db로 데이터 넘어감
// 설치 : npm install ejs
app.post('/join', function (requests, response) {
    let bodyData = requests.body;
    console.log(bodyData);


    db.collection('gyeongju_join_total').findOne({ name: 'dataLength' }, function (error, result) {

        // 넘겨줄 값
        // 값이 잘 입력됐는지
        let isTrue = bodyData.id && bodyData.pw && bodyData.name && bodyData.mail;
        // 값이 잘 입력됐다면 db로 넘긴다
        if (isTrue) {
            console.log("result.totalData : " + result.totalData);
            let totalDataLength = result.totalData;

            db.collection('gyeongju_join').insertOne({ _id: totalDataLength + 1, id: requests.body.id, pw: requests.body.pw, name: requests.body.name, email: requests.body.mail }, function (error, result) {
                console.log('db 저장완료!');
                response.redirect('/login');
            })
        }

        db.collection('gyeongju_join_total').updateOne({ name: 'dataLength' }, { $inc: { totalData: 1 } }, function (error, result) {
            if (error) {
                return console.log(error);
            } else {
                console.log('id num 저장완료');
            }
        })
    })
})


// 로그인
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({ secret: 'secret', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function (requests, response) {
    response.render('login.ejs')
})

// 유저가 로그인 페이지에서 로그인 했을 때
// 데이터를 비교해서 일치하면 응답, 
// 중간에 응답하기 전에 일치하지 않는다면 
// /fail 이라는 경로로 이동한다

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/fail'
}), function (requests, response) {
    response.redirect('/')
    console.log(requests);
    console.log(response);
})


app.get('/fail', function (requests, response) {
    response.send("<script>alert('아이디 또는 비밀번호가 잘못되었습니다.');location.href='/login';</script>");

})


passport.use(new LocalStrategy({
    // 유저가 입력한 아이디, 비밀번호에 필드 이름 설정
    usernameField: 'id',
    passwordField: 'pw',
    // 사용자의 로그인 세션 유지 여부
    session: true,
    // 아이디, 비밀번호 외에 다른 정보를 추가로 검증하고 싶을 때
    // req 매개변수 값을 콜백함수로 전달
    passReqToCallback: false,

    // 콜백함수에서 유저 아이디 / 비밀번호 검증
}, function (userID, userPW, done) {
    db.collection('gyeongju_join').findOne({ id: userID }, function (error, result) {
        // result가 없을 경우 
        // 유저가 입력한 userID값과 db에 일치하는 값이 없다
        // done() => 파라미터 3개 받는다
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
// 씨리얼라이즈유저(serializeUser) : 유저 정보를 암호화 
passport.serializeUser(function (user, done) {
    done(null, user.id)
})

// 해당 세션 데이터를 login collection에서 찾는다
passport.deserializeUser(function (id, done) {
    db.collection('gyeongju_join').findOne({ id: id }, function (error, result) {
        done(null, result)
    })
})


// 계정관리페이지 연결
app.get('/admin', function (requests, response) {
    // collection에 저장된 데이터를 꺼낸다.
    db.collection('gyeongju_join').find().toArray(function (error, result) {
        response.render('data.ejs', { log: result })
    })
})


// delete 버튼 눌렀을때(계정삭제)
app.delete('/delete', function (requests, response) {
    console.log(requests.body)
    console.log('아이디값 ' + requests.body._id)
    requests.body._id = parseInt(requests.body._id);

    db.collection('gyeongju_join').deleteOne({ _id: requests.body._id }, function (error, result) {
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


// 수정하기 연결
// params로 받은 _id 값 db collection post에서 가져오기
app.get('/edit/:id', function (requests, response) {

    db.collection('gyeongju_join').findOne({ _id: parseInt(requests.params.id) }, function (error, result) {

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
    db.collection('gyeongju_join').updateOne({ _id: parseInt(requests.body._id) }, { $set: { id: requests.body.id, pw: requests.body.pw, name: requests.body.name, email: requests.body.mail } }, function (error, result) {
        console.log('수정 완료!')
        // 해당 요청이 완료되면 /add라는 경로로 redirection
        // /add. 라는 url 경로로 다시 이동
        response.redirect('/admin');
    })
})
