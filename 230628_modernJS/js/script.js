/***********************************
 * 상수, 변수
 * 기존의 자바스크립트는 ES5
 * ES6, ES7, ES2019... ES6 => ESNEXT
 ***********************************/

// ES6, var = Variable

// var name = "철수";
// console.log(name)

//ES6, let / const
// let : 변화하는 내용을 넣을때 선언.
// const : constant 상수, 변화하지 않는 내용을 담을때 선언.(정말 많이 씀)

/*
let name = '철수';
name = '영희';
console.log(name);

const myName = '지우';
myName = '해피너스';
console.log(myName);
*/

// 함수
// ES5
/*
function multiply (number) {
return number * 2;
}

console.log(multiply(2));
*/

//*********** ES6 ***********/ 

const multiply2 = (number) =>{
  return number * 2;
}

console.log(multiply2(2));


const sum = (number) => {
  return number + 5;
}

console.log(sum(2));


// 화살표함수에서, 매개변수가 하나일때만 가능한 방법
const multiply3  = number => number*5;
console.log(multiply3(5));



/***************************
 * class : 객체지향프로그래밍
 * *************************/


class Pokemon {
  constructor() {
    this.pokemonName = "피카츄";
  }

  showPokemonName(){
    // 포켓몬 이름을 출력해주는 메소드
    console.log(this.pokemonName);
  }
}

// extends(확장)로 다른 클래스 끌어다 쓰기, 다른클래스의 메소드 쓸 수 있다.
class Trainer extends Pokemon{
  constructor(trainerName ='지우') { // 초기화, 기본값 지정
    // 다른클래스를 extends로 쓸땐 super로 constructor에게 알려준다.
    // extends 와 super는 같이다님
    super();
    this.name = trainerName;
  }
  
  // trainer 이름 출력하는 메소드
  showTrainerName () {
    console.log(this.name);
  }  
  another() {
    // 내부 메소드를 끌어다 쓰는 방법
    this.showTrainerName();
  }
}

const trainer = new Trainer('웅이');
// trainer.name = "김주은";
// 절차적으로 실행되므로 맨 밑에 있는것이 결과로 나옴

trainer.showTrainerName();
trainer.showPokemonName();
trainer.another();




/***********************
 * 스프레드 연산자
 * 배열에서도 쓸 수 있고,
 * 객체에서도 쓸 수 있다.
 * ... (점 세개로 작동)
 ***********************/


const pokemons = ['피카츄', '고라파덕', '이상해씨'];
const numbers = [1, 2, 3];

const newPoke = [...pokemons, '파이리', '갸라도스'];
console.log(newPoke);

// 다른배열의 요소를 포함하여 새로운 배열을 만들때는 "...배열이름" 으로 끌어온다.
const newNumers = [...numbers, 4, 5];
console.log(newNumers);

const pokemonTrainer = {
  name : '지우'
}
console.log(pokemonTrainer);

const newTrainer = {
  ...pokemonTrainer,
  age : 20
}
console.log(newTrainer);


const char = {
  enLength: 26
}

const num = {
  ...char,
  alphabet: "characters"
}

console.log(num);


/**
 * rest 연산자
 * args = arguments (인수)
 */


const filterMumbers = (...args) => {
  return args.filter(number => {
    if (number === 1) {
      return number
    }
  })
}
console.log(filterMumbers(1, 3, 5, 6, 7));
// 배열로 뱉어줌


const filterAlphaber = (...args) => {
  return args.filter(char => {
    if (char === 'a') {
      return char
    }
  })
}
console.log(filterAlphaber('a', 'b,', 'c', 'd'));


const filterLunch = (...menu) => {
  return menu.filter(food => {
    if(food === '짬짜면') {
      return food
    }
  })
}

console.log(filterLunch('짜장면', '짬뽕', '짬짜면'));
// filter 메소드는 결과를 배열로 만들어준다.


const filterPokemon = (...args) => {
  return args.filter(pokemon => {
    // 조건을 두가지 걸러낼때
    // 하나씩 꺼내오기 때문에 &&는 안됨
    if(pokemon === '피카츄' || pokemon === '이상해씨') {
      return pokemon
    }
  })
}
console.log(filterPokemon(...pokemons));




/***
 * 구조분해 - Destructuring
 * structure = 구조
 * ds- 분해
 */

const [c, d, e] = pokemons;
console.log(c, d, e);

// 공백으로 처리한 부분은 skip
const [first, , second] = pokemons // 결과 : 피카츄 고라파덕 이상해씨
console.log(first, second) // 결과 : 피카츄 이상해씨


/**
 * 객체 구조분해
 */

const { nickname, age } = {
  nickname: '김주은',
  age: 28
}

console.log(nickname, age)


/**
 * map 배열 메소드
 * forEach / Map의 차이
 * map은 결과를 새로운 배열로 반환해준다.
 */

const doubleNumbers = numbers.map(num => num * 2)
console.log(doubleNumbers);

const namedPokemon = pokemons.map(pokemon => pokemon + ', 너로 정했다!');
console.log(namedPokemon);