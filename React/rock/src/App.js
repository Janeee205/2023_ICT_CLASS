import { useState } from 'react';
import './App.css';
import Box from './component/Box';


let choice = {
  rock: {
    name: 'Rock',
    img: 'https://iheartcraftythings.com/wp-content/uploads/2022/01/6-37.jpg'
  },


  scissor: {
    name: 'Scissors',
    img: 'https://images.unsplash.com/photo-1567034866941-5acf937cb310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80'
  },

  paper: {
    name: 'Paper',
    img: 'https://images.unsplash.com/photo-1532153354457-5fbe1a3bb0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }

}

function App() {

  let [userSelect, setuserSelect] = useState(null);
  let [comSelect, setcomSelect] = useState(null);
  let [result, setResult] = useState('');

  return (
    <div className="App">
      <div className="box-list">
        <Box title="You" />
        <Box title="Computer" />
      </div>

      <div className="btn-list">
        <button type='button'>가위</button>
        <button type='button'>바위</button>
        <button type='button'>보</button>
      </div>

    </div>
  );
}

export default App;
