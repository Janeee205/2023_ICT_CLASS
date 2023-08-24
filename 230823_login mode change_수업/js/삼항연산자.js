// 삼항연산자 : 리엑트에서 많이 사용
let person = {
  name: 'Jueun',
  age: 28
}

// person이라는 것이 있다면 Jueun, 없다면 '없다'.

// if (person) {
//   console.log(person.name)
// } else {
//   console.log('없다')
// }

console.log(person ? person.name : '없다')

// age가 18살 이상이면 성인, 아니면 미성년자
console.log(person.age >= 18 ? '성인' : '미성년자')
