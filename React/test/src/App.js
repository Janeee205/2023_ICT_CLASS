import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 게임에 필요한 데이터를 배열로 만든다.
let choice = {
  rock: {
    name: 'Rock',
    img: 'https://iheartcraftythings.com/wp-content/uploads/2022/01/6-37.jpg'
  },

  scissors: {
    name: 'Scissors',
    img: 'https://images.unsplash.com/photo-1567034866941-5acf937cb310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80'
  },

  paper: {
    name: 'Paper',
    img: 'https://images.unsplash.com/photo-1532153354457-5fbe1a3bb0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
}


function App() {

  // useState => React Hook 중 하나
  // State를 사용해 상태를 변경하면 React가 변경된 상태를 감지해서 자동으로 컴포넌트를 다시 랜더링 한다.

  /*
  1. 클릭시 뭔가 실행하고 싶으면 onclick 이벤트 핸들러 사용
  2. state를 변경하려면 꼭 state변경 함수를 이용해야 한다
  3. state 변경 함수는 ( ) 안에 입력한 값으로 기존 state 값을 갈아치워준다
  
  ******* State 사용법 *******
  
  1. import {useState} from 'react';
  2. useState(보관할 자료)
  3. let(작명, set작명)
  let(해당 상태값을 의미하는 변수, 해당 상태값을 변경하는 함수(이 함수를 호출할때 변경된 값을 인수로 전달한다.)
   */

  // 내가 선택한것 / 컴퓨터가 선택한 것 / 결과

  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');

  // 키 값을 뽑아서 함수로 만든다
  let play = (userChoice) => {
    setUserSelect(choice[userSelect])

    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgment(choice[userSelect], comChoice))
  }


  // 컴퓨터 랜덤 값 선택
  let randomChoice = () => {
    // 키 값을 배열로 만들어서 랜덤으로 선택하게 한다.
    // keys() => 객체의 키 값을 뽑아서 Array로 만들어준다.

    let itemArr = Object.keys(choice)

    // 0부터 2사이에 있는 랜덤 값을 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem];

    // 해당 함수가 호출 됐을 때 반환할 값
    return choice[final];
  }
  randomChoice();


  // 조건문으로 유저, 컴퓨터 중 누가 이겼는지 판단
  let judgment = (user, computer) => {
    // user가 이겼는지, computer가 이겼는지, 어떤값을 사용해서 판단할건지 결정한다.
    // 사용자가 선택한 값, 컴퓨터가 선택한 값 비교
    if (user.name == computer.name) {
      return 'tie'
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose';
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose';
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose';
  }


  return (
    <div className="App">
      <div className="box-list">
        {/* 사람, 컴퓨터 두개 박스가 필요하므로 Box component 두개 호출 */}
        <Box title="You" select={userSelect} result={result} />
        <Box title="Computer" select={comSelect} result={result} />
      </div>

      <div className="btn-list"></div>
    </div>
  );
}

export default App;
