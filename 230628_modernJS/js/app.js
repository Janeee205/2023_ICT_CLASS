
// async - await
/*
const promise = async ( )=> {
  try{
    const getData = await fetch('주소')
    const result = await getData.json()
  } catch (error) {
    console.log(error)
  }
}
*/

/**
 * import / export
 */

/*
import add from './add.js'
import multiply from './multiply.js'

console.log(add(2))

// 곱하기
console.log(multiply(5))
*/

// 여러개를 불러올때 중괄호로 묶는다.
import {add as plus, multiply} from './util.js'
console.log(plus(7))
console.log(multiply(7))


import * as calc from './util.js'
console.log('calc로 add 호출 ' + calc.add(10))


// util에 double 추가
console.log('double 호출 ' + calc.double(10))