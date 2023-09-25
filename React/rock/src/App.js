import { useState } from 'react';
import './App.css';
import Box from './component/Box';


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

  let [userSelect, setUserSelect] = useState(null);
  let [comSelect, setComSelect] = useState(null);
  let [result, setResult] = useState('');

  // 키값을 뽑아서 함수로

  let play = (userChoice) => {
    setUserSelect(choice[userChoice])

    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgment(choice[userChoice], comChoice))
  }


  // 컴퓨터 랜덤 값 선택
  let randomChoice = () => {
    // choice object 키값을 배열로 만들어서 랜덤으로 선택되게 한다
    // keys() -> 객체의 키값을 뽑아서 Array로 만들어준다.

    let itemArr = Object.keys(choice);

    // 0부터 2사이에 있는 랜덤 값을 만들어준다
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem]

    // 해당 함수가 호출 됐을 때 반환할 값
    return choice[final]
  }
  randomChoice();


  // 조건문으로 유저, 컴퓨터 중 누가 이겼는지 판단
  let judgment = (user, computer) => {
    // user가 이겼는지, computer 이겼는지
    // 어떤 값을 이용해서 판단할건지 결정
    // 사용자가 rock 컴퓨터가 scissors 사용자 win, com lose
    // 사용자가 선택한 값, 컴퓨터가 선택한 값 비교
    if (user.name == computer.name) {
      return 'tie'
    } else if (user.name == 'Rock') return computer.name == 'Scissors' ? 'win' : 'lose'
    else if (user.name == 'Paper') return computer.name == 'Rock' ? 'win' : 'lose'
    else if (user.name == 'Scissors') return computer.name == 'Paper' ? 'win' : 'lose'
  }

  return (
    <div className="App">
      <div className='box-list'>
        <Box title="You" />
        <Box title="Computer" />
      </div>

      <div className="btn-list">
        <button onClick={() => play('scissors')} type='button'>가위</button>
        <button onClick={() => play('rock')} type='button'>바위</button>
        <button onClick={() => play('paper')} type='button'>보</button>
      </div>
    </div>
  );
}

export default App;