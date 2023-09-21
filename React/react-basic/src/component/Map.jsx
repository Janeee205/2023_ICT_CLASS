import React from 'react';

// map() 함수
// 코드를 간결하고 가독성 있게 유지하는데 유용하다.
// 모든 Array(배열) 뒤에 사용할 수 있다.
const Map = () => {
  let num = [1, 2, 3, 4, 5];
  let arrPlus = num.map((num) => num + 1)
  // console.log(num)
  // console.log(arrPlus)

  // num의 제곱근
  let newArr = num.map((num) => {
    // 제곱 구하는 함수 Math.pow()
    return Math.pow(num, 2)
  })
  console.log(newArr)

  return (
    <div>
      {
        // map(para1, para2) => {})
        // para1 : 배열의 반복한 값
        // para2 : 배열 인덱스 번호

        // Each child in a list should have a unique "key" prop.
        // 이런 에러가 뜰 시 <div key={index}> div 안에 키값 넣기
        [1, 2, 3].map((item, index) => {
          return (
            <div key={index}>
              <div>배열 안 값 : {item}</div>
              <div>배열 안 인덱스 : {index}</div>
            </div>
          )
        })
      }

      {
        // console.log 두번 찍히는 이유 => React.StrictMode 때문 (index.js)
        [1, 2, 3, 4, 5].map((num) => {
          // console.log(num)
        })
      }

      {
        ['jueun', 'kim', 'hi'].map((char, index) => {
          // console.log(char.toUpperCase())
          return <div key={index}>{char.toUpperCase()}</div>

        })
      }

      {
        // 객체 속성값 추출
        [
          { name: 'jueun1', age: 29 },
          { name: 'seulgi', age: 30 },
          { name: 'yuna', age: 34 }
        ].map((info, index) => {
          return <div key={index}> 이름 : {info.name}, 나이 : {info.age}</div>
        })
      }

      {
        [1, 2, 3, 4, 5].map((num, index) => {
          return num + index;
        })
      }





    </div>
  );
};

export default Map;