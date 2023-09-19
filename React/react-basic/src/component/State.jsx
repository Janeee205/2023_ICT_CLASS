import React from 'react';
import { useState } from 'react';
// state : 상태
// state : 현재 컴포넌트의 상태를 의미한다.
// React에서 상태를 관리하기 위한 Hook 중에 하나
// state를 사용해서 상태를 변경하면, React가 변경된 상태를 감지해서 자동으로 컴포넌트를 재랜더링 한다.

// userState()
// Javascript 변수 다루듯이 값을 직접 수정할 수 없다.
// useState() 함수를 이용해서 값을 변경해야 한다.

// 1. import {useState} from 'react'
// 2. let [변수이름, set변수이름] = useState(초기값)


const State = () => {
  // let num = 0;

  let [count, setCount] = useState(0);
  let [title, setTitle] = useState('리엑트 넘나 어려워용😥');
  // count : 해당 상태값을 의미하는 변수
  // setCount : 해당 상태값을 변경하는 함수
  // 이 함수를 호출할 때 변경된 값을 인수로 전달한다.
  // (0) : 초기 상태 값 / 컴포넌트가 처음 렌더링 될 때 사용되는 값
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>

      <h2>{title}</h2>
      <button onClick={() => {
        // state는 등호로 싱태를 변경할 수 없다.
        // state 변경 함수에는이름 앞에 set을 붙여준다.
        // state 변경 함수로 값을 변경해야 html 재랜더링 한다.
        let titleCopy = [...title];
        titleCopy = '리엑트 넘나 재밌어요!😋'
        setTitle(titleCopy);
      }}>제목 변경</button>

    </div >
  );
};

export default State;