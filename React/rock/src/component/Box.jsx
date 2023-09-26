import React from 'react';
import './Box.css'


const Box = (props) => {

  let result;

  // 이름이 컴퓨터이면서, 비긴것이 아니면서, 결과가 빈 값이 아니라면
  if (props.title == "Computer" && props.result !== 'tie' && props.result !== '') {
    result = props.result === 'win' ? 'lose' : 'win'
  } else {
    result = props.result;
  }

  let boxItem = document.querySelector('.box-item');


  return (
    <div className={`box-item ${result}`} >
      <h1>{props.title}</h1>
      {/* 
      null error시 => 조건부 렌더링 
      null이 아닐때만 값이 랜더링 되도록 한다.
      */}
      <h2>{props.select && props.select.name}</h2>
      <img src={props.select && props.select.img} alt={props.select && props.select.name} />
      <h3>{result}</h3>

    </div>

  )
};

export default Box;