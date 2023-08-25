
// 삼항연산자 : 리엑트에서 많이 사용
let person = {
  name: 'Jueun',
  age: 68,
  colors: ['red', 'green', 'blue', 'violet', 'black']
}

// person이라는 것이 있다면 Jueun, 없다면 '없다'.

// if (person) {
//   console.log(person.name)
// } else {
//   console.log('없다')
// }

// console.log(person ? person.name : '없다')



// age가 18살 이상이면 성인, 아니면 미성년자
// console.log(person.age >= 18 ? '성인' : '미성년자')



// colors라는 배열의 길이가 5 이상일 경우 '길다' 아닐경우 '짧다
// console.log(person.colors.length >= 5 ? '길다' : '짧다')

// if (person.colors.length >= 5) {
//   result = '길다';
// } else result = '짧다';

// let result = person.colors.length >= 5 ? '길다' : '짧다'
// console.log(result)



// 삼항연산자로 다중조건
// pserson age가 65세 이상일 경우  '노인입니다'
// 18살 이상 '성인입니다'
// 그 이하 '미성년자입니다'

// if (person.age >= 65) {
//   result = '노인입니다'
// } else if (person.age >= 18) {
//   result = '성인입니다'
// } else {
//   result = '미성년자입니다'
// }

// console.log(result)

// console.log(person.age >= 65 ? result = '노인입니다'
//   : person.age >= 18 ? result = '성인입니다'
//     : result = '미성년자입니다')

// 삼항연산자로 다중 조건을 작성할 경우 조건을 소괄호 묶어준다.
// console.log((person.age >= 65) ? '노인입니다' : (person.age >= 18) ? '성인입니다' : '미성년자입니다')



// num1이 num2보다 큰 경우 'num1 > num2'
// num2가 num3보다 큰 경우 'num2 > num3'
// num3이 제일 큰 경우 'num3 가장 크다'
// let num1 = 40;
// let num2 = 50;
// let num3 = 30;

// console.log((num1 > num2) ? 'num1 > num2' : (num2 > num3) ? 'num2 > num3' : 'num3 가장 크다')


// 삼항연산자 논리계산(true, false)
// person.name이라는 자료형이 있다면 person.name출력, 없다면 '없다' 출력
console.log(person.name ? '이름 : ' + person.name : '없다')
console.log(person.name == '' ? '없다' : person.name)
