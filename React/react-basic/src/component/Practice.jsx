import React from "react";
import Box from "./Box";

function Practice() {
  let element = <h1>졸려!</h1>

  // html 코드 return() 안에 작성해야한다.
  // return()안에는 무조건 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.(태그를 병렬로 기입x)

  return (
    <>

      {/* 태그에서 스타일 속성 지정할때
        style ={{key : value}} 헝태로 작성
        key(스타일명) : value('스타일 값')
        key 값을 낙타표기법으로 작성한다.
        background-color -> backgroundColor */}

      {/* class -> className */}
      {/* 리엑트가 Javascript class 문법으로 인식하기 때문 */}
      < h1 className='text' style={{ backgroundColor: 'lightgreen' }
      }> Text!</h1>

      {/* 변수를 넣을 때 중괄호{}로 데이터 바인딩 */}
      {element}

      {/* 클로징 태그가 무조건 있어야한다. self-closing 태그로 작성해도 무방하다. */}
      <Box>
      </Box>

    </>
  )

}

export default Practice;