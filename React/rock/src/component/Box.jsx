import React from 'react';
import './Box.css'


const Box = (props) => {

  return (
    <div className='box-item'>

      <h1>{props.title}</h1>
      {/* 
      null error시 => 조건부 렌더링 
      null이 아닐때만 값이 랜더링 되도록 한다.
      */}
      <h2>{props.select && props.select.name}</h2>
      <img src="props.select.img" alt="" />
      <h3>{props.result}</h3>

    </div>

  )
};

export default Box;