import React from 'react';
import './Box.css'


const Box = (props) => {

  return (
    <div className='box-item'>

      <h1>{props.title}</h1>
      <h2>Rock</h2>
      <img src="https://iheartcraftythings.com/wp-content/uploads/2022/01/6-37.jpg" alt="" />
      <h3>tie</h3>

    </div>

  )
};

export default Box;