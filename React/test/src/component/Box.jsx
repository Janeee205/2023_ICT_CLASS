import React from 'react';
// 가위바위보 다시 복습

const Box = () => {
  return (

    // 박스의 대략적인 틀을 만든다.
    <div className='box-item'>
      <h1>제목</h1>
      <h2>선택</h2>
      <img src='https://images.unsplash.com/photo-1567034866941-5acf937cb310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80' alt='임시이미지' />
      <h3>결과</h3>
    </div>
  );
};

export default Box;