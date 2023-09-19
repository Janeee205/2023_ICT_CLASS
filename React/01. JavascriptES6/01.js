// Object shorthand Assignment
// ES6에서는 객체를 반환할 때 불필요한 반복을 하지 않아도 된다.
// 실행 : ctrl + F5 / Code runner 설치 후 ctrl + alt + n

let name = 'Jueun';
let age = 28;

let person = {
  name: name,
  age: age
}

console.log(person)


/*
단축 표기법
키와 value에 들어가는 변수 이름이 같다면, 생략해도 된다.
키와 벨류값이 일치할때만 생략가능
*/


let person2 = {
  name,
  age
}

console.log(person)
