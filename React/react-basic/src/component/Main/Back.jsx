import React from 'react';
import './Back.css'


// 부모 컴포넌트
const Back = () => {
  return (
    <div>
      <Box layout='background' name='front-txt' />
      <Box layout='top' name='second-txt' />
    </div>
  );
};

// 가운데 중복되는 부분 만들기
function Box(props) {
  // 조건부 랜더링
  let showBtn = props.name == 'front-txt' ? true : false

  return (
    <>
      <section className={props.layout}>
        <div className={props.name}>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam beatae dolorem sint dignissimos nostrum inventore commodi deserunt illum nobis!</p>

          { /*
            조건부 랜더링 중괄호 -> 변수 &&
            html 조건부로 보여줄 때
            showBtn이  true일때만 button을 랜더링해준다.
            &&(and) 우항, 좌항 둘다 true일 경우 랜더링
            좌항 false 일 경우 바로 false 반환 (랜더링 x)
            
            이벤트핸들러에 함수가 아닌 표현식이나 값을 바로 전달했을 경우
            컴포넌트가 재랜더링 될 때마다 해당값이 실행된다
            onClick 됐을 때 실행되게 하려면 이벤트핸들러에 값을 함수로 전달해야 한다.
            */
            showBtn && <button className='front-btn' type='button' onClick={() => alert('하이')}>버튼</button>}
        </div>
      </section>
    </>
  )
}

export default Back;