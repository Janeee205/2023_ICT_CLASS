import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// VSCODE에서 터미널로 열때 설치한 폴더로 가야함(exam)
/*
  라이브러리의 집합 -> 프레임워크
  node js 설치
  
  원하는 폴더 안에
npm create vite@latest exam
react / js
cd exam
npm i
npm run dev


nodejs로 열때는
git bush 열어서
npm run dev입력해서
주소 뜨면 컨트롤+클릭 으로 연다
*/

import Button from './components/Button.jsx'
import Heading from './components/Heading.jsx'
import Flex from './components/Flex.jsx'

function App() {

  return (
    // 리엑트 특징 : 오로지 부모 하나의 태그만 있어야함. 겉에 부모태그로 감싸야함
    <>
      <Flex>
        <Heading title="안녕하세요" />
        <p>리액트 입문</p>

        <Button name="1번버튼" color="red" size="25px" />
        <Button name="2번버튼" color="green" size="20px" />
        <Button name="3번버튼" color="blue" size="15px" />
      </Flex>
    </>
  )
}

export default App
