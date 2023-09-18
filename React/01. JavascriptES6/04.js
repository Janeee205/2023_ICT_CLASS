// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항 연산자
let person = {
  name: 'Jueun',
  age: 29
}

// 삼항 연산자
// 조건 ? 참일 때 실행할 코드 : 거짓일 때
// person이라는 게 존재한다면, person.name, 없다면 '없다'

console.log(person.address ? person.address : '없다')

// age가 18살 이상이라면, '성인입니다'
// 아니라면 '미성년자입니다'
// 다중 조건을 작성할 경우 조건을 소괄호로 묶어준다.
console.log(person.age >= 18 ? '성인입니다' : '미성년자입니다')

console.log((person.age >= 65) ? '노인입니다' : (person.age >= 18) ? '성인입니다' : '미성년자입니다')